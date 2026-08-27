'use client';

import { useMemo, useState } from 'react';

type Publication = { id: string; year: number | null; title: string; journal: string; section: string; index: string; doi: string; link: string; authors?: string };
const options = [['all', 'All journals'], ['international', 'International journals'], ['domestic', 'Domestic journals'], ['SCI(E)', 'SCI(E)'], ['SCOPUS', 'SCOPUS'], ['KCI', 'KCI']];

function citationAuthors(authors: string) {
  return authors.split(', ').map(author => {
    const parts = author.trim().split(' ');
    const family = parts.pop();
    const initials = parts.map(part => part.split('-').map(name => `${name.charAt(0).toUpperCase()}.`).join('-')).join(' ');
    return `${family}, ${initials}`;
  }).join(', ');
}

export default function PublicationExplorer({ publications }: { publications: Publication[] }) {
  const [filter, setFilter] = useState('all');
  const shown = useMemo(() => publications.filter(publication => {
    if (filter === 'all') return true;
    if (filter === 'international' || filter === 'domestic') return publication.section === filter;
    return publication.index === filter;
  }), [publications, filter]);

  return <>
    <div className="journal-toolbar">
      <p><strong>{shown.length}</strong> journal article{shown.length === 1 ? '' : 's'}</p>
      <select aria-label="Journal article filter" value={filter} onChange={event => setFilter(event.target.value)}>
        {options.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
      </select>
    </div>
    <div className="record-list publication-list">
      {shown.map((publication, index) => {
        const startsYear = index === 0 || shown[index - 1].year !== publication.year;
        return <article className={`record${startsYear ? ' year-start' : ''}`} key={publication.id}>
        <div className="record-side">{startsYear ? publication.year : ''}</div>
        <div>
          <h3>{publication.title}</h3>
          {publication.authors && <p className="record-authors">{citationAuthors(publication.authors)}</p>}
          <p className="record-meta"><em>{publication.journal}</em> <span className={`badge publication-index ${publication.index === 'SCI(E)' ? 'sci' : publication.index.toLowerCase()}`}>{publication.index}</span></p>
          <a className="doi-link" href={publication.link} target="_blank" rel="noreferrer">{publication.doi ? 'DOI' : 'Article record'}</a>
        </div>
      </article>})}
    </div>
  </>;
}

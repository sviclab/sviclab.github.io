'use client';

import { useMemo, useState } from 'react';

type Publication = { id: string; year: number | null; title: string; journal: string; section: string; index: string; doi: string; link: string; authors?: string };
const options = [['all', 'All journals'], ['international', 'International journals'], ['domestic', 'Domestic journals'], ['SCI(E)', 'SCI(E)'], ['SCOPUS', 'SCOPUS'], ['KCI', 'KCI']];

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
    <div className="record-list">
      {shown.map((publication, index) => <article className="record" key={publication.id}>
        <div className="record-side">{index === 0 || shown[index - 1].year !== publication.year ? publication.year : ''}</div>
        <div>
          <h3>{publication.title}</h3>
          {publication.authors && <p className="record-authors">{publication.authors}</p>}
          <p className="record-meta"><em>{publication.journal}</em> <span className={`badge publication-index ${publication.index === 'SCI(E)' ? 'sci' : publication.index.toLowerCase()}`}>{publication.index}</span></p>
          <a className="doi-link" href={publication.link} target="_blank" rel="noreferrer">{publication.doi ? 'DOI' : 'Article record'}</a>
        </div>
      </article>)}
    </div>
  </>;
}

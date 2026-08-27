'use client';

import { useMemo, useState } from 'react';

type Publication = {
  id: string;
  year: number | null;
  title: string;
  journal: string;
  publisher: string;
  index: string;
  issn: string;
  funder: string;
  doi: string;
  link: string;
  linkLabel: string;
};

export default function PublicationExplorer({ publications }: { publications: Publication[] }) {
  const [index, setIndex] = useState('all');
  const shown = useMemo(() => publications.filter(publication =>
    index === 'all' || publication.index === index
  ), [publications, index]);

  return <>
    <div className="toolbar">
      <select aria-label="Index" value={index} onChange={event => setIndex(event.target.value)}>
        <option value="all">All indexes</option>
        <option value="SCI(E)">SCI(E)</option>
        <option value="SCOPUS">SCOPUS</option>
        <option value="KCI">KCI</option>
        <option value="International">International</option>
      </select>
    </div>
    <div className="record-list">
      {shown.map(publication => <article className="record" key={publication.id}>
        <div className="record-side">{publication.year}</div>
        <div>
          <div className="badges"><span className={`badge ${publication.index === 'SCI(E)' ? 'sci' : publication.index.toLowerCase()}`}>{publication.index}</span></div>
          <h3>{publication.title}</h3>
          <p className="record-meta">{publication.journal}{publication.publisher && ` · ${publication.publisher}`}{publication.issn && ` · ISSN ${publication.issn}`}</p>
          {publication.funder && <p className="record-meta">Research support · {publication.funder}</p>}
          <a className="doi-link" href={publication.link} target="_blank" rel="noreferrer">{publication.doi ? 'DOI' : 'Article record'}</a>
        </div>
      </article>)}
      {shown.length === 0 && <p className="empty">No records found.</p>}
    </div>
  </>;
}

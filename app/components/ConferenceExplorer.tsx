'use client';

import { useMemo, useState } from 'react';

type ConferenceRecord = {
  id: string;
  year: number;
  title: string;
  meta: string;
  group: 'International' | 'Domestic';
  link: string;
  linkLabel: 'Paper' | 'Conference';
};

export default function ConferenceExplorer({ records }: { records: ConferenceRecord[] }) {
  const [filter, setFilter] = useState('all');
  const shown = useMemo(() => records.filter(record => filter === 'all' || record.group === filter), [records, filter]);

  return <>
    <div className="journal-toolbar">
      <p><strong>{shown.length}</strong> conference record{shown.length === 1 ? '' : 's'}</p>
      <select aria-label="Conference filter" value={filter} onChange={event => setFilter(event.target.value)}>
        <option value="all">All</option>
        <option value="International">International</option>
        <option value="Domestic">Domestic</option>
      </select>
    </div>
    <div className="record-list publication-list">
      {shown.map((record, index) => {
        const startsYear = index === 0 || shown[index - 1].year !== record.year;
        return <article className={`record${startsYear ? ' year-start' : ''}`} key={record.id}>
          <div className="record-side">{startsYear ? record.year : ''}</div>
          <div>
            <h3>{record.title}</h3>
            <p className="record-meta">{record.meta} <span className="badge publication-index">{record.group}</span></p>
            <a className="doi-link" href={record.link} target="_blank" rel="noreferrer">{record.linkLabel}</a>
          </div>
        </article>;
      })}
    </div>
  </>;
}

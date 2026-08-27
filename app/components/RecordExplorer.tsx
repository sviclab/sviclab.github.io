'use client';

import { useMemo, useState } from 'react';

type RecordItem = {
  id: string;
  side: string;
  title: string;
  meta: string;
  detail?: string;
  group?: string;
  image?: string;
};

export default function RecordExplorer({ records, groups }: { records: RecordItem[]; groups?: string[]; placeholder?: string }) {
  const [group, setGroup] = useState('all');
  const shown = useMemo(() => records.filter(record => group === 'all' || record.group === group), [records, group]);

  return <>
    {groups && <div className="toolbar">
      <select aria-label="Category" value={group} onChange={event => setGroup(event.target.value)}>
        <option value="all">All categories</option>
        {groups.map(item => <option value={item} key={item}>{item}</option>)}
      </select>
    </div>}
    <div className="record-list">
      {shown.map(record => <article className={`record${record.image ? ' patent-record' : ''}`} key={record.id}>
        <div className="record-side">{record.side}</div>
        {record.image && <a className="patent-certificate" href={record.image} target="_blank" rel="noreferrer" aria-label={`Open certificate for ${record.title}`}>
          <img src={record.image} alt="Patent registration certificate" />
        </a>}
        <div>
          {record.group && <div className="badges"><span className="badge">{record.group}</span></div>}
          <h3>{record.title}</h3>
          <p className="record-meta">{record.meta}</p>
          {record.detail && <p className="record-meta">{record.detail}</p>}
        </div>
      </article>)}
    </div>
  </>;
}

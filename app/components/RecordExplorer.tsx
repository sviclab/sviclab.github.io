'use client';

import { Fragment, useEffect, useMemo, useState } from 'react';

type RecordItem = { id: string; side: string; title: string; meta: string; detail?: string; group?: string; image?: string; year?: number };

export default function RecordExplorer({ records, groups }: { records: RecordItem[]; groups?: string[]; placeholder?: string }) {
  const [group, setGroup] = useState('all');
  const [preview, setPreview] = useState<string | null>(null);
  const shown = useMemo(() => records.filter(record => group === 'all' || record.group === group), [records, group]);

  useEffect(() => {
    if (!preview) return;
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setPreview(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', close);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', close);
    };
  }, [preview]);

  return <>
    {groups && <div className="toolbar"><select aria-label="Category" value={group} onChange={event => setGroup(event.target.value)}><option value="all">All categories</option>{groups.map(item => <option value={item} key={item}>{item}</option>)}</select></div>}
    <div className="record-list">
      {shown.map((record,index) => {
        const startsYear=Boolean(record.year)&&(index===0||shown[index-1].year!==record.year);
        return <Fragment key={record.id}>
          {startsYear&&<div className="record-year">{record.year}</div>}
          <article className={`record${record.image ? ' patent-record' : ''}`}>
            <div className="record-side">{record.side}</div>
            {record.image && <button className="patent-certificate" type="button" onClick={() => setPreview(record.image!)} aria-label={`Preview certificate for ${record.title}`}><img src={record.image} alt="Patent registration certificate" /></button>}
            <div>{record.group && <div className="badges"><span className="badge">{record.group}</span></div>}<h3>{record.title}</h3><p className="record-meta">{record.meta}</p>{record.detail && <p className="record-meta">{record.detail}</p>}</div>
          </article>
        </Fragment>;
      })}
    </div>
    {preview && <div className="certificate-modal" role="dialog" aria-modal="true" aria-label="Patent certificate preview" onClick={() => setPreview(null)}>
      <div className="certificate-modal-content" onClick={event => event.stopPropagation()}>
        <img src={preview} alt="Enlarged patent registration certificate" />
        <button className="certificate-modal-close" type="button" onClick={() => setPreview(null)} aria-label="Close preview">×</button>
      </div>
    </div>}
  </>;
}

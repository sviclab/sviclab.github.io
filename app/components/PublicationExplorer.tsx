'use client';
import { useMemo, useState } from 'react';

type Publication = {id:string;year:number|null;title:string;journal:string;publisher:string;index:string;role:string;issn:string;funder:string;doi:string;link:string;linkLabel:string};

export default function PublicationExplorer({ publications }: { publications: Publication[] }) {
  const [query,setQuery]=useState(''); const [index,setIndex]=useState('all');
  const shown=useMemo(()=>publications.filter(p=>(index==='all'||p.index===index)&&(`${p.title} ${p.journal} ${p.year}`.toLowerCase().includes(query.toLowerCase()))),[publications,query,index]);
  return <><div className="toolbar"><input aria-label="논문 검색" placeholder="제목, 학술지, 연도 검색" value={query} onChange={e=>setQuery(e.target.value)}/><select aria-label="등재 구분" value={index} onChange={e=>setIndex(e.target.value)}><option value="all">전체 등재 구분</option><option value="SCI(E)">SCI(E)</option><option value="SCOPUS">SCOPUS</option><option value="KCI">KCI</option><option value="International">International</option></select></div><div className="record-list">{shown.map(p=><article className="record" key={p.id}><div className="record-side">{p.year}</div><div><div className="badges"><span className={`badge ${p.index==='SCI(E)'?'sci':p.index.toLowerCase()}`}>{p.index}</span>{p.role&&<span className="badge">{p.role}</span>}</div><h3>{p.title}</h3><p className="record-meta">{p.journal}{p.publisher&&` · ${p.publisher}`}{p.issn&&` · ISSN ${p.issn}`}</p>{p.funder&&<p className="record-meta">Research support · {p.funder}</p>}<a className="doi-link" href={p.link} target="_blank" rel="noreferrer">{p.linkLabel} ↗</a></div></article>)}{shown.length===0&&<p className="empty">검색 결과가 없습니다.</p>}</div></>;
}

'use client';

import { useEffect, useState } from 'react';

const research = [
  ['01', 'Seismic Performance', '내진성능 평가', '비선형 해석과 확률론적 평가를 통해 건축·산업 구조물의 지진 안전성을 정량화합니다.'],
  ['02', 'Vibration Control', '진동제어 시스템', '면진·제진 장치와 에너지 소산 시스템을 활용해 구조물의 응답을 효과적으로 제어합니다.'],
  ['03', 'Steel Structures', '강구조 내진설계', '가새골조, 접합부, 파이프랙을 중심으로 합리적인 설계법과 상세를 개발합니다.'],
];

const publications = [
  ['2025', 'Experimental study on seismic behaviors of CFS partition walls with varied construction practices using shake table tests', 'Journal of Building Engineering', '10.1016/j.jobe.2025.114343'],
  ['2025', 'Seismic risk evaluation of pipeline supporting chevron steel concentrically braced frames designed according to general steel design requirements', 'Engineering Structures', '10.1016/j.engstruct.2025.121200'],
  ['2025', 'A comprehensive method for evaluating compressive strength and buckling behavior of corner gusset plates with various shapes', 'Engineering Structures', '10.1016/j.engstruct.2025.120158'],
  ['2025', 'Net-section fracture resistances of bolted gusset plates with various connection details', 'Journal of Constructional Steel Research', '10.1016/j.jcsr.2025.109350'],
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => setDark(localStorage.getItem('svic-theme') === 'dark'), []);
  function theme() { setDark(v => { localStorage.setItem('svic-theme', v ? 'light' : 'dark'); return !v; }); }

  return <div className={dark ? 'site dark' : 'site'}>
    <header className="topbar">
      <a className="brand" href="#top"><span className="seal">SV</span><span>SViC LAB<small>STRUCTURAL VIBRATION CONTROL</small></span></a>
      <button className="menubtn" onClick={() => setMenu(!menu)} aria-expanded={menu}>MENU</button>
      <nav className={menu ? 'nav open' : 'nav'}>
        {['About','Research','People','Publications','Contact'].map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={()=>setMenu(false)}>{x}</a>)}
        <a href="https://github.com/sviclab" target="_blank" rel="noreferrer">GitHub ↗</a>
        <button className="theme" onClick={theme} aria-label="화면 색상 전환">{dark ? '☀' : '◐'}</button>
      </nav>
    </header>

    <main id="top">
      <section className="hero">
        <div>
          <p className="eyebrow"><span/>University of Seoul · Architectural Engineering</p>
          <h1>Engineering structures<br/>for a <em>resilient</em> future.</h1>
          <p className="lede">지진과 진동으로부터 안전한 도시를 위해 구조물의 거동을 이해하고, 더 나은 내진설계와 진동제어 기술을 연구합니다.</p>
          <div className="actions"><a className="button primary" href="#research">Explore our research <b>↘</b></a><a className="linkbtn" href="mailto:hyungjoonkim@uos.ac.kr">Get in touch →</a></div>
        </div>
        <div className="structure" aria-label="구조물 가새 프레임을 추상화한 그래픽"><div className="grid"/><i className="frame one"/><i className="frame two"/><i className="brace a"/><i className="brace b"/><p><b>RESEARCH / 01</b><span>Resilience by design</span></p></div>
        <p className="scroll">SCROLL TO DISCOVER ↓</p>
      </section>

      <section id="about" className="section about">
        <p className="index">01 — ABOUT</p>
        <div className="split"><h2>We study how<br/>structures <i>respond.</i></h2><div><p className="intro">SViC Lab은 서울시립대학교 건축공학과의 구조물 진동제어 연구실입니다.</p><p>실험, 수치해석, 확률론적 위험도 평가를 연결하여 지진하중을 받는 구조물과 비구조요소의 실제 성능을 규명합니다. 연구 결과가 설계 기준과 현장에 닿도록 이론과 응용 사이의 간격을 좁힙니다.</p><a className="underline" href="#contact">연구실 소개 및 지원 안내 ↗</a></div></div>
        <div className="stats"><div><b>40+</b><span>INTERNATIONAL ARTICLES</span></div><div><b>35+</b><span>DOMESTIC ARTICLES</span></div><div><b>20+</b><span>REGISTERED PATENTS</span></div><div><b>2008—</b><span>AT UNIVERSITY OF SEOUL</span></div></div>
      </section>

      <section id="research" className="section research">
        <Heading index="02 — RESEARCH" title="What we investigate" text={'구조공학의 근본 질문에서 출발해\n안전한 일상을 만드는 해답을 찾습니다.'}/>
        <div className="researchlist">{research.map(r => <article key={r[0]}><span>{r[0]}</span><div className="researchicon">◇</div><div><small>{r[2]}</small><h3>{r[1]}</h3><p>{r[3]}</p></div><b>↗</b></article>)}</div>
      </section>

      <section id="people" className="section people">
        <Heading index="03 — PEOPLE" title="Professor & Principal Investigator" text={'구조 안전을 위한 연구와 교육을\n함께 이어갑니다.'}/>
        <div className="profile"><div className="avatar"><span>HK</span></div><div><p className="label">PROFESSOR / PRINCIPAL INVESTIGATOR</p><h3>김형준 <i>Hyung-Joon Kim</i></h3><p>서울시립대학교 건축학부 건축공학전공 교수. 구조 내진설계, 에너지 소산 시스템, 면진·제진 구조물의 성능평가를 연구합니다.</p><div className="profilelinks"><a href="mailto:hyungjoonkim@uos.ac.kr">Email ↗</a><a href="https://pure.uos.ac.kr/en/persons/hyung-joon-kim/" target="_blank" rel="noreferrer">Research profile ↗</a></div></div></div>
        <div className="recruit"><p>JOIN THE LAB</p><h3>Curious minds are welcome.</h3><p>내진공학과 구조물 진동제어의 새로운 가능성을 함께 탐구할 학부연구생과 대학원생을 기다립니다.</p><a href="#contact">지원 안내 보기 →</a></div>
      </section>

      <section id="publications" className="section publications">
        <Heading index="04 — PUBLICATIONS" title="Selected publications" text={'실적리스트_251231.xls 기준\n2025년 국제학술지 논문'}/>
        <div className="publist">{publications.map(p => <a key={p[1]} href={`https://doi.org/${p[3]}`} target="_blank" rel="noreferrer"><span>{p[0]}</span><div><h3>{p[1]}</h3><p><i>{p[2]}</i> · SCI(E)</p></div><b>↗</b></a>)}</div>
        <a className="underline allpubs" href="https://pure.uos.ac.kr/en/persons/hyung-joon-kim/" target="_blank" rel="noreferrer">View all research outputs ↗</a>
      </section>

      <section className="section projects">
        <Heading index="05 — RESEARCH PROJECTS" title="From analysis to impact" text={'공공·산업 현장의 실제 문제를\n구조공학의 언어로 해결합니다.'}/>
        <div className="projectgrid"><article><span>ONGOING RESEARCH</span><h3>산업시설 파이프랙<br/>구조 안전성</h3><p>파이프랙 가새골조의 붕괴성능 및 지진 위험도 평가</p></article><article><span>CORE TECHNOLOGY</span><h3>에너지 소산형<br/>진동제어 시스템</h3><p>이력형 제진장치와 면진 시스템의 설계 및 성능평가</p></article><article><span>NONSTRUCTURAL</span><h3>비구조요소<br/>내진성능</h3><p>경량벽체와 천장 시스템의 진동대 실험 및 해석</p></article></div>
      </section>

      <section id="contact" className="contact"><p className="index">06 — JOIN US</p><h2>Build safer structures<br/><i>with us.</i></h2><p>서울시립대학교 SViC Lab에서 구조공학의 다음 질문을 함께 풀어보세요.</p><a className="button darkbtn" href="mailto:hyungjoonkim@uos.ac.kr">hyungjoonkim@uos.ac.kr <b>↗</b></a></section>
    </main>

    <footer><div className="brand"><span className="seal">SV</span><span>SViC LAB<small>STRUCTURAL VIBRATION CONTROL</small></span></div><p>University of Seoul<br/>163 Seoulsiripdaero, Dongdaemun-gu, Seoul</p><p>© 2026 SViC Lab.<br/>All rights reserved.</p><a href="https://github.com/sviclab" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">Top ↑</a></footer>
  </div>
}

function Heading({index,title,text}:{index:string,title:string,text:string}) { return <div className="heading"><div><p className="index">{index}</p><h2>{title}</h2></div><p>{text.split('\n').map((x,i)=><span key={x}>{x}{i===0&&<br/>}</span>)}</p></div> }

'use client';

import { useSyncExternalStore } from 'react';

const themeEvent = 'svic-theme-change';

function subscribeToTheme(onStoreChange: () => void) {
  window.addEventListener('storage', onStoreChange);
  window.addEventListener(themeEvent, onStoreChange);

  return () => {
    window.removeEventListener('storage', onStoreChange);
    window.removeEventListener(themeEvent, onStoreChange);
  };
}

function getThemeSnapshot() {
  return localStorage.getItem('svic-theme') === 'dark';
}

function getServerThemeSnapshot() {
  return false;
}

const international = [
  {year:'2025',title:'Experimental study on seismic behaviors of CFS partition walls with varied construction practices using shake table tests',venue:'Journal of Building Engineering',doi:'10.1016/j.jobe.2025.114343'},
  {year:'2025',title:'Seismic risk evaluation of pipeline supporting chevron steel concentrically braced frames designed according to general steel design requirements',venue:'Engineering Structures',doi:'10.1016/j.engstruct.2025.121200'},
  {year:'2025',title:'A comprehensive method for evaluating compressive strength and buckling behavior of corner gusset plates with various shapes',venue:'Engineering Structures',doi:'10.1016/j.engstruct.2025.120158'},
  {year:'2025',title:'Net-section fracture resistances of bolted gusset plates with various connection details',venue:'Journal of Constructional Steel Research',doi:'10.1016/j.jcsr.2025.109350'},
  {year:'2024',title:'Capacity Fragility of Screw Connections installed in Cold-Formed Steel Partition Walls',venue:'International Journal of Steel Structures',doi:'10.1007/s13296-024-00892-x'},
];

const domestic = [
  ['2025','지역단위 지진 붕괴위험도에 대한 영향요인 분석','한국전산구조공학회논문집'],
  ['2024','횡-비틀림 거동하는 고차모드 지배 저층구조물의 내진보강 전략','한국전산구조공학회논문집'],
  ['2024','내진설계변수와 설계요구조건에 따른 파이프랙 중심가새골조의 확률론적 내진성능','한국강구조학회 논문집'],
];

export default function Home(){
  const dark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  function toggle(){
    localStorage.setItem('svic-theme', dark ? 'light' : 'dark');
    window.dispatchEvent(new Event(themeEvent));
  }
  return <div className={dark?'site dark':'site'}>
    <header className="topbar"><nav className="topbar-inner">
      <a className="brand" href="#top">SViC Lab</a>
      <ul className="navlinks"><li><a href="#about">About</a></li><li><a href="#research">Research</a></li><li><a href="#people">People</a></li><li><a href="#publications">Publications</a></li><li><a href="#projects">Projects</a></li></ul>
      <button className="theme-toggle" onClick={toggle} aria-label="Toggle dark mode"><span aria-hidden="true">{dark?'☀':'◐'}</span></button>
    </nav></header>

    <main id="top">
      <section className="hero">
        <img className="lab-logo" src="/assets/svic-logo.png" alt="SViC Lab logo"/>
        <div className="hero-text"><h1>SViC Lab <span className="hangul">구조물 진동제어 연구실</span></h1><p className="role">Structural Vibration Control Laboratory</p><p className="affil">Architectural Engineering, University of Seoul</p>
          <ul className="links"><li><a href="mailto:hyungjoonkim@uos.ac.kr">Email</a></li><li><a href="https://pure.uos.ac.kr/en/persons/hyung-joon-kim/" target="_blank" rel="noreferrer">Research Profile</a></li><li><a href="https://github.com/sviclab" target="_blank" rel="noreferrer">GitHub</a></li><li><a href="https://svic.creatorlink.net" target="_blank" rel="noreferrer">Previous Website</a></li></ul>
        </div>
      </section>

      <section id="about" className="section"><h2>About</h2><p className="lede">SViC Lab은 지진과 진동으로부터 안전한 건축물을 만들기 위해 구조물의 내진성능과 진동제어 기술을 연구합니다.</p><p>실험, 비선형 수치해석, 확률론적 위험도 평가를 함께 활용하여 강구조 시스템, 면진·제진 구조물, 산업시설 파이프랙 및 비구조요소의 실제 지진 거동을 규명합니다. 연구 성과가 설계 기준과 현장에 이어지도록 이론과 응용 사이의 간격을 좁히는 것을 목표로 합니다.</p></section>

      <section id="research" className="section"><h2>Research</h2><div className="cards">
        <article className="card"><h3>Seismic Performance</h3><p>비선형 정적·동적해석과 취약도 평가를 통한 구조물 내진성능 및 지진위험도 분석</p></article>
        <article className="card"><h3>Vibration Control</h3><p>면진·제진 장치와 에너지 소산 시스템의 개발, 설계 및 성능평가</p></article>
        <article className="card"><h3>Steel Structures</h3><p>가새골조, 거셋 플레이트, 파이프랙을 중심으로 한 강구조 내진설계</p></article>
        <article className="card"><h3>Nonstructural Components</h3><p>경량벽체와 천장 등 비구조요소의 진동대 실험, 거동 모델링 및 취약도 평가</p></article>
      </div></section>

      <section id="people" className="section"><h2>People</h2><h3 className="subhead">Professor</h3><article className="person professor"><img src="/assets/hyung-joon-kim.jpg" alt="Professor Hyung-Joon Kim"/><div><h3>Hyung-Joon Kim <span className="ko">김형준</span></h3><p className="person-role">Professor, Department of Architectural Engineering</p><p>Ph.D., Department of Civil Engineering, University of Toronto (2008)</p><p>Structural seismic design · Energy dissipating systems · Seismic performance evaluation</p><a href="mailto:hyungjoonkim@uos.ac.kr">hyungjoonkim@uos.ac.kr</a></div></article>
        <h3 className="subhead">Current members</h3><div className="people-grid">
          <article className="person"><img src="/assets/yi-seop-shin.jpg" alt="Yi-Seop Shin"/><div><h3>Yi-Seop Shin <span className="ko">신이섭</span></h3><p className="person-role">Ph.D. Candidate · 2023–</p><p>Seismic retrofit using vibration mode conversion</p></div></article>
          <article className="person"><img src="/assets/hyun-go.jpg" alt="Hyun Go"/><div><h3>Hyun Go <span className="ko">고현</span></h3><p className="person-role">Ph.D. Student · 2025–</p><p>Seismic risk of pipeline-supporting CBFs</p></div></article>
          <article className="person"><img src="/assets/dong-wan-kim.jpg" alt="Dong-Wan Kim"/><div><h3>Dong-Wan Kim <span className="ko">김동완</span></h3><p className="person-role">M.S. Student · 2024–</p><p>Nonstructural components and seismic response</p></div></article>
          <article className="person no-photo"><div><h3>Sang-Woon Lee <span className="ko">이상운</span></h3><p className="person-role">B.S. Student · 2020–</p><p>Undergraduate researcher</p></div></article>
        </div><p className="cv-note">Graduate and undergraduate researchers interested in structural and earthquake engineering are welcome to <a href="mailto:hyungjoonkim@uos.ac.kr">contact us</a>.</p></section>

      <section id="publications" className="section"><h2>Publications</h2><h3 className="subhead">Selected international journal articles</h3><ol className="pubs">{international.map(p=><li className="pub" key={p.title}><span className="pub-year">{p.year}</span><div className="pub-body"><p className="pub-title">{p.title}</p><p className="pub-venue"><em>{p.venue}</em> <span className="idx">SCI(E)</span></p><p className="pub-actions"><a href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer">DOI</a></p></div></li>)}</ol>
        <h3 className="subhead">Selected domestic journal articles</h3><ol className="pubs">{domestic.map(p=><li className="pub" key={p[1]}><span className="pub-year">{p[0]}</span><div className="pub-body"><p className="pub-title">{p[1]}</p><p className="pub-venue"><em>{p[2]}</em> <span className="idx">KCI</span></p></div></li>)}</ol>
        <p className="cv-note">A complete publication list is available on the <a href="https://pure.uos.ac.kr/en/persons/hyung-joon-kim/" target="_blank" rel="noreferrer">University of Seoul research profile</a>.</p>
      </section>

      <section id="projects" className="section"><h2>Projects & Intellectual Property</h2><h3 className="subhead">Research areas and applications</h3><ul className="timeline"><li><span className="tl-date">Industry</span><div><p className="tl-title">여수산단 공용파이프랙 구조안정성 확보사업</p><p className="tl-meta">Pipeline-supporting steel structures · Seismic risk assessment</p></div></li><li><span className="tl-date">Technology</span><div><p className="tl-title">면진·제진 및 에너지 소산 시스템</p><p className="tl-meta">Registered patents include high-damping dampers, hybrid control devices, seismic retrofit systems, and isolation modules.</p></div></li></ul></section>

      <section id="contact" className="section"><h2>Contact</h2><p><strong>SViC Lab, University of Seoul</strong><br/>163 Seoulsiripdaero, Dongdaemun-gu, Seoul 02504, Republic of Korea</p><p>Email: <a href="mailto:hyungjoonkim@uos.ac.kr">hyungjoonkim@uos.ac.kr</a><br/>Tel: +82-2-6490-2763</p></section>
    </main>

    <footer className="footer"><p>© 2026 SViC Lab, University of Seoul.</p><p className="footer-sub">Content based on the laboratory records updated December 2025.</p></footer>
  </div>
}

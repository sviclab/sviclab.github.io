import Link from 'next/link';
import data from '../data/achievements.json';

const stats = [
  ['Journal articles', data.counts.publications, '/publications'],
  ['Conference activities', data.counts.conferences, '/conferences'],
  ['Project records', data.counts.projects, '/projects'],
  ['Registered patents', data.counts.patents, '/patents'],
] as const;

export default function Home() {
  return <>
    <section className="hero page-width">
      <img className="lab-logo" src="/assets/svic-logo.png" alt="SViC Lab" />
      <div><p className="eyebrow">University of Seoul · Architectural Engineering</p><h1>Structural Vibration<br />Control Laboratory</h1><p className="hero-copy">지진과 진동에 더 안전한 구조물을 위해 내진성능, 진동제어, 강구조 시스템과 비구조요소를 연구합니다.</p><div className="action-row"><Link className="button" href="/research">Explore research</Link><Link className="text-link" href="/publications">View all publications →</Link></div></div>
    </section>
    <section className="stats page-width" aria-label="Research achievements">{stats.map(([label, value, href]) => <Link href={href} className="stat" key={label}><strong>{value}</strong><span>{label}</span></Link>)}</section>
    <section className="split page-width section-space"><div><p className="eyebrow">Research focus</p><h2>From structural response<br />to practical resilience.</h2></div><div className="focus-list">
      <Link href="/research#seismic"><span>01</span><strong>Seismic Performance</strong><small>내진성능 및 확률론적 지진위험도</small></Link><Link href="/research#control"><span>02</span><strong>Vibration Control</strong><small>면진·제진 및 에너지 소산 시스템</small></Link><Link href="/research#steel"><span>03</span><strong>Steel Structures</strong><small>가새골조, 거셋 플레이트, 파이프랙</small></Link><Link href="/research#nonstructural"><span>04</span><strong>Nonstructural Components</strong><small>경량벽체·천장·의료기기의 내진성능</small></Link>
    </div></section>
    <section className="statement"><div className="page-width"><p>We combine full-scale experiments, nonlinear analysis, and probabilistic assessment to translate research into safer design and practice.</p></div></section>
  </>;
}

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
      <div><p className="eyebrow">University of Seoul · Architectural Engineering</p><h1>Structural Vibration<br />Control Laboratory</h1><p className="hero-copy">Research on seismic performance, vibration control, steel structures, and nonstructural components.</p><div className="action-row"><Link className="button" href="/research">Research</Link><Link className="text-link" href="/publications">Publications →</Link></div></div>
    </section>
    <section className="stats page-width" aria-label="Research achievements">{stats.map(([label, value, href]) => <Link href={href} className="stat" key={label}><strong>{value}</strong><span>{label}</span></Link>)}</section>
    <section className="split page-width section-space"><div><p className="eyebrow">Research focus</p><h2>From structural response<br />to practical resilience.</h2></div><div className="focus-list">
      <Link href="/research#seismic"><span>01</span><strong>Seismic Performance</strong><small>Performance and probabilistic seismic risk</small></Link><Link href="/research#control"><span>02</span><strong>Vibration Control</strong><small>Isolation, damping, and energy dissipation</small></Link><Link href="/research#steel"><span>03</span><strong>Steel Structures</strong><small>Braced frames, gusset plates, and pipe racks</small></Link><Link href="/research#nonstructural"><span>04</span><strong>Nonstructural Components</strong><small>Partitions, ceilings, and freestanding equipment</small></Link>
    </div></section>
    <section className="statement"><div className="page-width"><p>Experimental testing, nonlinear analysis, and probabilistic assessment of structural response.</p></div></section>
  </>;
}

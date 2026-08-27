import type { Metadata } from 'next';
import PageHero from '../components/PageHero';

export const metadata: Metadata = { title: 'People | SViC Lab' };

const current = [
  {
    image: '/assets/yi-seop-shin.jpg',
    name: 'Yi-Seop Shin',
    degrees: [
      'B.S., Architectural Engineering, University of Seoul',
      'M.S., Architectural Engineering, University of Seoul (2023)',
      'Ph.D. Candidate, Architectural Engineering, University of Seoul (2023–)',
    ],
    thesis: 'Seismic Retrofit Using Vibration Mode Conversion of Existing Low-rise Buildings',
    url: 'https://www.dcollection.net/handler/uos/000000034199',
  },
  {
    image: '/assets/hyun-go.jpg',
    name: 'Hyun Go',
    degrees: [
      'B.S., Architectural Engineering, University of Seoul',
      'M.S., Architectural Engineering, University of Seoul (2025)',
      'Ph.D. Student, Architectural Engineering, University of Seoul (2025–)',
    ],
    thesis: 'Seismic Risk of Pipeline Supporting CBFs Designed According to Different Seismic Design Requirements',
    url: 'https://www.dcollection.net/handler/uos/000000036091',
  },
  {
    image: '/assets/dong-wan-kim.jpg',
    name: 'Dong-Wan Kim',
    degrees: [
      'B.S., Architectural Engineering, University of Seoul (2024)',
      'M.S. Student, Architectural Engineering, University of Seoul (2024–)',
    ],
  },
];

const alumni = [
  ['Kyung-Suk Choi', 'M.S. (2012); Ph.D. (2018)', 'Degree-of-Coupling Based Seismic Design for Reinforced Concrete Shear Wall Systems', 'https://www.dcollection.net/handler/uos/000000029840'],
  ['Dong-Hyeon Shin', 'M.S. (2015); Ph.D. (2019)', 'Reliability-Based Analysis of Seismically Isolated Structures', 'https://www.dcollection.net/handler/uos/000000030667'],
  ['Jin-Young Park', 'M.S. (2015)', 'Evaluation of Seismic Collapse Capacity of Steel Ordinary Concentrically Braced Frames', 'https://www.dcollection.net/handler/uos/000000023436'],
  ['Seung-Won Lee', 'M.S. (2015)', 'Seismic Fragility Evaluation of Reinforced Concrete Frames with Masonry Infill', 'https://www.dcollection.net/handler/uos/000000024604'],
  ['Saemee Jun', 'M.S. (2015)', 'Seismic Fragility Analysis of Steel Moment Resisting Frames Using Lumped Mass Models', 'https://www.dcollection.net/handler/uos/000000024611'],
  ['Ji-Wook Mauk', 'M.S. (2015)', 'Seismic Fatigue Behavior of In-plane Deformational Metallic Energy Dissipating Devices', 'https://www.dcollection.net/handler/uos/000000026538'],
  ['Suk-Jae Hong', 'M.S. (2017)', 'Seismic Risk Assessment of Steel Ordinary Concentrically Braced Frames Using Empirical Seismic Hazard Curves', 'https://www.dcollection.net/handler/uos/000000028137'],
  ['Jeong-Mo Hong', 'M.S. (2018)', 'Macro-Modeling of Unreinforced Masonry Walls for Dynamic Analysis', 'https://www.dcollection.net/handler/uos/000000030246'],
  ['Chan-Woong Moon', 'M.S. (2019)', 'Hysteretic Behavior of Steel Bracing Member Using Refined Physical Theory Model', 'https://www.dcollection.net/handler/uos/000000030668'],
];

function formatDegree(degree: string) {
  const match = degree.match(/^(B\.S\.|M\.S\.|Ph\.D\.)(?: \((\d{4})\))?$/);
  if (!match) return degree;
  return `${match[1]}, Architectural Engineering, University of Seoul${match[2] ? ` (${match[2]})` : ''}`;
}

export default function Page() {
  return <>
    <PageHero eyebrow="People" title="Members" description="Current members and alumni of the Structural Vibration Control Laboratory." />
    <section className="content-section page-width">
      <div className="profile">
        <img src="/assets/hyung-joon-kim.jpg" alt="Professor Hyung-Joon Kim" />
        <div>
          <p className="eyebrow">Professor</p>
          <h2>Hyung-Joon Kim</h2>
          <p>Professor, Department of Architectural Engineering, University of Seoul</p>
          <ul className="degree-list">
            <li>B.S., Architectural Engineering, Hanyang University</li>
            <li>M.S., Architectural Engineering, Hanyang University</li>
            <li>
              Ph.D., Civil Engineering, University of Toronto (2008)
              <a className="thesis-link" href="https://utoronto.scholaris.ca/items/1412ce8e-00c7-4f07-a9a1-97cb522356ef" target="_blank" rel="noreferrer">
                Dissertation · Self-centering steel moment-resisting frames with energy dissipating systems ↗
              </a>
            </li>
          </ul>
          <div className="profile-links">
            <a href="mailto:hyungjoonkim@uos.ac.kr">Email</a>
            <a href="https://orcid.org/0000-0002-4637-1558" target="_blank" rel="noreferrer">ORCID</a>
            <a href="https://www.scopus.com/authid/detail.uri?authorId=52164005000" target="_blank" rel="noreferrer">SCOPUS</a>
          </div>
        </div>
      </div>

      <div className="section-title section-break"><h2>Current members</h2></div>
      <div className="people-grid">
        {current.map(member => <article className="person-card" key={member.name}>
          <img src={member.image} alt={member.name} />
          <div>
            <h3>{member.name}</h3>
            <ul className="member-degrees">
              {member.degrees.map(degree => <li key={degree}>
                {degree}
                {member.thesis && degree.startsWith('M.S.,') && <a className="thesis-link" href={member.url} target="_blank" rel="noreferrer">
                  Thesis · {member.thesis} ↗
                </a>}
              </li>)}
            </ul>
          </div>
        </article>)}
      </div>

      <div className="section-title section-break"><h2>Alumni</h2><p>{alumni.length} members</p></div>
      <div className="alumni-list">
        {alumni.map(alumnus => {
          const degrees = ['B.S.', ...alumnus[1].split(';').map(degree => degree.trim())];
          return <article key={alumnus[0]}>
            <div>
              <h3>{alumnus[0]}</h3>
              <ul className="member-degrees">
                {degrees.map((degree, index) => <li key={degree}>
                  {formatDegree(degree)}
                  {index === degrees.length - 1 && <a className="thesis-link" href={alumnus[3]} target="_blank" rel="noreferrer">
                    {degree.startsWith('Ph.D.') ? 'Dissertation' : 'Thesis'} · {alumnus[2]} ↗
                  </a>}
                </li>)}
              </ul>
            </div>
          </article>;
        })}
      </div>
    </section>
  </>;
}

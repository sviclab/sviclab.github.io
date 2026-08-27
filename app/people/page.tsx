import type { Metadata } from 'next';
import PageHero from '../components/PageHero';

export const metadata: Metadata = { title: 'People | SViC Lab' };

type Thesis = { kind: 'Thesis' | 'Dissertation'; title: string; url: string };
type Education = { degree: string; thesis?: Thesis };

const current: { image: string; name: string; email: string; education: Education[] }[] = [
  {
    image: '/assets/yi-seop-shin.jpg',
    name: 'Yi-Seop Shin',
    email: 'yiseopshin@gmail.com',
    education: [
      { degree: 'B.S., Architectural Engineering, University of Seoul' },
      { degree: 'M.S., Architectural Engineering, University of Seoul (2023)', thesis: { kind: 'Thesis', title: 'Seismic Retrofit Using Vibration Mode Conversion of Existing Low-rise Buildings', url: 'https://www.dcollection.net/handler/uos/000000034199' } },
      { degree: 'Ph.D. Candidate, Architectural Engineering, University of Seoul (2023–)' },
    ],
  },
  {
    image: '/assets/hyun-go.jpg',
    name: 'Hyun Go',
    email: 'gohyun2000@gmail.com',
    education: [
      { degree: 'B.S., Architectural Engineering, University of Seoul' },
      { degree: 'M.S., Architectural Engineering, University of Seoul (2025)', thesis: { kind: 'Thesis', title: 'Seismic Risk of Pipeline Supporting CBFs Designed According to Different Seismic Design Requirements', url: 'https://www.dcollection.net/handler/uos/000000036091' } },
      { degree: 'Ph.D. Student, Architectural Engineering, University of Seoul (2025–)' },
    ],
  },
  {
    image: '/assets/dong-wan-kim.jpg',
    name: 'Dong-Wan Kim',
    email: 'dongwan3390@gmail.com',
    education: [
      { degree: 'B.S., Architectural Engineering, University of Seoul (2024)' },
      { degree: 'M.S. Student, Architectural Engineering, University of Seoul (2024–)' },
    ],
  },
];

const alumni: { name: string; education: Education[] }[] = [
  {
    name: 'Kyung-Suk Choi',
    education: [
      { degree: 'B.S., Architectural Engineering, University of Seoul' },
      { degree: 'M.S., Architectural Engineering, University of Seoul (2012)', thesis: { kind: 'Thesis', title: 'Seismic Performance of Reinforced Concrete Structural Wall Systems with Hybrid Dampers Using High Damping Rubber', url: 'https://www.dcollection.net/handler/uos/000000018166' } },
      { degree: 'Ph.D., Architectural Engineering, University of Seoul (2018)', thesis: { kind: 'Dissertation', title: 'Degree-of-Coupling Based Seismic Design for Reinforced Concrete Shear Wall Systems', url: 'https://www.dcollection.net/handler/uos/000000029840' } },
    ],
  },
  {
    name: 'Dong-Hyeon Shin',
    education: [
      { degree: 'B.S., Architectural Engineering, University of Seoul' },
      { degree: 'M.S., Architectural Engineering, University of Seoul (2015)', thesis: { kind: 'Thesis', title: 'Probabilistic Propagation of Hysteretic Energy Dissipating Device’s Property-Uncertainty to Seismic Response', url: 'https://www.dcollection.net/handler/uos/000000023415' } },
      { degree: 'Ph.D., Architectural Engineering, University of Seoul (2019)', thesis: { kind: 'Dissertation', title: 'Reliability-Based Analysis of Seismically Isolated Structures', url: 'https://www.dcollection.net/handler/uos/000000030667' } },
    ],
  },
  ...[
    ['Jin-Young Park', '2015', 'Evaluation of Seismic Collapse Capacity of Steel Ordinary Concentrically Braced Frames', 'https://www.dcollection.net/handler/uos/000000023436'],
    ['Seung-Won Lee', '2015', 'Seismic Fragility Evaluation of Reinforced Concrete Frames with Masonry Infill', 'https://www.dcollection.net/handler/uos/000000024604'],
    ['Saemee Jun', '2015', 'Seismic Fragility Analysis of Steel Moment Resisting Frames Using Lumped Mass Models', 'https://www.dcollection.net/handler/uos/000000024611'],
    ['Ji-Wook Mauk', '2015', 'Seismic Fatigue Behavior of In-plane Deformational Metallic Energy Dissipating Devices', 'https://www.dcollection.net/handler/uos/000000026538'],
    ['Suk-Jae Hong', '2017', 'Seismic Risk Assessment of Steel Ordinary Concentrically Braced Frames Using Empirical Seismic Hazard Curves', 'https://www.dcollection.net/handler/uos/000000028137'],
    ['Jeong-Mo Hong', '2018', 'Macro-Modeling of Unreinforced Masonry Walls for Dynamic Analysis', 'https://www.dcollection.net/handler/uos/000000030246'],
    ['Chan-Woong Moon', '2019', 'Hysteretic Behavior of Steel Bracing Member Using Refined Physical Theory Model', 'https://www.dcollection.net/handler/uos/000000030668'],
  ].map(([name, year, title, url]) => ({
    name,
    education: [
      { degree: 'B.S., Architectural Engineering, University of Seoul' },
      { degree: `M.S., Architectural Engineering, University of Seoul (${year})`, thesis: { kind: 'Thesis' as const, title, url } },
    ],
  })),
];

const alumniContact: Record<string, { email: string; image: string }> = {
  'Kyung-Suk Choi': { email: 'cksdoo@gmail.com', image: 'https://lh3.googleusercontent.com/9BM-vors5334qqx-hvV7bFn0Gev_TOF9CdHcp2VdIToETL9yEnTarV2k5nQBA6HqCKW8VHaueM-7J_ovYbo_H0yvW68mVGWWDSL5BXdm38FAaqabpp3h=w800' },
  'Dong-Hyeon Shin': { email: 'thymos19@gmail.com', image: 'https://lh3.googleusercontent.com/WyxZhXDuwHQB6ZEmjlQfQUgjBA2O5uSuvDitkxqHy19_w8vWIitkW7aCaIC3J0NCTWjvUZY_RnBe30MkGGmzNKvtRKNjk-wytmAoj68HmbXi2l-CUmv1das=w800' },
  'Jin-Young Park': { email: 'jyp6727@gmail.com', image: '/assets/member-placeholder.png' },
  'Seung-Won Lee': { email: 'swon0313@naver.com', image: '/assets/member-placeholder.png' },
  'Saemee Jun': { email: 'saemee.jun@gmail.com', image: '/assets/member-placeholder.png' },
  'Ji-Wook Mauk': { email: 'ahrwldnr@gmail.com', image: '/assets/member-placeholder.png' },
  'Suk-Jae Hong': { email: 'ghd_jh@naver.com', image: '/assets/member-placeholder.png' },
  'Jeong-Mo Hong': { email: 'gabrielhong91@gmail.com', image: '/assets/member-placeholder.png' },
  'Chan-Woong Moon': { email: 'cksdnd630@gmail.com', image: '/assets/member-placeholder.png' },
};

function ThesisEntry({ thesis }: { thesis: Thesis }) {
  return <div className="thesis-entry">
    <p>
      <a className="thesis-kind-link" href={thesis.url} target="_blank" rel="noreferrer">{thesis.kind}</a>
      <em>{thesis.title}</em>
    </p>
  </div>;
}

function EducationList({ education }: { education: Education[] }) {
  return <ul className="member-degrees">
    {education.map(item => <li key={item.degree}>
      {item.degree}
      {item.thesis && <ThesisEntry thesis={item.thesis} />}
    </li>)}
  </ul>;
}

function Initials({ name }: { name: string }) {
  return <div className="member-initials" aria-hidden="true">{name.split(/[- ]/).map(part => part[0]).join('')}</div>;
}

function MemberRow({ image, name, email, education, role }: { image?: string; name: string; email: string; education: Education[]; role?: string }) {
  const hasPhoto = image && image !== '/assets/member-placeholder.png';
  return <article className="member-row">
    {hasPhoto ? <img className="member-photo" src={image} alt={name} /> : <Initials name={name} />}
    <div className="member-identity">
      {role && <p className="member-role">{role}</p>}
      <h3>{name}</h3>
      <p className="member-email"><a href={`mailto:${email}`}>{email}</a></p>
    </div>
    <EducationList education={education} />
  </article>;
}

export default function Page() {
  return <>
    <PageHero eyebrow="People" title="Members" description="Current members and alumni of the Structural Vibration Control Laboratory." />
    <section className="content-section page-width">
      <div className="section-title"><h2>Faculty</h2></div>
      <div className="member-directory faculty-directory">
        <article className="member-row faculty-row">
          <img className="member-photo" src="/assets/hyung-joon-kim.jpg" alt="Professor Hyung-Joon Kim" />
          <div className="member-identity">
            <p className="member-role">Professor</p>
            <h3>Hyung-Joon Kim</h3>
            <p className="member-affiliation">Department of Architectural Engineering<br />University of Seoul</p>
            <p className="member-email"><a href="mailto:hyungjoonkim@uos.ac.kr">hyungjoonkim@uos.ac.kr</a></p>
            <div className="profile-links">
              <a href="https://orcid.org/0000-0002-4637-1558" target="_blank" rel="noreferrer">ORCID</a>
              <a href="https://www.scopus.com/authid/detail.uri?authorId=52164005000" target="_blank" rel="noreferrer">SCOPUS</a>
            </div>
          </div>
          <EducationList education={[
            { degree: 'B.S., Architectural Engineering, Hanyang University' },
            { degree: 'M.S., Architectural Engineering, Hanyang University' },
            { degree: 'Ph.D., Civil Engineering, University of Toronto (2008)', thesis: { kind: 'Dissertation', title: 'Self-centering steel moment-resisting frames with energy dissipating systems', url: 'https://utoronto.scholaris.ca/items/1412ce8e-00c7-4f07-a9a1-97cb522356ef' } },
          ]} />
        </article>
      </div>

      <div className="section-title section-break"><h2>Current members</h2></div>
      <div className="member-directory">
        {current.map(member => <MemberRow key={member.name} {...member} />)}
      </div>

      <div className="section-title section-break"><h2>Alumni</h2><p>{alumni.length} members</p></div>
      <div className="member-directory alumni-directory">
        {alumni.map(member => <MemberRow key={member.name} {...member} {...alumniContact[member.name]} />)}
      </div>
    </section>
  </>;
}

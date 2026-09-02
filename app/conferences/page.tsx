import type { Metadata } from 'next';
import data from '../../data/achievements.json';
import ConferenceExplorer from '../components/ConferenceExplorer';
import PageHero from '../components/PageHero';

export const metadata: Metadata = { title: 'Conferences | SViC Lab' };

const supplementalRecords = [
  {
    id: 'c-eurodyn-2020',
    year: 2020,
    sortDate: '2020-11-23',
    title: 'Structural Properties of Unreinforced Masonry Walls Considering Construction Qualities',
    meta: '11th International Conference on Structural Dynamics (EURODYN 2020) · Virtual, Athens, Greece',
    group: 'International' as const,
    link: 'https://doi.org/10.47964/1120.9164.19172',
    linkLabel: 'Paper' as const,
  },
  {
    id: 'c-icbmc-2018',
    year: 2018,
    sortDate: '2018-02-23',
    title: 'Experimental Investigation on Inelastic Cyclic Behaviour of Bracing Member with Wide-flange Section',
    meta: '3rd International Conference on Building Materials and Construction (ICBMC 2018) · Nha Trang, Vietnam',
    group: 'International' as const,
    link: 'https://doi.org/10.1088/1757-899X/371/1/012030',
    linkLabel: 'Paper' as const,
  },
];

const directPaperLinks: Record<number, string> = {
  1: 'https://publications.waset.org/abstracts/21711/an-analytical-study-on-rotational-capacity-of-beam-column-joints-in-unit-modular-frames',
  2: 'https://publications.waset.org/abstracts/21645/evaluation-of-expected-annual-loss-probabilities-of-rc-moment-resisting-frames',
  3: 'https://publications.waset.org/abstracts/21652/seismic-fragility-functions-of-rc-moment-frames-using-incremental-dynamic-analyses',
  4: 'https://publications.waset.org/10000612/seismic-performance-of-reinforced-concrete-frames-infilled-by-masonry-walls-with-different-heights',
  23: 'https://www.iitk.ac.in/nicee/wcee/article/WCEE2012_1422.pdf',
  79: 'https://doi.org/10.1002/cepa.2293',
  80: 'https://doi.org/10.1002/cepa.2234',
  95: 'https://www.scopus.com/pages/publications/56249107265',
};

function conferenceHomepage(record: (typeof data.conferences)[number]) {
  const name = `${record.conference} ${record.host} ${record.venue}`.toLowerCase();
  if (name.includes('international symposium on steel structures')) return 'https://www.isss.kr/';
  if (name.includes('seebus')) return 'https://seebus.ncree.org/proceedings.htm';
  if (name.includes('eurosteel')) return 'https://eurosteel2023.org/';
  if (name.includes('stessa')) return 'https://www.stessa2024.com/';
  if (name.includes('wcee')) return 'https://www.worldconferenceonearthquakeengineering.com/';
  if (name.includes('apvc')) return 'https://ksme.or.kr/sub/sub7_3.asp?sub_param=3&top_param=7';
  if (name.includes('non-structural elements')) return 'https://www.eucentre.it/';
  if (name.includes('chi-chi earthquake')) return 'https://www.ncree.org/';
  if (name.includes('ieer international conference')) return 'https://theiier.org/';
  if (name.includes('world academy') || name.includes('wsce')) return 'https://publications.waset.org/';
  if (name.includes('coseik') || name.includes('computational design') || name.includes('전산구조') || name.includes('전산역학')) return 'https://www.coseik.or.kr/';
  if (name.includes('구조물진단유지관리')) return 'https://conf.ksmi.or.kr/';
  if (name.includes('지진공학')) return 'https://www.eesk.or.kr/';
  if (name.includes('강구조')) return 'https://www.kssc.or.kr/';
  if (name.includes('대한건축')) return 'https://conf.aik.or.kr/';
  if (name.includes('방재')) return 'https://www.kosham.or.kr/html/?pmode=event';
  if (name.includes('콘크리트')) return 'https://www.kci.or.kr/pages_event/events01.vm';
  if (name.includes('icmemsce')) return 'https://www.scientific.net/AMM.470';
  return 'https://pure.uos.ac.kr/en/persons/hyung-joon-kim/';
}

const inferredYears: Record<number, number> = {
  1: 2015, 2: 2015, 3: 2015, 4: 2015,
  7: 2015, 8: 2015, 9: 2015, 10: 2015, 11: 2015, 12: 2015, 13: 2015,
  15: 2015, 16: 2015, 45: 2015, 50: 2017,
  64: 2019, 65: 2019, 76: 2021,
  83: 2024, 84: 2024, 85: 2024,
};

function conferenceYear(record: (typeof data.conferences)[number]) {
  const text = [record.date, record.conference, record.venue].filter(Boolean).join(' ');
  const match = text.match(/(?:19|20)\d{2}/);
  return match ? Number(match[0]) : inferredYears[record.number] || 0;
}

export default function Page() {
  const publicationLinks = new Map(data.publications.filter(item => item.link).map(item => [item.title.toLowerCase(), item.link]));
  const records = [
    ...data.conferences.map((c, i) => {
      const paperLink = directPaperLinks[c.number] || publicationLinks.get(c.title.toLowerCase());
      return ({
      id: `c-${i}`,
      year: conferenceYear(c),
      sortDate: c.date || '',
      number: c.number,
      title: c.title || c.conference,
      meta: [c.conference, c.host, c.venue].filter(Boolean).join(' · '),
      group: (c.scope === 'international' ? 'International' : 'Domestic') as 'International' | 'Domestic',
      link: paperLink || conferenceHomepage(c),
      linkLabel: paperLink ? 'Paper' as const : 'Conference' as const,
    })}),
    ...supplementalRecords.map(record => ({ ...record, number: 0 })),
  ].sort((a, b) => b.year - a.year || b.sortDate.localeCompare(a.sortDate) || b.number - a.number);

  return <>
    <PageHero eyebrow="Conferences" title="Conference Activities" description={`${data.counts.internationalConferences} international and ${data.counts.domesticConferences} domestic conference records.`} />
    <section className="content-section page-width">
      <div className="section-title"><h2>Conference records</h2></div>
      <ConferenceExplorer records={records} />
    </section>
  </>;
}

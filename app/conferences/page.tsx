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
  },
  {
    id: 'c-icbmc-2018',
    year: 2018,
    sortDate: '2018-02-23',
    title: 'Experimental Investigation on Inelastic Cyclic Behaviour of Bracing Member with Wide-flange Section',
    meta: '3rd International Conference on Building Materials and Construction (ICBMC 2018) · Nha Trang, Vietnam',
    group: 'International' as const,
  },
];

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
  const records = [
    ...data.conferences.map((c, i) => ({
      id: `c-${i}`,
      year: conferenceYear(c),
      sortDate: c.date || '',
      number: c.number,
      title: c.title || c.conference,
      meta: [c.conference, c.host, c.venue].filter(Boolean).join(' · '),
      group: (c.scope === 'international' ? 'International' : 'Domestic') as 'International' | 'Domestic',
    })),
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

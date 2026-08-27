import type { Metadata } from 'next';
import data from '../../data/achievements.json';
import PageHero from '../components/PageHero';
import RecordExplorer from '../components/RecordExplorer';

export const metadata: Metadata = { title: 'Conferences | SViC Lab' };

const supplementalRecords = [
  {
    id: 'c-eurodyn-2020',
    side: '2020',
    sortDate: '2020-11-23',
    title: 'Structural Properties of Unreinforced Masonry Walls Considering Construction Qualities',
    meta: '11th International Conference on Structural Dynamics (EURODYN 2020) · Virtual, Athens, Greece',
    detail: '',
    group: 'International',
  },
  {
    id: 'c-icbmc-2018',
    side: '2018',
    sortDate: '2018-02-23',
    title: 'Experimental Investigation on Inelastic Cyclic Behaviour of Bracing Member with Wide-flange Section',
    meta: '3rd International Conference on Building Materials and Construction (ICBMC 2018) · Nha Trang, Vietnam',
    detail: '',
    group: 'International',
  },
];

export default function Page() {
  const records = [
    ...data.conferences.map((c, i) => ({
      id: `c-${i}`,
      side: c.date || `No. ${c.number}`,
      sortDate: c.date || '',
      title: c.title || c.conference,
      meta: [c.conference, c.host, c.venue].filter(Boolean).join(' · '),
      detail: c.projectNumber ? `Project ${c.projectNumber}` : '',
      group: c.scope === 'international' ? 'International' : 'Domestic',
    })),
    ...supplementalRecords,
  ].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

  return <>
    <PageHero eyebrow="Conferences" title="Conference Activities" description={`${data.counts.internationalConferences} international and ${data.counts.domesticConferences} domestic conference records.`} />
    <section className="content-section page-width">
      <div className="section-title"><h2>All records</h2><p>{records.length} records · Newest first</p></div>
      <RecordExplorer records={records} groups={['International', 'Domestic']} placeholder="Search title or conference" />
    </section>
  </>;
}

import type { Metadata } from 'next';
import data from '../../data/achievements.json';
import { domesticJournals } from '../../data/domesticJournals';
import { domesticTitles } from '../../data/domesticTitles';
import { internationalJournals } from '../../data/internationalJournals';
import { publicationAuthors } from '../../data/publicationAuthors';
import { getConferenceRecords } from '../../data/conferenceRecords';
import ConferenceExplorer from '../components/ConferenceExplorer';
import PageHero from '../components/PageHero';
import PublicationExplorer from '../components/PublicationExplorer';

export const metadata: Metadata = { title: 'Publications | SViC Lab', description: 'International and domestic journal articles from SViC Lab.' };

const conferencePaperIds = new Set([
  'international-9',
  'international-10',
  'international-11',
  'international-12',
  'international-19',
  'international-26',
]);

export default function Page() {
  const conferences = getConferenceRecords();
  const publications = data.publications.filter(publication => !conferencePaperIds.has(publication.id)).map(publication => ({
    ...publication,
    title: publication.section === 'domestic' ? domesticTitles[publication.number] || publication.title : publication.title,
    journal: publication.section === 'domestic' ? domesticJournals[publication.journal] || publication.journal : internationalJournals[publication.journal] || publication.journal,
    authors: publicationAuthors[publication.id],
  })).sort((a, b) => (b.year || 0) - (a.year || 0) || b.id.localeCompare(a.id));

  return <>
    <PageHero title="Publications" description="Journal articles and conference contributions." />
    <section className="content-section page-width publication-groups">
      <details className="publication-group">
        <summary><span>Journal Articles</span><small>{publications.length} records</small></summary>
        <div className="publication-group-content"><PublicationExplorer publications={publications} /></div>
      </details>
      <details className="publication-group" id="conferences">
        <summary><span>Conferences</span><small>{conferences.length} records</small></summary>
        <div className="publication-group-content"><ConferenceExplorer records={conferences} /></div>
      </details>
    </section>
  </>;
}

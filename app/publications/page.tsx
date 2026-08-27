import type { Metadata } from 'next';
import data from '../../data/achievements.json';
import { domesticJournals } from '../../data/domesticJournals';
import { domesticTitles } from '../../data/domesticTitles';
import { internationalJournals } from '../../data/internationalJournals';
import { publicationAuthors } from '../../data/publicationAuthors';
import PageHero from '../components/PageHero';
import PublicationExplorer from '../components/PublicationExplorer';

export const metadata: Metadata = { title: 'Publications | SViC Lab', description: 'International and domestic journal articles from SViC Lab.' };

export default function Page() {
  const publications = data.publications.map(publication => ({
    ...publication,
    title: publication.section === 'domestic' ? domesticTitles[publication.number] || publication.title : publication.title,
    journal: publication.section === 'domestic' ? domesticJournals[publication.journal] || publication.journal : internationalJournals[publication.journal] || publication.journal,
    authors: publicationAuthors[publication.id],
  })).sort((a, b) => (b.year || 0) - (a.year || 0) || b.id.localeCompare(a.id));

  return <>
    <PageHero eyebrow="Publications" title="Journal Articles" description="International and domestic journal articles, with indexing status and links to the article record." />
    <section className="content-section page-width">
      <div className="section-title"><h2>Journal articles</h2></div>
      <PublicationExplorer publications={publications} />
    </section>
  </>;
}

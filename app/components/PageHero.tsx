export default function PageHero({ title, description }: { eyebrow?: string; title: string; description: string }) {
  return <header className="page-hero page-width"><h1>{title}</h1><p>{description}</p></header>;
}

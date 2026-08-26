export default function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <header className="page-hero page-width"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></header>;
}

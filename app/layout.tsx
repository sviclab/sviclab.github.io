import type { Metadata } from 'next';
import Link from 'next/link';
import ThemeToggle from './components/ThemeToggle';
import './globals.css';
import './theme.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sviclab.github.io'),
  title: 'SViC Lab — Structural Vibration Control Laboratory',
  description: 'Structural Vibration Control Laboratory at the University of Seoul.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SViC Lab — Structural Vibration Control Laboratory',
    description: 'Engineering structures for a resilient future.',
    url: '/',
    siteName: 'SViC Lab',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><header className="site-header"><div className="header-inner"><Link className="brand" href="/">SViC Lab</Link><nav aria-label="Primary navigation"><Link href="/research">Research</Link><Link href="/people">People</Link><Link href="/publications">Publications</Link><Link href="/conferences">Conferences</Link><Link href="/projects">Projects</Link><Link href="/patents">Patents</Link><Link href="/contact">Contact</Link><ThemeToggle /></nav></div></header><main>{children}</main><footer><div className="page-width footer-inner"><p>© 2026 SViC Lab · University of Seoul</p><p>Records updated 2025.12.31</p></div></footer></body>
    </html>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sviclab.github.io'),
  title: 'SViC Lab — Structural Vibration Control Laboratory',
  description: '서울시립대학교 구조물 진동제어 연구실. 내진성능, 진동제어, 강구조 내진설계를 연구합니다.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SViC Lab — Structural Vibration Control Laboratory',
    description: 'Engineering structures for a resilient future.',
    url: '/',
    siteName: 'SViC Lab',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body><header className="site-header"><div className="header-inner"><Link className="brand" href="/">SViC Lab</Link><nav aria-label="Primary navigation"><Link href="/research">Research</Link><Link href="/people">People</Link><Link href="/publications">Publications</Link><Link href="/conferences">Conferences</Link><Link href="/projects">Projects</Link><Link href="/patents">Patents</Link><Link href="/contact">Contact</Link></nav></div></header><main>{children}</main><footer><div className="page-width footer-inner"><p>© 2026 SViC Lab · University of Seoul</p><p>Records updated 2025.12.31</p></div></footer></body>
    </html>
  );
}

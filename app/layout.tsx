import type { Metadata } from 'next';
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
      <body>{children}</body>
    </html>
  );
}

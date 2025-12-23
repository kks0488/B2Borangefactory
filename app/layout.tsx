import SupabaseProvider from './supabase-provider';
import { PropsWithChildren } from 'react';
import '@/styles/globals.css';
import { ThemeProvider } from './theme-provider';
import { Noto_Sans_KR } from 'next/font/google';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

// Inter: 텍스트 가독성을 위한 메인 폰트
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Plus Jakarta Sans: 세련된 디스플레이(헤딩) 폰트
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

// Next.js Metadata API - SEO 최적화
export const metadata: Metadata = {
  metadataBase: new URL('https://orangefactory.kr'),
  title: {
    template: '%s | 오렌지팩토리',
    default: '오렌지팩토리 | 대한민국 NO.1 패션 재고 솔루션',
  },
  description:
    '1985년 설립된 오렌지팩토리는 패션 브랜드의 과잉 재고 처리, 브랜드 양도양수, 동산 담보자금, 위탁판매 등 다양한 솔루션을 제공합니다.',
  keywords: [
    '오렌지팩토리',
    '땡처리',
    '재고처리',
    '패션 재고',
    '브랜드 양도양수',
    '동산 담보',
    '위탁판매',
    '의류 생산',
  ],
  authors: [{ name: '오렌지팩토리' }],
  creator: '오렌지팩토리',
  publisher: '오렌지팩토리',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://orangefactory.kr',
    siteName: '오렌지팩토리',
    title: '오렌지팩토리 | 대한민국 NO.1 패션 재고 솔루션',
    description:
      '1985년 설립된 오렌지팩토리는 패션 브랜드의 과잉 재고 처리, 브랜드 양도양수, 동산 담보자금, 위탁판매 등 다양한 솔루션을 제공합니다.',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '오렌지팩토리 - 대한민국 NO.1 패션 재고 솔루션',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '오렌지팩토리 | 대한민국 NO.1 패션 재고 솔루션',
    description:
      '1985년 설립된 오렌지팩토리는 패션 브랜드의 과잉 재고 처리, 브랜드 양도양수, 동산 담보자금, 위탁판매 등 다양한 솔루션을 제공합니다.',
    images: ['/img/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://orangefactory.kr',
  },
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="ko" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <body
        id="root"
        className="min-h-screen bg-background text-foreground antialiased selection:bg-[#FF8C00]/30 selection:text-[#FF8C00]"
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SupabaseProvider>
            {children}
          </SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

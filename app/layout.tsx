import { PropsWithChildren } from 'react';
import '@/styles/globals.css';
import { ThemeProvider } from './theme-provider';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://orangefactory.biz'),
  title: {
    template: '%s | Orange Factory',
    default: 'Orange Factory | Korean Fashion Wholesale & Export',
  },
  description: 'Since 1985, Orange Factory is Korea\'s leading fashion inventory solution provider. Wholesale sourcing, brand inventory, and export services for global buyers.',
  keywords: [
    'Korean fashion wholesale',
    'K-fashion export',
    'Korean clothing wholesale',
    'fashion inventory',
    'Korea wholesale supplier',
    'Korean brand clothes',
    'wholesale fashion Korea',
    'Orange Factory',
  ],
  authors: [{ name: 'Orange Factory' }],
  creator: 'Orange Factory',
  publisher: 'Orange Factory',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://orangefactory.biz',
    siteName: 'Orange Factory',
    title: 'Orange Factory | Korean Fashion Wholesale & Export',
    description: 'Since 1985, Korea\'s leading fashion inventory solution. Wholesale sourcing, brand inventory, and export services for global buyers.',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Orange Factory - Korean Fashion Wholesale & Export',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orange Factory | Korean Fashion Wholesale & Export',
    description: 'Since 1985, Korea\'s leading fashion inventory solution. Wholesale sourcing, brand inventory, and export services.',
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
    canonical: 'https://orangefactory.biz',
    languages: {
      'en': 'https://orangefactory.biz',
      'ko': 'https://orangefactory.biz/ko',
      'ja': 'https://orangefactory.biz/ja',
      'zh': 'https://orangefactory.biz/zh',
    },
  },
};

// JSON-LD Structured Data for Organization
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Orange Factory',
  alternateName: '오렌지팩토리',
  url: 'https://orangefactory.biz',
  logo: 'https://orangefactory.biz/img/logo.png',
  foundingDate: '1985',
  description: 'Korea\'s leading fashion inventory solution provider since 1985. Wholesale, export, and B2B fashion services.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+82-10-4464-0345',
    contactType: 'sales',
    email: 'orangefactory@kakao.com',
    availableLanguage: ['English', 'Korean', 'Japanese', 'Chinese'],
  },
  sameAs: [],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        id="root"
        className="min-h-screen bg-white text-slate-800 antialiased selection:bg-[#FF8C00]/30 selection:text-[#FF8C00] font-sans text-[17px] leading-relaxed"
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

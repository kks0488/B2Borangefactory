import { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { HeaderJa } from '@/components/ui/header-ja';
import { FooterJa } from '@/components/ui/footer-ja';

export const metadata: Metadata = {
  title: {
    template: '%s | Orange Factory',
    default: 'Orange Factory | 韓国ファッション卸売り・輸出',
  },
  description: '1985年創業、韓国ファッション在庫ソリューションのリーダー。卸売り仕入れ、ブランド在庫、輸出サービスを提供。',
  keywords: ['韓国ファッション', '卸売り', 'K-fashion', '韓国服', '輸出', 'アパレル卸'],
  alternates: {
    canonical: 'https://orangefactory.biz/ja',
    languages: {
      'en': 'https://orangefactory.biz',
      'ko': 'https://orangefactory.biz/ko',
      'ja': 'https://orangefactory.biz/ja',
      'zh': 'https://orangefactory.biz/zh',
    },
  },
  openGraph: {
    locale: 'ja_JP',
    title: 'Orange Factory | 韓国ファッション卸売り・輸出',
    description: '1985年創業、韓国ファッション在庫ソリューションのリーダー。',
  },
};

export default function JapaneseLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderJa />
      <main id="skip" className="flex-1">
        {children}
      </main>
      <FooterJa />
    </div>
  );
}

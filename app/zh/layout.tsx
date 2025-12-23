import { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { HeaderZh } from '@/components/ui/header-zh';
import { FooterZh } from '@/components/ui/footer-zh';

export const metadata: Metadata = {
  title: {
    template: '%s | Orange Factory',
    default: 'Orange Factory | 韩国时尚批发与出口',
  },
  description: '始于1985年，韩国时尚库存解决方案的领导者。提供批发采购、品牌库存、出口服务。',
  keywords: ['韩国时尚', '批发', 'K-fashion', '韩国服装', '出口', '服装批发'],
  alternates: {
    canonical: 'https://orangefactory.biz/zh',
    languages: {
      'en': 'https://orangefactory.biz',
      'ko': 'https://orangefactory.biz/ko',
      'ja': 'https://orangefactory.biz/ja',
      'zh': 'https://orangefactory.biz/zh',
    },
  },
  openGraph: {
    locale: 'zh_CN',
    title: 'Orange Factory | 韩国时尚批发与出口',
    description: '始于1985年，韩国时尚库存解决方案的领导者。',
  },
};

export default function ChineseLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderZh />
      <main id="skip" className="flex-1">
        {children}
      </main>
      <FooterZh />
    </div>
  );
}

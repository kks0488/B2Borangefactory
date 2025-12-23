import { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';

export const metadata: Metadata = {
  title: {
    template: '%s | 오렌지팩토리',
    default: '오렌지팩토리 | 대한민국 NO.1 패션 재고 솔루션',
  },
  description: '1985년 설립된 오렌지팩토리는 패션 브랜드의 과잉 재고 처리, 브랜드 양도양수, 동산 담보자금, 위탁판매 등 다양한 솔루션을 제공합니다.',
  keywords: ['오렌지팩토리', '재고처리', '땡처리', '패션재고', '브랜드양도', '동산담보', '위탁판매', '의류도매'],
  alternates: {
    canonical: 'https://orangefactory.biz/ko',
    languages: {
      'en': 'https://orangefactory.biz',
      'ko': 'https://orangefactory.biz/ko',
      'ja': 'https://orangefactory.biz/ja',
      'zh': 'https://orangefactory.biz/zh',
    },
  },
  openGraph: {
    locale: 'ko_KR',
    title: '오렌지팩토리 | 대한민국 NO.1 패션 재고 솔루션',
    description: '1985년 설립, 40년 전통의 패션 재고 솔루션 전문 기업입니다.',
  },
};

export default function KoreanLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="skip" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

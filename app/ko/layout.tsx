import { PropsWithChildren } from 'react';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';

/**
 * (marketing) Route Group Layout
 * 마케팅 페이지 전용 레이아웃 - Header와 Footer 포함
 * URL에는 (marketing)이 포함되지 않음
 */
export default function MarketingLayout({ children }: PropsWithChildren) {
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

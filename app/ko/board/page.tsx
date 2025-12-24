import { Metadata } from 'next';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { BoardList } from '@/components/board/BoardList';
import listings from '@/data/listings.json';
import { Listing } from '@/lib/types/listing';

export const metadata: Metadata = {
  title: '재고 매물 게시판',
  description: '패션 브랜드 재고 매각, 쇼핑몰 양도, 브랜드 양도 매물 정보를 확인하세요.',
};

export default function BoardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-12 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
              재고 매물 게시판
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              패션 브랜드 재고 매각, 쇼핑몰 양도, 브랜드 양도 등 다양한 거래 정보를 확인하세요.
              <br />
              비밀글은 상담 신청 후 상세 내용을 확인하실 수 있습니다.
            </p>
          </div>
        </section>
        
        {/* Stats */}
        <section className="py-8 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="text-2xl font-bold text-[#FF8C00]">
                  {(listings as Listing[]).filter(l => l.status === '완료').length.toLocaleString()}
                </p>
                <p className="text-sm text-slate-500">거래 완료</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-green-600">
                  {(listings as Listing[]).filter(l => l.status === '진행중').length}
                </p>
                <p className="text-sm text-slate-500">진행중</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-blue-600">
                  {(listings as Listing[]).filter(l => l.status === '계약중' || l.status === '예약중').length}
                </p>
                <p className="text-sm text-slate-500">예약/계약중</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-slate-700">4년+</p>
                <p className="text-sm text-slate-500">운영 기간</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Board */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4">
            <BoardList listings={listings as Listing[]} lang="ko" />
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-12 bg-slate-50 border-t border-slate-100">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              재고 매각을 원하시나요?
            </h2>
            <p className="text-slate-600 mb-6">
              패션 브랜드 재고, 쇼핑몰, 브랜드 양도 등 무엇이든 등록해 주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/ko/board/post"
                className="inline-block bg-[#FF8C00] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#E67E00] transition-colors"
              >
                매물 등록하기
              </a>
              <a
                href="/ko/contact"
                className="inline-block bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                1:1 상담 신청
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

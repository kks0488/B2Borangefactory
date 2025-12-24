import { Metadata } from 'next';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { PostForm } from '@/components/board/PostForm';

export const metadata: Metadata = {
  title: '매물 등록',
  description: '패션 브랜드 재고 매각, 쇼핑몰 양도, 브랜드 양도 매물을 등록하세요.',
};

export default function PostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-12 border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
              매물 등록
            </h1>
            <p className="text-slate-600">
              패션 브랜드 재고 매각, 쇼핑몰 양도, 브랜드 양도 등<br />
              다양한 매물을 등록하세요.
            </p>
          </div>
        </section>
        
        {/* Form */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <PostForm lang="ko" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

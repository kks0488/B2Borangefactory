import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: '회사소개 | 오렌지팩토리',
  description: '1985년부터 대한민국 패션 재고 솔루션의 표준을 만들어온 오렌지팩토리입니다.',
};

export default function AboutPage() {
  const timeline = [
    {
      num: '1',
      title: '시작',
      content: [
        '1985년, 경기도의 작은 행사장에서 재고처리 도매업으로 시작했습니다.',
        '고객 경험 중심의 유통 모델로 품질과 규모의 힘을 믿고 성장했습니다.',
      ]
    },
    {
      num: '2',
      title: '발전',
      content: [
        '미국 타이거 팩토리 아울렛에서 영감을 받아 한국 최대 창고형 아울렛을 목표로 삼았습니다.',
        "'완전 현금 구매 방식'으로 40개 유명 브랜드와 거래하며 경쟁사보다 빠르게 이월제품을 확보했습니다.",
        '전국 70개 직영점으로 확장하며 품질과 가격으로 고객의 신뢰를 얻었습니다.',
      ]
    },
    {
      num: '3',
      title: '위기와 변화',
      content: [
        '과거 방만한 경영으로 어려움을 겪었지만, 새로운 인수 과정과 젊은 인재 영입으로 위기를 극복했습니다.',
        '온라인과 B2B 서비스에 집중하며 급변하는 환경에 적응했습니다.',
      ]
    },
    {
      num: '4',
      title: '현재',
      content: [
        '무리한 확장을 축소하고 짜임새 있는 서비스와 고품질 제품에 집중하고 있습니다.',
        '극복, 혁신, 품질 추구의 정신으로 대한민국 패션업계의 변화를 함께합니다.',
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">회사소개</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            우리의 이야기
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            1985년부터 대한민국 패션 재고 솔루션의 표준을 만들어온 오렌지팩토리입니다.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                    <span className="text-5xl font-black text-[#FF8C00]">{item.num}</span>
                    <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
                  </div>
                </div>
                <div className="lg:col-span-10 space-y-3">
                  {item.content.map((paragraph, j) => (
                    <p key={j} className="text-slate-600 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-slate-900">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            오렌지팩토리와 함께하세요
          </h2>
          <p className="text-slate-400 mb-8">
            40년의 경험과 네트워크로 고객사의 성장을 지원합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:010-4464-0345" className="flex items-center gap-2 text-white">
              <Phone className="w-4 h-4 text-[#FF8C00]" />
              <span className="font-semibold">010-4464-0345</span>
            </a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-white">
              <Mail className="w-4 h-4 text-[#FF8C00]" />
              <span className="font-semibold">orangefactory@kakao.com</span>
            </a>
          </div>

          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-8 rounded-lg font-semibold" asChild>
            <Link href="/contact" className="flex items-center gap-2">
              상담 신청하기 <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

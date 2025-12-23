import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Store, ShieldCheck, TrendingUp, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: '오프라인 위탁판매 | 오렌지팩토리',
  description: '온라인 가격 노출 없이 브랜드 가치를 보호하면서 재고를 처리합니다.',
};

export default function ConsignmentPage() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "브랜드 가치 보호",
      desc: "온라인에 할인 가격이 노출되지 않아 기존 고객과의 신뢰를 유지하면서 재고를 처리합니다."
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: "전용 오프라인 네트워크",
      desc: "오렌지팩토리만의 오프라인 유통 채널을 통해 효과적으로 재고를 소진합니다."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "수익 극대화",
      desc: "덤핑이 아닌 적정 가격 판매로 브랜드 이미지와 수익을 동시에 확보합니다."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="pt-20 pb-10 md:pt-28 md:pb-16 bg-slate-50">
        <div className="section-container">
          <p className="text-sm font-semibold text-[#FF8C00] mb-2">오프라인 위탁판매</p>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            브랜드 가치를 지키면서<br />재고를 정리하고 싶다면?
          </h1>
          <p className="text-base text-slate-600 max-w-xl leading-relaxed">
            온라인 할인 판매로 브랜드 이미지가 훼손되는 것이 걱정되시나요? 
            오프라인 전용 채널로 가격 노출 없이 재고를 처리하세요.
          </p>
        </div>
      </section>

      {/* 핵심 3개 */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((item, i) => (
              <div key={i} className="p-5 border border-slate-200 rounded-xl">
                <div className="text-[#FF8C00] mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-slate-900">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">위탁판매 상담</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <a href="tel:010-4464-0345" className="flex items-center gap-2 text-white text-sm">
              <Phone className="w-4 h-4 text-[#FF8C00]" /> 010-4464-0345
            </a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-white text-sm">
              <Mail className="w-4 h-4 text-[#FF8C00]" /> orangefactory@kakao.com
            </a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-11 px-6 rounded-lg font-semibold" asChild>
            <Link href="/contact" className="flex items-center gap-2">
              상담 신청 <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

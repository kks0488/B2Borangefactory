import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, TrendingUp, Shield, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: '동산 담보자금 | 오렌지팩토리',
  description: '재고를 담보로 긴급 자금을 확보하세요. 홈쇼핑 스케줄 변동 등 급한 상황에 대응합니다.',
};

export default function FinancePage() {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "신속한 유동성 확보",
      desc: "복잡한 절차 없이 빠르게 자금을 확보할 수 있습니다. 홈쇼핑 스케줄 변동이나 긴급 발주 상황에 즉각 대응."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "재고 활용 극대화",
      desc: "판매 시기를 놓친 재고도 담보 자산으로 활용하여 금융 자산으로 전환합니다."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "맞춤형 상환 계획",
      desc: "기업의 재무 상황과 재고 회전율을 고려한 맞춤형 상환 구조로 부담을 최소화합니다."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="pt-20 pb-10 md:pt-28 md:pb-16 bg-slate-50">
        <div className="section-container">
          <p className="text-sm font-semibold text-[#FF8C00] mb-2">동산 담보자금</p>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            재고를 담보로<br />자금이 필요하신가요?
          </h1>
          <p className="text-base text-slate-600 max-w-xl leading-relaxed">
            홈쇼핑 스케줄 차질, 긴급 생산비용 확보 등 예상치 못한 자금 수요에 대응하세요. 
            재고자산을 기반으로 신속한 현금 확보가 가능합니다.
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
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">담보자금 상담</h2>
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

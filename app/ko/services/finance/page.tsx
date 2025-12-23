import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, TrendingUp, Shield, Phone, Mail, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: '동산 담보자금 | 오렌지팩토리',
  description: '재고를 담보로 긴급 자금을 확보하세요. 홈쇼핑 스케줄 변동 등 급한 상황에 대응합니다.',
};

export default function FinancePage() {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "신속한 유동성 확보",
      desc: "복잡한 절차 없이 빠르게 자금을 확보할 수 있습니다. 홈쇼핑 스케줄 변동이나 긴급 발주 상황에 즉각 대응합니다."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "재고 활용 극대화",
      desc: "판매 시기를 놓친 재고도 담보 자산으로 활용하여 금융 자산으로 전환합니다. 재고를 보관만 하지 마세요."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "맞춤형 상환 계획",
      desc: "기업의 재무 상황과 재고 회전율을 고려한 맞춤형 상환 구조로 부담을 최소화합니다."
    }
  ];

  const steps = [
    { num: "1", title: "재고 가치 평가", desc: "브랜드, 시장 수요, 유통 가능성 종합 검토" },
    { num: "2", title: "한도 및 조건 확정", desc: "맞춤형 자금 한도와 상환 조건 제안" },
    { num: "3", title: "자금 집행", desc: "신속한 심사 후 자금 집행" },
  ];

  const faqs = [
    { q: "어떤 재고가 담보로 가능한가요?", a: "브랜드 가치가 있는 패션 상품, 시장 수요가 있는 의류 재고 등이 가능합니다. 구체적인 조건은 상담을 통해 확정됩니다." },
    { q: "심사 기간은 얼마나 걸리나요?", a: "최대한 빠른 심사를 진행합니다. 재고 규모와 기업 상황에 따라 다르지만, 단기간 내 자금 확보가 가능합니다." },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">동산 담보자금</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            재고가 곧 현금입니다
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            홈쇼핑 스케줄 차질, 긴급 생산비용 확보 등 예상치 못한 상황에 대응하세요. 
            재고자산을 기반으로 신속하게 자금을 확보할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 핵심 3개 */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">서비스 특징</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((item, i) => (
              <div key={i} className="p-5 bg-white border border-slate-200 rounded-xl hover:border-[#FF8C00] transition-colors">
                <div className="text-[#FF8C00] mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 절차 3단계 */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">진행 절차</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="p-5 border border-slate-200 rounded-xl text-center">
                <div className="w-10 h-10 rounded-full bg-[#FF8C00] text-white flex items-center justify-center mx-auto mb-3 font-bold">
                  {step.num}
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">자주 묻는 질문</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group p-4 bg-white border border-slate-200 rounded-xl">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-slate-900">
                  {faq.q}
                  <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 라이트 스타일 */}
      <section className="py-12 md:py-16 border-t border-slate-200">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">담보자금 상담</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="tel:010-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold">
              <Phone className="w-4 h-4 text-[#FF8C00]" /> 010-4464-0345
            </a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold">
              <Mail className="w-4 h-4 text-[#FF8C00]" /> orangefactory@kakao.com
            </a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-8 rounded-lg font-semibold" asChild>
            <Link href="/contact" className="flex items-center gap-2">
              상담 신청 <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

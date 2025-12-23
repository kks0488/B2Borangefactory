import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Store, ShieldCheck, TrendingUp, Phone, Mail, ChevronDown } from 'lucide-react';

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
      desc: "오렌지팩토리만의 오프라인 유통 채널을 통해 효과적으로 재고를 소진합니다. 검증된 채널만 활용합니다."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "수익 극대화",
      desc: "덤핑이 아닌 적정 가격 판매로 브랜드 이미지와 수익을 동시에 확보합니다."
    }
  ];

  const steps = [
    { num: "1", title: "상품 검토", desc: "위탁 가능 상품 확인 및 판매 전략 수립" },
    { num: "2", title: "채널 매칭", desc: "브랜드 이미지에 맞는 오프라인 채널 선정" },
    { num: "3", title: "판매 및 정산", desc: "판매 진행 후 정산, 진행 상황 리포트" },
  ];

  const faqs = [
    { q: "어떤 오프라인 채널에서 판매되나요?", a: "기존 온라인 고객과 겹치지 않는 오프라인 매장, 아울렛, 해외 수출 채널 등을 활용합니다. 브랜드 이미지에 맞게 선별합니다." },
    { q: "위탁 수수료는 어떻게 되나요?", a: "상품 종류, 수량, 판매 조건에 따라 달라집니다. 상담을 통해 구체적인 조건을 안내드립니다." },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="pt-20 pb-10 md:pt-28 md:pb-14 bg-slate-50">
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
      <section className="py-10 md:py-14">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">서비스 특징</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((item, i) => (
              <div key={i} className="p-5 border border-slate-200 rounded-xl hover:border-[#FF8C00] transition-colors">
                <div className="text-[#FF8C00] mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 절차 3단계 */}
      <section className="py-10 md:py-14 bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">진행 절차</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="p-5 bg-white border border-slate-200 rounded-xl text-center">
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

      {/* FAQ 2개 */}
      <section className="py-10 md:py-14">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">자주 묻는 질문</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group p-4 border border-slate-200 rounded-xl">
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

      {/* CTA */}
      <section className="py-10 md:py-14 bg-slate-900">
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

import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, ShieldCheck, Banknote, Phone, Mail, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: '재고매매 및 브랜드 양도양수 | 오렌지팩토리',
  description: '과잉 재고를 신속하게 현금화하고, 쇼핑몰과 브랜드까지 한번에 정리하세요.',
};

export default function InventoryPage() {
  const features = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "과잉 재고 전문 매입",
      desc: "브랜드별 특성, 시즌성, 시장 수요를 분석하여 공정한 가격으로 신속하게 매입합니다. 소량부터 대량까지 모두 가능합니다."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "브랜드 이미지 보호",
      desc: "기존 고객과 겹치지 않는 오프라인 매장 또는 해외수출로 가격 노출 없이 브랜드 가치를 보호합니다."
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "쇼핑몰·브랜드 양도",
      desc: "재고뿐 아니라 쇼핑몰과 상표, 브랜드까지 한번에 양도양수가 가능합니다. 사업 전체를 정리하실 수 있습니다."
    }
  ];

  const steps = [
    { num: "1", title: "상담 미팅", desc: "24시간 연락 가능, 전화 또는 메신저로 편하게 상담" },
    { num: "2", title: "재고 확인", desc: "고객사 일정에 맞춰 방문하여 상품 및 재고 확인" },
    { num: "3", title: "계약 및 입금", desc: "당일 현금 입금, 물류창고로 즉시 이전" },
  ];

  const faqs = [
    { q: "소량 재고도 매입하시나요?", a: "네, 1인 기업부터 대기업까지 소량 및 대량 모두 대응 가능합니다. 규모에 상관없이 상담해주세요." },
    { q: "브랜드 노출 없이 처리 가능한가요?", a: "네, 오프라인 전용 채널이나 해외 수출로 진행하여 온라인 가격 노출 없이 브랜드 가치를 보호합니다." },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">재고 정리 서비스</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            재고 정리, 당일 현금화
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            과잉 재고로 인한 이익 손실과 보관비용 부담을 해결하세요. 
            브랜드와 쇼핑몰까지 한번에 정리할 수 있습니다.
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
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">재고 정리 상담</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="tel:010-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold">
              <Phone className="w-4 h-4 text-[#FF8C00]" /> 010-4464-0345
            </a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold">
              <Mail className="w-4 h-4 text-[#FF8C00]" /> orangefactory@kakao.com
            </a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-8 rounded-lg font-semibold" asChild>
            <Link href="/ko/contact" className="flex items-center gap-2">
              상담 신청 <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

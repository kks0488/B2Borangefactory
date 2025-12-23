import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag, Users, Tags, Phone, Mail, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: '상품 소싱 및 도매 | 오렌지팩토리',
  description: '이월상품, 브랜드 의류 상품을 찾아 고객사에 연결해드립니다.',
};

export default function SourcingPage() {
  const features = [
    {
      icon: <Tags className="w-6 h-6" />,
      title: "이월상품 연결",
      desc: "유명 브랜드의 이월상품 2~3개년치를 매입해 저렴한 가격에 공급합니다. 고품질 상품을 합리적 가격에."
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "맞춤 상품 수배",
      desc: "고객사의 이미지와 타겟에 맞는 브랜드 의류 상품을 찾아드립니다. 원하시는 스타일과 가격대에 맞춰 제안."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "네트워크 연결",
      desc: "30년간 구축한 패션 업계 네트워크를 통해 필요한 상품과 파트너를 연결합니다."
    }
  ];

  const steps = [
    { num: "1", title: "니즈 파악", desc: "원하시는 상품 종류, 가격대, 수량 협의" },
    { num: "2", title: "상품 수배", desc: "네트워크를 통해 조건에 맞는 상품 탐색" },
    { num: "3", title: "거래 연결", desc: "적합한 상품 및 공급처 매칭, 거래 진행" },
  ];

  const faqs = [
    { q: "어떤 브랜드 상품을 소싱할 수 있나요?", a: "국내외 다양한 패션 브랜드와 네트워크를 보유하고 있습니다. 원하시는 브랜드나 스타일을 말씀해주시면 가능 여부를 확인해드립니다." },
    { q: "최소 거래 규모가 있나요?", a: "소량부터 대량까지 규모에 상관없이 상담 가능합니다. 거래 조건은 상품과 수량에 따라 협의합니다." },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero - 깔끔한 라이트 스타일 */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">상품 소싱</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            원하는 상품을 찾아드립니다
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            특정 브랜드나 스타일의 상품을 찾고 계신가요? 
            30년간 구축한 네트워크로 고객사에 맞는 상품을 연결해드립니다.
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

      {/* CTA */}
      <section className="py-12 md:py-16 bg-slate-900">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">소싱 상담</h2>
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

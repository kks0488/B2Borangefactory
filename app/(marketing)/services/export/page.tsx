import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Ship, Handshake, Phone, Mail, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: '해외수출 | 오렌지팩토리',
  description: 'Korean Fashion Wholesale & Export. 한국 패션 브랜드 해외 수출 지원 및 글로벌 바이어 연결.',
};

export default function ExportPage() {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "글로벌 바이어 연결",
      desc: "한국 패션 상품을 찾는 해외 바이어와 수출 희망 한국 업체를 연결합니다. K-Fashion의 글로벌 유통을 지원합니다."
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: "수출 물류 지원",
      desc: "해외 배송, 통관, 서류 작업 등 수출에 필요한 물류 프로세스를 지원합니다. 복잡한 절차를 간소화해드립니다."
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "브랜드 가치 보호",
      desc: "해외 판매 시에도 브랜드 이미지를 보호합니다. 검증된 해외 파트너와만 거래를 진행합니다."
    }
  ];

  const steps = [
    { num: "1", title: "상품 확인", desc: "수출 가능 상품 검토 및 가격 협의" },
    { num: "2", title: "바이어 매칭", desc: "적합한 해외 바이어 또는 채널 연결" },
    { num: "3", title: "수출 진행", desc: "물류, 통관 지원 및 거래 완료" },
  ];

  const faqs = [
    { q: "어떤 국가로 수출이 가능한가요?", a: "동남아, 중동, 유럽 등 다양한 지역으로 수출 경험이 있습니다. 국가별 특성에 맞는 상품과 전략을 제안해드립니다." },
    { q: "소량으로도 수출이 가능한가요?", a: "네, 소량 수출도 가능합니다. 다만 국가별 최소 주문량과 물류 조건은 상담을 통해 확인해드립니다." },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero - 임팩트 있게 */}
      <section className="relative min-h-[60vh] md:min-h-[50vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-10"></div>
        <div className="section-container relative z-10 py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF8C00]/20 text-[#FF8C00] text-sm font-semibold mb-6">
            <Globe className="w-4 h-4" />
            Global Export
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            한국 패션을<br />
            <span className="text-[#FF8C00]">세계로</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed mb-8">
            K-Fashion의 글로벌 유통을 지원합니다. 해외 바이어와 한국 업체를 연결하고, 
            수출에 필요한 모든 과정을 함께합니다.
          </p>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-6 rounded-lg font-semibold text-base" asChild>
            <Link href="/contact" className="flex items-center gap-2">
              수출 상담하기 <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 핵심 3개 */}
      <section className="py-12 md:py-16">
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
      <section className="py-12 md:py-16 bg-slate-50">
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

      {/* FAQ */}
      <section className="py-12 md:py-16">
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
      <section className="py-12 md:py-16 bg-slate-900">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">해외수출 상담</h2>
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

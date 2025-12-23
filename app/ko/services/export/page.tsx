import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Ship, Handshake, Phone, Mail, ChevronDown, Users, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: '해외수출 | 오렌지팩토리',
  description: 'Korean Fashion Wholesale & Export. K-Fashion을 세계로, 글로벌 바이어와 한국 업체를 연결합니다.',
};

export default function ExportPage() {
  const features = [
    { icon: <Globe className="w-6 h-6" />, title: "글로벌 바이어 연결", desc: "동남아, 중동, 유럽 등 전 세계 바이어와 네트워크를 보유. K-Fashion을 찾는 해외 바이어와 한국 업체를 직접 연결합니다." },
    { icon: <Ship className="w-6 h-6" />, title: "수출 물류 원스톱", desc: "해외 배송, 통관, 서류 작업까지 모든 물류 프로세스를 지원합니다." },
    { icon: <Handshake className="w-6 h-6" />, title: "브랜드 가치 보호", desc: "검증된 해외 파트너와만 거래하며, 국내 시장과 분리하여 가격 충돌을 방지합니다." }
  ];

  const targets = [
    { icon: <Users className="w-6 h-6" />, title: "해외 바이어", desc: "한국 패션 상품을 대량 구매하려는 글로벌 도매업체, 리테일러." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "수출 희망 한국 업체", desc: "재고 처리를 해외 시장으로 확대하고 싶은 한국 패션 브랜드, 제조사." }
  ];

  const steps = [
    { num: "1", title: "상품 확인", desc: "수출 가능 상품 검토 및 가격 협의" },
    { num: "2", title: "바이어 매칭", desc: "적합한 해외 바이어 또는 채널 연결" },
    { num: "3", title: "수출 진행", desc: "물류, 통관 지원 및 거래 완료" },
  ];

  const faqs = [
    { q: "어떤 국가로 수출이 가능한가요?", a: "동남아시아, 중동, 유럽, 미주 등 다양한 지역으로 수출 경험이 있습니다." },
    { q: "소량으로도 수출이 가능한가요?", a: "네, 컨테이너 단위가 아니어도 가능합니다. 상담을 통해 확인해드립니다." },
    { q: "해외 바이어인데 연락하고 싶습니다.", a: "영어로 문의 가능합니다. 이메일로 연락 주시면 담당자가 회신드립니다." },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">해외수출</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">한국 패션을 세계로</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">K-Fashion의 글로벌 유통을 지원합니다. 해외 바이어와 한국 업체를 연결하고, 수출에 필요한 모든 과정을 함께합니다.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">이런 분들을 위한 서비스입니다</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {targets.map((item, i) => (
              <div key={i} className="p-5 bg-white border border-slate-200 rounded-xl">
                <div className="text-[#FF8C00] mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">진행 절차</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="p-5 bg-white border border-slate-200 rounded-xl text-center">
                <div className="w-10 h-10 rounded-full bg-[#FF8C00] text-white flex items-center justify-center mx-auto mb-3 font-bold">{step.num}</div>
                <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-12 md:py-16 border-t border-slate-200">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">수출 상담</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="tel:010-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold">
              <Phone className="w-4 h-4 text-[#FF8C00]" /> 010-4464-0345
            </a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold">
              <Mail className="w-4 h-4 text-[#FF8C00]" /> orangefactory@kakao.com
            </a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-8 rounded-lg font-semibold" asChild>
            <Link href="/ko/contact" className="flex items-center gap-2">상담 신청 <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

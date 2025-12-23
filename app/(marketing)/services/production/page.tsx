import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Factory, Shirt, DollarSign, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: '의류 해외 생산 | 오렌지팩토리',
  description: '유명 브랜드 잔여원단을 활용해 원가를 절감하는 해외 생산 솔루션.',
};

export default function ProductionPage() {
  const features = [
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "잔여 원단 활용",
      desc: "유명 브랜드에서 사용한 고품질 잔여원단을 활용해 수준 높은 상품을 생산합니다."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "원가 절감",
      desc: "명품 브랜드 생산 라인에 합류하여 소량으로도 저렴하게 생산이 가능합니다."
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "해외 생산 매칭",
      desc: "검증된 해외 생산 기지와 직접 매칭하여 품질 관리와 납기를 보장합니다."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="pt-20 pb-10 md:pt-28 md:pb-16 bg-slate-50">
        <div className="section-container">
          <p className="text-sm font-semibold text-[#FF8C00] mb-2">의류 해외 생산</p>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            고품질 의류를<br />저렴하게 생산하고 싶다면?
          </h1>
          <p className="text-base text-slate-600 max-w-xl leading-relaxed">
            유명 브랜드의 잔여원단을 활용하여 원가를 크게 절감하면서도 
            수준 높은 상품을 해외에서 생산할 수 있습니다.
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
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">해외 생산 상담</h2>
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

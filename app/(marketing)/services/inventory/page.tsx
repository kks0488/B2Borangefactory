import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, ShieldCheck, Banknote, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: '재고매매 및 브랜드 양도양수 | 오렌지팩토리',
  description: '과잉 재고를 신속하게 현금화하고, 쇼핑몰과 브랜드까지 한번에 정리하세요.',
};

export default function InventoryPage() {
  const features = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "과잉 재고 전문 매입",
      desc: "브랜드별 특성, 시즌성, 시장 수요를 분석하여 공정한 가격으로 신속하게 매입합니다."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "브랜드 이미지 보호",
      desc: "기존 고객과 겹치지 않는 오프라인 매장 또는 해외수출로 브랜드 가치를 보호합니다."
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "쇼핑몰·브랜드 양도",
      desc: "재고뿐 아니라 쇼핑몰과 상표, 브랜드까지 한번에 양도양수가 가능합니다."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="pt-20 pb-10 md:pt-28 md:pb-16 bg-slate-50">
        <div className="section-container">
          <p className="text-sm font-semibold text-[#FF8C00] mb-2">재고 정리 서비스</p>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            재고 및 쇼핑몰 정리를<br />원하신다면?
          </h1>
          <p className="text-base text-slate-600 max-w-xl leading-relaxed">
            과잉 재고로 인한 이익 손실, 보관비용 부담을 해결하고 현금 유동성을 확보하세요. 
            브랜드와 쇼핑몰까지 한번에 정리 가능합니다.
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
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">재고 정리 상담</h2>
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

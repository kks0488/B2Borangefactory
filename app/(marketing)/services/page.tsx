import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ArrowRight, 
  Package, 
  Landmark, 
  Store, 
  Factory, 
  ShoppingBag,
  Phone,
  Mail
} from 'lucide-react';

export const metadata: Metadata = {
  title: '서비스 | 오렌지팩토리',
  description: '재고 매입에서 담보 금융까지, 기업의 자산 가치를 극대화하는 5대 핵심 비즈니스 솔루션.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "재고매매 및 브랜드 양도양수",
      desc: "과잉 재고에 대한 즉각적인 현금 유동성을 공급합니다. 철저한 폐쇄망 유통으로 브랜드 이미지를 100% 보호합니다.",
      href: "/services/inventory"
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "동산 담보자금",
      desc: "보유 재고를 바탕으로 한 신속한 긴급 자금 조달 솔루션. 은행 대출보다 빠르고 유연한 자금 집행이 가능합니다.",
      href: "/services/finance"
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "오프라인 위탁판매",
      desc: "오렌지팩토리 전용 유통 네트워크와 연계된 프리미엄 위탁 판매 인프라. 판로 개척의 한계를 해결합니다.",
      href: "/services/consignment"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "의류 해외 생산",
      desc: "해외 생산 기지 직접 매칭 및 품질 관리. 생산 원가 절감과 공급망 안정을 위한 솔루션을 제공합니다.",
      href: "/services/production"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "상품 소싱 및 도매",
      desc: "카테고리별 전략 상품 공급. 유통 파트너사의 객단가와 회전율을 동시에 높이는 도매 솔루션.",
      href: "/services/sourcing"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[#FF8C00]"></span>
              <span className="text-sm font-bold text-[#FF8C00]">서비스 소개</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              기업 성장을 위한<br />
              <span className="text-[#FF8C00]">5대 핵심 솔루션</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              패션 기업의 동력을 멈추지 않게 하는<br className="md:hidden" />
              오렌지팩토리만의 검증된 비즈니스 포트폴리오입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 서비스 목록 */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-6">
            {services.map((service, i) => (
              <Link 
                key={i} 
                href={service.href}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-8 bg-slate-50 hover:bg-white border border-slate-100 hover:border-[#FF8C00] rounded-xl transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-4 md:w-80">
                  <div className="text-[#FF8C00] p-3 bg-white rounded-lg border border-slate-100 group-hover:bg-[#FF8C00] group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#FF8C00] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="flex-1 text-slate-600 text-sm md:text-base leading-relaxed">
                  {service.desc}
                </p>
                <ArrowRight className="hidden md:block w-5 h-5 text-slate-300 group-hover:text-[#FF8C00] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 실적 요약 */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4">검증된 신뢰</h2>
            <p className="text-slate-400">30년간의 실적과 1,200개 이상의 파트너사가 증명합니다</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: '파트너사', val: '1,200+' },
              { label: '업력', val: '30년' },
              { label: '총 거래액', val: '2조 4천억' },
              { label: '처리 속도', val: '당일 가능' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 md:p-6">
                <p className="text-2xl md:text-4xl font-black text-white mb-2">{stat.val}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4">
            어떤 서비스가 필요하신가요?
          </h2>
          <p className="text-slate-600 mb-8 md:mb-10">
            전문 상담을 통해 최적의 솔루션을 제안해 드립니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:010-4464-0345" className="flex items-center gap-2 text-slate-700">
              <Phone className="w-5 h-5 text-[#FF8C00]" />
              <span className="font-bold">010-4464-0345</span>
            </a>
          </div>
          
          <Button size="lg" className="w-full sm:w-auto bg-[#FF8C00] hover:bg-[#E67E00] text-white h-14 px-10 rounded-lg text-lg font-bold" asChild>
            <Link href="/contact">무료 상담 신청 <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
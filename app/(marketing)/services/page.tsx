import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Globe2,
  Boxes
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solution Portfolio | Orange Factory',
  description: '재고 매입에서 담보 금융까지, 기업의 자산 가치를 극대화하는 5대 핵심 비즈니스 솔루션.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-zinc-950">
      
      {/* 1. Services Hero */}
      <section className="relative pt-32 pb-24 md:pt-56 md:pb-40 border-b border-zinc-100 dark:border-zinc-900 bg-subtle-grid">
        <div className="section-container">
          <div className="max-w-4xl opacity-0 animate-reveal">
            <h1 className="text-5xl md:text-8xl font-black text-brand-navy dark:text-white mb-10 tracking-tighter leading-none italic uppercase">
              STRATEGIC <br />
              <span className="text-[#FF8C00]">SOLUTIONS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl leading-relaxed font-medium mb-0">
              패션 기업의 동력을 멈추지 않게 하는 <br />
              오렌지팩토리만의 검증된 비즈니스 포트폴리오를 제안합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Solutions Index - Detailed list */}
      <section className="py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-px bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-900 overflow-hidden rounded-lg shadow-elevated">
            {[
              {
                id: '01',
                title: "Inventory Liquidation",
                subtitle: "재고 매입 및 브랜드 가치 보호",
                desc: "잉여 자산에 대한 즉각적인 현금 유동성을 공급합니다. 철저한 폐쇄망 유통으로 브랜드 아이덴티티를 100% 보호하며 소진합니다.",
                icon: <Boxes className="w-10 h-10" />,
                href: "/services/inventory"
              },
              {
                id: '02',
                title: "Asset-Backed Financing",
                subtitle: "동산(재고) 담보 운영 자금 조달",
                desc: "보유 재고를 바탕으로 한 신속한 긴급 자금 원조 솔루션. 은행 대출보다 빠르고 유연한 자금 집행으로 골든타임을 확보합니다.",
                icon: <Zap className="w-10 h-10" />,
                href: "/services/finance"
              },
              {
                id: '03',
                title: "Premium Consignment",
                subtitle: "오프라인 위탁 매장 운영 지원",
                desc: "오렌지팩토리 전용 물류 네트워크와 연계된 프리미엄 위탁 판매 인프라. 판로 개척의 물리적 한계를 해결합니다.",
                icon: <ShieldCheck className="w-10 h-10" />,
                href: "/services/consignment"
              },
              {
                id: '04',
                title: "Production Infrastructure",
                subtitle: "글로벌 의류 생산 솔루션",
                desc: "해외 생산 기지 직접 매칭 및 퀄리티 컨트롤. 생산 원가 절감과 공급망 안정을 위한 엔드투엔드 인프라를 가동합니다.",
                icon: <Globe2 className="w-10 h-10" />,
                href: "/services/production"
              },
              {
                id: '05',
                title: "Curated Wholesaling",
                subtitle: "B2B 상품 소싱 및 도매 전략",
                desc: "빅데이터 기반의 카테고리별 전략 상품 공급. 유통 파트너사의 객단가와 회전율을 동시에 높이는 기획형 도매 솔루션.",
                icon: <TrendingUp className="w-10 h-10" />,
                href: "/services/sourcing"
              }
            ].map((s) => (
              <div key={s.id} className="group grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-zinc-950 p-12 lg:p-20 items-center hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors">
                <div className="lg:col-span-1 border-l-2 border-zinc-100 dark:border-zinc-800 group-hover:border-[#FF8C00] pl-6 transition-colors">
                  <span className="text-4xl font-black text-zinc-100 dark:text-zinc-800 group-hover:text-[#FF8C00]/20 transition-colors italic">{s.id}</span>
                </div>
                <div className="lg:col-span-7 mt-8 lg:mt-0 lg:px-12">
                  <h3 className="text-sm font-black text-zinc-300 uppercase tracking-widest mb-2 italic">{s.title}</h3>
                  <p className="text-2xl font-black tracking-tight mb-6">{s.subtitle}</p>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium line-clamp-2 italic">{s.desc}</p>
                </div>
                <div className="lg:col-span-4 mt-12 lg:mt-0 flex justify-end">
                   <Button variant="outline" className="h-14 px-8 rounded-lg border-zinc-200 hover:border-[#FF8C00] hover:text-[#FF8C00] font-black italic uppercase tracking-tight group/btn" asChild>
                     <Link href={s.href}>
                       View Solution <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                     </Link>
                   </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Performance Record - Hard data section */}
      <section className="py-40 bg-zinc-900 text-white">
        <div className="section-container">
           <div className="max-w-4xl mx-auto text-center space-y-12">
              <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">Standardized <br /> Reliability.</h2>
              <p className="text-zinc-400 text-xl font-medium italic">
                오렌지팩토리의 모든 솔루션은 39년의 실적과 1,200개 이상의 파트너사가 증명합니다. 
                우리는 실질적인 숫자와 결과로만 대화합니다.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10">
                 {[
                   { label: 'Partners', val: '1.2k+' },
                   { label: 'Value Eval', val: 'Proprietary' },
                   { label: 'Asset Liq', val: '₩2.4T' },
                   { label: 'Speed', val: 'Instant' }
                 ].map((stat, i) => (
                   <div key={i} className="space-y-2 text-center md:text-left">
                     <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{stat.label}</p>
                     <p className="text-3xl font-black italic tracking-tighter">{stat.val}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 4. Final Consultation Action */}
      <section className="py-40 bg-white dark:bg-zinc-950">
        <div className="section-container text-center max-w-4xl">
           <h2 className="text-4xl md:text-7xl font-black text-brand-navy dark:text-white tracking-tighter mb-10 leading-[1.1] italic uppercase">
             Ready to<br />
             Scale?
           </h2>
           <p className="text-xl text-zinc-500 mb-16 font-medium leading-relaxed italic">
             어떤 복잡한 재고 상황이라도 해결할 수 있는 <br />
             개별 맞춤형 인프라가 준비되어 있습니다.
           </p>
           <Button size="lg" className="h-20 px-16 rounded-lg bg-brand-navy dark:bg-white dark:text-brand-navy text-white text-2xl font-black transition-all hover:scale-105" asChild>
             <Link href="/contact" className="uppercase italic">Consult an Expert</Link>
           </Button>
        </div>
      </section>
    </div>
  );
}
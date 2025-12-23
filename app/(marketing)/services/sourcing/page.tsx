import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  ArrowRight, 
  BarChart4, 
  CheckCircle2, 
  Search,
  Zap,
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Strategic Sourcing | B2B Curation Engine',
  description: '데이터 기반의 정교한 상품 소싱 및 도매 전략으로 유통 파트너의 수익성을 제고합니다.',
};

export default function SourcingServicePage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-zinc-950">
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-56 md:pb-40 border-b border-zinc-100 dark:border-zinc-900 bg-subtle-grid">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-[#FF8C00]"></span>
              <span className="text-[10px] font-black tracking-[0.3em] text-[#FF8C00] uppercase italic">Liquidity Solution 05</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-brand-navy dark:text-white mb-10 tracking-tighter leading-none italic uppercase">
              STRATEGIC <br />
              <span className="text-slate-500">SOURCING.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-16 leading-relaxed font-medium">
              팔리는 상품은 따로 있습니다. <br />
              오렌지팩토리의 데이터 큐레이션 엔진이 귀사 유통 채널의 필승 전략이 됩니다.
            </p>
            <Button size="lg" className="h-20 px-12 rounded-lg bg-brand-navy dark:bg-white dark:text-brand-navy text-white text-xl font-black shadow-elevated transition-transform hover:scale-105" asChild>
              <Link href="/contact" className="flex items-center gap-2 uppercase italic">
                Get Curation Insider <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Logic / Grid Sections */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900/40 border-b border-zinc-100 dark:border-zinc-900">
        <div className="section-container">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
                {[
                  {
                    title: 'DATA INSIGHT',
                    desc: '전국 단위 온/오프라인 판매 데이터를 실시간 분석하여 리스크는 낮고 회전율은 높은 상품군을 선별합니다.',
                    icon: <BarChart4 className="w-8 h-8" />
                  },
                  {
                    title: 'EXCLUSIVE ACCESS',
                    desc: '오렌지팩토리 파트너 브랜드들의 독점 소싱 물량을 선점하여 타 유통사 대비 압도적인 원가 경쟁력을 확보합니다.',
                    icon: <Target className="w-8 h-8" />
                  },
                  {
                    title: 'CURATION ENGINE',
                    desc: '단순 대량 매입이 아닌, 각 유통 상권과 타겟 고객에 최적화된 상품 믹스를 전략적으로 큐레이션하여 제안합니다.',
                    icon: <Search className="w-8 h-8" />
                  },
                  {
                    title: 'SPEED TO MARKET',
                    desc: '일괄 수거 및 자체 검수 시스템을 통해 신상품의 시장 진입 시간을 최소화하여 트렌드 선점 효과를 보장합니다.',
                    icon: <Zap className="w-8 h-8" />
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white dark:bg-zinc-950 p-16 space-y-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors">
                     <div className="text-[#FF8C00]">{item.icon}</div>
                     <h3 className="text-2xl font-black italic tracking-tighter uppercase">{item.title}</h3>
                     <p className="text-slate-600 text-sm leading-relaxed font-medium italic">{item.desc}</p>
                  </div>
                ))}
           </div>
        </div>
      </section>

      {/* The Sourcing Philosophy - High Impact Text */}
      <section className="py-40 bg-white dark:bg-zinc-950">
        <div className="section-container max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-tight">Beyond <br /> Wholesaling.</h2>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium italic">
                우리는 단순히 물건을 넘기지 않습니다. <br />
                파트너사의 매출 구조를 분석하고, 그 구조 속에서 
                최적의 수익을 낼 수 있는 상품의 &apos;흐름&apos;을 소싱합니다. 
                오렌지팩토리와의 결합이 곧 성장의 공식입니다.
            </p>
        </div>
      </section>

      {/* Closing Action */}
      <section className="py-40 bg-zinc-950 text-white">
        <div className="section-container text-center">
           <h2 className="text-4xl md:text-8xl font-black italic tracking-tighter uppercase mb-16 leading-none">Source the <br /> Future.</h2>
           <Button size="lg" className="h-24 px-20 border-2 border-white text-white hover:bg-white hover:text-zinc-950 text-2xl font-black transition-all" asChild>
              <Link href="/contact" className="uppercase italic">Join the Partner Network</Link>
           </Button>
           <p className="mt-12 text-zinc-600 font-black text-[10px] uppercase tracking-[0.5em]">Selective Partnership Program Active</p>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap,
  Package,
  ArrowUpRight,
  TrendingUp,
  LineChart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Inventory Liquidation | Strategic Asset Management',
  description: '대한민국 NO.1 재고 가치 평가 및 전액 현금 매입 솔루션.',
};

export default function InventoryServicePage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-zinc-950">
      
      {/* Hero - Structural & Professional */}
      <section className="relative pt-32 pb-24 md:pt-56 md:pb-40 border-b border-zinc-100 dark:border-zinc-900 bg-subtle-grid">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-[#FF8C00]"></span>
              <span className="text-[10px] font-black tracking-[0.3em] text-[#FF8C00] uppercase">Liquidity Solution 01</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-brand-navy dark:text-white mb-10 tracking-tighter leading-none italic">
              INVENTORY <br />
              <span className="text-zinc-400">LIQUIDATION.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mb-16 leading-relaxed font-medium">
              39년 데이터 기반의 정교한 가치 산출 시스템으로 <br />
              귀사의 잉여 자산을 즉각적인 기업 운영 자금으로 전환합니다.
            </p>
            <Button size="lg" className="h-20 px-12 rounded-lg bg-brand-navy dark:bg-white dark:text-brand-navy text-white text-xl font-black shadow-elevated transition-transform hover:scale-105" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Evaluate My Assets Now <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy / Value Prop - Grid based */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <h2 className="text-4xl font-black tracking-tight leading-tight italic uppercase">
                  Not just buying. <br />
                  <span className="text-[#FF8C00]">Unlocking Capital.</span>
               </h2>
               <p className="text-lg text-zinc-500 leading-relaxed font-medium">
                  단순한 &apos;땡처리&apos;가 아닙니다. 오렌지팩토리는 재고 자산의 시장 가치를 최고치로 끌어올려 
                  매각하는 전략적 파트너입니다. 대량 매입을 통한 자금 집행은 물론, 
                  브랜드 가치를 훼손하지 않는 철저한 유통 경로 통제 솔루션을 제공합니다.
               </p>
               <ul className="space-y-6">
                  {[
                    '전액 현금 즉시 결제 시스템 (업계 유일)',
                    '온라인 노출 100% 차단 보안 유통망',
                    '전국 단위 대규모 물류 직접 수거 인프라',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center border-b border-zinc-200 dark:border-zinc-800 pb-4">
                      <CheckCircle2 className="w-5 h-5 text-[#FF8C00]" />
                      <span className="font-bold text-brand-navy dark:text-zinc-200 uppercase tracking-tighter text-sm">{item}</span>
                    </li>
                  ))}
               </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
               {[
                 { icon: <TrendingUp className="w-6 h-6" />, label: 'Capital Flow', val: '+24h' },
                 { icon: <Zap className="w-6 h-6" />, label: 'Efficiency', val: '100%' },
                 { icon: <ShieldCheck className="w-6 h-6" />, label: 'Brand Safety', val: 'Secure' },
                 { icon: <LineChart className="w-6 h-6" />, label: 'Market Depth', val: 'Largest' },
               ].map((card, i) => (
                 <div key={i} className="p-8 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-lg flex flex-col justify-between h-48 hover:border-[#FF8C00] transition-colors">
                    <div className="text-zinc-300">{card.icon}</div>
                    <div>
                       <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{card.label}</p>
                       <p className="text-3xl font-black tracking-tighter italic">{card.val}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow - Step by Step */}
      <section className="py-40 bg-white dark:bg-zinc-950">
        <div className="section-container text-center mb-24">
          <h2 className="text-3xl font-black tracking-widest uppercase italic mb-4">Operational Excellence</h2>
          <div className="h-1 w-20 bg-[#FF8C00] mx-auto"></div>
        </div>
        
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Listing', desc: '재고 품목 및 수량 데이터 전송' },
              { step: '02', title: 'Insight', desc: '빅데이터 기반 가치 분석 제안' },
              { step: '03', title: 'Agreement', desc: '매입 계약 및 법적 절차 종결' },
              { step: '04', title: 'Transfer', desc: '현금 즉시 지급 및 물류 수거' },
            ].map((s, i) => (
              <div key={i} className="p-10 border border-zinc-50 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900 group transition-colors">
                <span className="text-4xl font-black text-zinc-100 dark:text-zinc-800 group-hover:text-[#FF8C00] transition-colors mb-8 block italic">{s.step}</span>
                <h4 className="text-xl font-black mb-4 tracking-tighter uppercase italic">{s.title}</h4>
                <p className="text-zinc-400 text-xs leading-relaxed font-bold tracking-tight">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Action */}
      <section className="py-40 bg-zinc-950">
        <div className="section-container flex flex-col items-center">
           <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter text-center mb-16 uppercase">Convert Stock to Fuel.</h2>
           <Button size="lg" className="h-24 px-20 rounded-lg bg-[#FF8C00] text-white text-3xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95" asChild>
              <Link href="/contact" className="flex items-center gap-4 uppercase italic">Start Liquidating <ArrowUpRight className="w-8 h-8" /></Link>
           </Button>
           <p className="mt-12 text-zinc-600 font-black text-xs uppercase tracking-[0.4em]">Expert Consulting Waiting for You</p>
        </div>
      </section>
    </div>
  );
}

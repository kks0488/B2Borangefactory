import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  CreditCard, 
  ArrowRight, 
  BarChart4, 
  ShieldCheck, 
  Landmark, 
  HandCoins,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Asset-Backed Financing | Strategic Liquidity Support',
  description: '보유 재고를 활용한 신속하고 전문적인 기업 운영 자금 조달 솔루션.',
};

export default function FinanceServicePage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-zinc-950">
      
      {/* Hero - Institutional Integrity */}
      <section className="relative pt-32 pb-24 md:pt-56 md:pb-40 border-b border-zinc-100 dark:border-zinc-900 bg-subtle-grid">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-blue-600"></span>
              <span className="text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">Liquidity Solution 02</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-brand-navy dark:text-white mb-10 tracking-tighter leading-none italic uppercase">
              ASSET-BACKED <br />
              <span className="text-zinc-400">FINANCING.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mb-16 leading-relaxed font-medium">
              은행 문턱을 넘지 못한 재고 자산도 오렌지팩토리를 만나면 <br />
              강력한 현금 유동성으로 재탄생합니다.
            </p>
            <Button size="lg" className="h-20 px-12 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xl font-black shadow-elevated transition-transform hover:scale-105" asChild>
              <Link href="/contact" className="flex items-center gap-2 uppercase italic">
                Get Credit Assessment <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison - Institutional Clarity */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
             
             {/* Traditional Finance */}
             <div className="bg-white dark:bg-zinc-950 p-16 space-y-12">
                <h3 className="text-xs font-black tracking-[0.3em] text-zinc-400 uppercase italic">Traditional Finance</h3>
                <div className="space-y-8">
                   {[
                     '재무제표 중심의 리지드한 심사',
                     '재고 자산을 담보로 인정받기 어려움',
                     '최소 4주 이상의 긴 자금 집행 기간',
                     '엄격한 원리금 분할 상환 요구',
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 items-center opacity-40">
                       <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                       <span className="text-sm font-bold text-zinc-500 line-through">{item}</span>
                     </div>
                   ))}
                </div>
             </div>

             {/* Orange Factory Solution */}
             <div className="bg-white dark:bg-zinc-950 p-16 space-y-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rotate-45 -mr-16 -mt-16" />
                <h3 className="text-xs font-black tracking-[0.3em] text-blue-600 uppercase italic">Orange Factory Engine</h3>
                <div className="space-y-8 relative z-10">
                   {[
                     '실물 재고 가치 중심의 유연한 평가',
                     '담보 자산의 즉각적인 자산화 및 승인',
                     '영업일 기준 3~5일 내 신속한 자금 집행',
                     '유통 연계를 통한 맞춤형 원금 상환 방식',
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 items-center">
                       <CheckCircle2 className="w-5 h-5 text-blue-600" />
                       <span className="text-sm font-black text-brand-navy dark:text-white uppercase tracking-tighter">{item}</span>
                     </div>
                   ))}
                </div>
                <div className="pt-10">
                   <div className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-2 italic">Institutional Standard</div>
                   <div className="h-1 w-12 bg-blue-600" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Metrics - Hard Data */}
      <section className="py-40 bg-white dark:bg-zinc-950">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            {[
              { label: 'Advancement Speed', val: 'Avg 3D' },
              { label: 'Evaluation Depth', val: 'Proprietary' },
              { label: 'Repayment Flexibility', val: 'Custom' },
              { label: 'Network Access', val: 'Exclusive' },
            ].map((m, i) => (
              <div key={i} className="space-y-4">
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{m.label}</p>
                <div className="text-4xl font-black text-brand-navy dark:text-white tracking-tighter italic uppercase">{m.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Footer */}
      <section className="py-40 bg-zinc-900">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase mb-6">FUEL YOUR GROWTH.</h2>
              <p className="text-zinc-400 text-lg font-medium">자금 흐름의 중단은 성장의 중단입니다. 오렌지팩토리가 귀사의 유동성 엔진이 되겠습니다.</p>
           </div>
           <Button size="lg" className="h-24 px-16 rounded-lg bg-white text-zinc-900 text-2xl font-black hover:bg-blue-600 hover:text-white transition-all shadow-2xl" asChild>
             <Link href="/contact" className="flex items-center gap-4 italic uppercase">Apply for Credit <Landmark className="w-8 h-8" /></Link>
           </Button>
        </div>
      </section>
    </div>
  );
}

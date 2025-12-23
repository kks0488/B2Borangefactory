import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  TrendingUp, 
  ArrowRight, 
  Shirt, 
  Store, 
  History,
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Success Cases | Proof of Performance',
  description: '오렌지팩토리와 함께 유동성 위기를 극복하고 성장을 지속하고 있는 1,200여 파트너사의 실제 사례.',
};

export default function SuccessPage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-zinc-950">
      
      {/* 1. Success Hero */}
      <section className="relative pt-32 pb-24 md:pt-56 md:pb-40 border-b border-zinc-100 dark:border-zinc-900 bg-subtle-grid">
        <div className="section-container">
          <div className="max-w-4xl opacity-0 animate-reveal">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-[#FF8C00]"></span>
              <span className="text-[10px] font-black tracking-[0.3em] text-[#FF8C00] uppercase italic">Performance Record</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-brand-navy dark:text-white mb-10 tracking-tighter leading-none italic uppercase">
              PROVEN <br />
              <span className="text-slate-500">OUTCOMES.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-medium mb-0">
              오렌지팩토리는 말이 아닌 결과로 증명합니다. <br />
              누적 1,200개 이상의 브랜드가 선택한 유동성 해결의 절대적 기준.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Figures */}
      <section className="py-24 border-b border-zinc-100 dark:border-zinc-900">
        <div className="section-container">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: 'Partnerships', val: '1,200+' },
                { label: 'Asset Liquidation', val: '₩2.5T' },
                { label: 'Client Satisfaction', val: '97%' },
                { label: 'Operational Years', val: '39Y' },
              ].map((m, i) => (
                <div key={i} className="space-y-2">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{m.label}</p>
                   <p className="text-4xl font-black italic tracking-tighter text-brand-navy dark:text-white">{m.val}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. Detailed Case Studies */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-20">
            
            {/* Case 01 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-l-4 border-zinc-900 dark:border-white pl-12 py-8 group">
               <div className="lg:col-span-4 space-y-6">
                  <div className="inline-block px-3 py-1 bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest">Case 01</div>
                  <h3 className="text-3xl font-black tracking-tighter leading-tight italic uppercase">
                     Institutional <br /> Stock Clearout
                  </h3>
                  <p className="text-sm font-bold text-[#FF8C00] uppercase tracking-widest">A-Brand | Sports Segment</p>
                  <p className="text-slate-600 font-medium italic leading-relaxed">
                     홈쇼핑 편성 조정으로 인한 35억 규모의 재고 적체 상황. 
                     단 48시간 내에 전액 현금 집행을 통해 차기 시즌 생산 자금을 확보한 사례입니다.
                  </p>
               </div>
               
               <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: 'Liquidation Amount', val: '₩3.5B', desc: '일괄 매입을 통한 즉각적인 자산화' },
                    { title: 'Time to Cash', val: '48H', desc: '의사결정 후 입금까지 소요 시간' },
                    { title: 'Brand Safety', val: '100%', desc: '폐쇄몰 및 해외 채널 한정 유통' },
                    { title: 'Maintenance Save', val: '₩12M/Mo', desc: '창고 보관 및 관리 비용 절감액' },
                  ].map((stat, i) => (
                    <div key={i} className="p-8 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-lg group-hover:border-[#FF8C00] transition-colors">
                       <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-1">{stat.title}</p>
                       <p className="text-3xl font-black italic tracking-tighter mb-4">{stat.val}</p>
                       <p className="text-xs text-slate-600 font-medium leading-none">{stat.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* Case 02 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-l-4 border-zinc-200 dark:border-zinc-800 pl-12 py-8 group">
               <div className="lg:col-span-4 space-y-6">
                  <div className="inline-block px-3 py-1 bg-zinc-200 text-slate-600 text-[10px] font-black uppercase tracking-widest">Case 02</div>
                  <h3 className="text-3xl font-black tracking-tighter leading-tight italic uppercase">
                     Strategic <br /> Channel Migration
                  </h3>
                  <p className="text-sm font-bold text-[#FF8C00] uppercase tracking-widest">B-Brand | Street Fashion</p>
                  <p className="text-slate-600 font-medium italic leading-relaxed">
                     온라인 무신사 등 주요 채널의 가격 노출을 우려한 고가의 스트릿 브랜드. 
                     오프라인 전용 위탁망을 통해 정상가 수준의 브랜드 이미지를 유지하며 재고의 90%를 소진하였습니다.
                  </p>
               </div>
               
               <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: 'Sales Through', val: '90%', desc: '재고 0%를 목표로 하는 정밀 타겟팅' },
                    { title: 'Margin Recovery', val: '85%', desc: '정상가 대비 높은 가치 회수율' },
                    { title: 'Price Protect', val: 'Strict', desc: '온라인 검색 노출 완벽 차단' },
                    { title: 'Revenue Growth', val: '+35%', desc: '신상품 집중을 통한 매출 시너지' },
                  ].map((stat, i) => (
                    <div key={i} className="p-8 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-lg group-hover:border-[#FF8C00] transition-colors">
                       <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-1">{stat.title}</p>
                       <p className="text-3xl font-black italic tracking-tighter mb-4">{stat.val}</p>
                       <p className="text-xs text-slate-600 font-medium leading-none">{stat.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Global Action */}
      <section className="py-40 bg-zinc-950 text-white overflow-hidden">
        <div className="section-container text-center max-w-4xl space-y-12">
           <Briefcase className="w-16 h-16 text-[#FF8C00] mx-auto animate-pulse" />
           <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">Your Success is <br /> Next.</h2>
           <p className="text-slate-500 text-xl font-medium italic">
             귀사의 재고 상황에 최적화된 성공 시나리오를 설계해 드립니다. <br />
             지금 바로 실질적인 유동성 변화를 경험하세요.
           </p>
           <Button size="lg" className="h-24 px-16 rounded-lg bg-white text-zinc-950 hover:bg-[#FF8C00] hover:text-white text-2xl font-black transition-all" asChild>
             <Link href="/ko/contact" className="uppercase italic">Consult with the Experts</Link>
           </Button>
        </div>
      </section>
    </div>
  );
}
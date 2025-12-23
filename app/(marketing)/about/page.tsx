import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  History, 
  Target, 
  Users2, 
  ChevronRight,
  TrendingUp,
  Globe2,
  Scale
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Heritage | 39 Years of Trust',
  description: '1985년부터 대한민국 패션 산업의 유동성을 지켜온 오렌지팩토리의 역사와 비전.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-zinc-950">
      
      {/* Heritage Hero */}
      <section className="relative pt-32 pb-24 md:pt-56 md:pb-40 border-b border-zinc-100 dark:border-zinc-900 bg-subtle-grid">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-zinc-900 dark:bg-white"></span>
              <span className="text-[10px] font-black tracking-[0.3em] text-zinc-500 uppercase italic">Institutional Heritage</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-brand-navy dark:text-white mb-10 tracking-tighter leading-none italic uppercase">
              DECADES OF <br />
              <span className="text-[#FF8C00]">TRUST.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mb-16 leading-relaxed font-medium">
              1985년 설립 이후, 오렌지팩토리는 패션 브랜드의 보이지 않는 리스크를 관리하며 
              대한민국 유통 산업의 중추적인 역할을 담당해 왔습니다. 
            </p>
          </div>
        </div>
      </section>

      {/* Core Values - Structural Clarity */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900/40 border-b border-zinc-100 dark:border-zinc-900">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { 
                icon: <History className="w-8 h-8" />, 
                title: "HERITAGE", 
                desc: "39년의 업력은 단순한 숫자가 아닌, 수많은 경제 위기 속에서도 파트너들과 함께 살아남아 증명한 '생존 본능'과 '안정성'의 증거입니다." 
              },
              { 
                icon: <Scale className="w-8 h-8" />, 
                title: "INTEGRITY", 
                desc: "우리는 데이터에 기반한 정직한 가치 평가를 지향합니다. 단기적인 이익보다 장기적인 파트너십을 통한 상생의 가치를 최우선으로 합니다." 
              },
              { 
                icon: <Target className="w-8 h-8" />, 
                title: "LIQUIDITY", 
                desc: "기업의 가장 큰 적은 '멈춤'입니다. 오렌지팩토리는 자금의 흐름을 뚫어주는 혈관이 되어 비즈니스의 지속 가능성을 보장합니다." 
              },
            ].map((value, i) => (
              <div key={i} className="space-y-8 p-12 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-lg shadow-subtle hover:border-[#FF8C00] transition-colors group">
                <div className="text-[#FF8C00] group-hover:scale-110 transition-transform origin-left">{value.icon}</div>
                <h3 className="text-2xl font-black tracking-tighter italic uppercase">{value.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium italic">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section - High Contrast */}
      <section className="py-40 bg-white dark:bg-zinc-950 overflow-hidden relative">
        <div className="section-container">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
             <span className="text-[10px] font-black tracking-[0.4em] text-zinc-300 uppercase mb-8">Our Mission</span>
             <h2 className="text-4xl md:text-7xl font-black text-brand-navy dark:text-white mb-12 tracking-tighter italic uppercase leading-tight">
                Empowering Brands, <br />
                <span className="text-[#FF8C00]">Enabling Growth.</span>
             </h2>
             <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed mb-20 max-w-3xl font-medium italic">
                재고는 실패의 흔적이 아닙니다. 새로운 도약을 위한 '준비된 자산'입니다. 
                오렌지팩토리는 그 자산의 가치를 가장 먼저 알아보고, 
                귀사가 다시 원활하게 움직일 수 있도록 돕습니다.
             </p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full pt-16 border-t border-zinc-100 dark:border-zinc-900">
                {[
                  { label: 'Founded', val: '1985' },
                  { label: 'Partners', val: '1,200+' },
                  { label: 'Infrastructure', val: 'Own DC' },
                  { label: 'System', val: 'AI Values' },
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-3xl font-black italic tracking-tighter">{stat.val}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-40 bg-zinc-950">
        <div className="section-container flex flex-col items-center">
           <Button size="lg" className="h-24 px-16 rounded-lg bg-white text-zinc-950 hover:bg-[#FF8C00] hover:text-white text-2xl font-black shadow-2xl transition-all" asChild>
              <Link href="/contact" className="flex items-center gap-4 italic uppercase">Be Our Partner <ArrowRight className="w-6 h-6" /></Link>
           </Button>
           <p className="mt-8 text-zinc-700 font-bold uppercase tracking-[0.4em] text-xs">Join the Institutional Standard</p>
        </div>
      </section>
    </div>
  );
}
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  ArrowRight, 
  Globe2, 
  ShieldCheck, 
  Zap,
  Layers,
  CheckCircle2,
  Workflow
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Global Production Infra | Scalable Supply Chain',
  description: '최적화된 해외 의류 생산 네트워크를 통해 높은 품질과 경쟁력 있는 원가를 제안합니다.',
};

export default function ProductionServicePage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-zinc-950">
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-56 md:pb-40 border-b border-zinc-100 dark:border-zinc-900 bg-subtle-grid">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-[#FF8C00]"></span>
              <span className="text-[10px] font-black tracking-[0.3em] text-[#FF8C00] uppercase italic">Liquidity Solution 04</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-brand-navy dark:text-white mb-10 tracking-tighter leading-none italic uppercase">
              PRODUCTION <br />
              <span className="text-zinc-400">INFRASTRUCTURE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mb-16 leading-relaxed font-medium">
              불안정한 공급망을 넘어선 압도적인 생산 경쟁력. <br />
              전 세계 주요 생산 기지를 아우르는 오렌지팩토리의 글로벌 네트워크가 귀사의 공급망이 됩니다.
            </p>
            <Button size="lg" className="h-20 px-12 rounded-lg bg-brand-navy dark:bg-white dark:text-brand-navy text-white text-xl font-black shadow-elevated transition-transform hover:scale-105" asChild>
              <Link href="/contact" className="flex items-center gap-2 uppercase italic">
                Build Your Supply Chain <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Global Map Concept / Features */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="order-2 lg:order-1 relative">
                <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-white/5 p-8 flex items-center justify-center">
                   <Globe2 className="w-32 h-32 text-zinc-800 animate-pulse" />
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
                </div>
                <div className="absolute -bottom-8 -right-8 p-10 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 shadow-2xl rounded-lg">
                   <p className="text-4xl font-black italic tracking-tighter text-[#FF8C00]">GLOBAL</p>
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mt-1">Network Active</p>
                </div>
             </div>
             
             <div className="order-1 lg:order-2 space-y-12">
                <h2 className="text-4xl font-black tracking-tight leading-tight italic uppercase">
                  Precision <br />
                  <span className="text-[#FF8C00]">Manufacturing.</span>
                </h2>
                <p className="text-lg text-zinc-500 leading-relaxed font-medium italic">
                  베트남, 인도네시아, 중국 등 글로벌 거점에 위치한 검증된 파트너 공장들과의 
                  직접 계약을 통해 유통 마진을 제거하고 최상급 품질을 확보합니다. 
                  우리는 공장 섭외부터 선적까지 모든 프로세스를 데이터로 관리합니다.
                </p>
                <div className="grid grid-cols-1 gap-6">
                   {[
                     { title: 'Cost Optimization', desc: '직접 소싱을 발판으로 한 원가 절감 솔루션' },
                     { title: 'Quality Assurance', desc: '오렌지팩토리 전담 QC 팀의 엄격한 상주 검수' },
                     { title: 'Lead-time Control', desc: '데이터 기반의 정교한 생산 스케줄 관리 시스템' },
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 items-start pb-6 border-b border-zinc-200 dark:border-zinc-800">
                        <div className="w-2 h-2 rounded-full bg-[#FF8C00] mt-2.5" />
                        <div>
                          <p className="text-sm font-black uppercase tracking-widest text-brand-navy dark:text-white italic">{item.title}</p>
                          <p className="text-xs text-zinc-400 font-bold mt-1 uppercase italic leading-none">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Operational Stats */}
      <section className="py-40 bg-white dark:bg-zinc-950">
        <div className="section-container text-center max-w-4xl mx-auto space-y-16">
           <h2 className="text-3xl font-black tracking-[0.4em] uppercase italic text-zinc-300">Scale of Infrastructure</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: 'Active Hubs', val: '5 Countries' },
                { label: 'Factory Net', val: '80+' },
                { label: 'Monthly Cap', val: '1M+ Pcs' },
                { label: 'QC Rating', val: '99.8%' },
              ].map((m, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{m.label}</p>
                  <div className="text-2xl font-black italic tracking-tighter uppercase">{m.val}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Action */}
      <section className="py-40 bg-zinc-950">
        <div className="section-container text-center">
           <h2 className="text-4xl md:text-8xl font-black text-white italic tracking-tighter uppercase mb-16 leading-none">Global <br /> Standards.</h2>
           <Button size="lg" className="h-24 px-20 rounded-lg bg-[#FF8C00] text-white text-2xl font-black shadow-2xl transition-all hover:scale-105" asChild>
              <Link href="/contact" className="uppercase italic">Consult Production Strategy</Link>
           </Button>
        </div>
      </section>
    </div>
  );
}

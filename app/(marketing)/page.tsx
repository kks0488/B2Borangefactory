import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  BarChart4, 
  ShieldCheck, 
  Wallet2, 
  Building2, 
  Clock, 
  ChevronRight,
  Target,
  LineChart
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-zinc-950">
      
      {/* 1. HERO - Institutional Presence */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 border-b border-zinc-100 dark:border-zinc-900 overflow-hidden bg-subtle-grid">
        <div className="section-container relative z-10">
          <div className="max-w-4xl opacity-0 animate-reveal">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-[#FF8C00]"></span>
              <span className="text-sm font-bold tracking-[0.3em] text-[#FF8C00] uppercase">Since 1985</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-brand-navy dark:text-white mb-10 leading-[1] tracking-tighter">
              The Standard of <br />
              <span className="text-zinc-400">Inventory Liquidity.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-slate dark:text-zinc-400 max-w-2xl mb-12 leading-relaxed font-medium">
              오렌지팩토리는 39년간 대한민국 패션 산업의 유동성을 책임져온 <br className="hidden md:block" />
              재고 자산 관리 및 자금 조달 전문 파트너입니다. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button size="lg" className="h-16 px-10 rounded-lg bg-[#FF8C00] hover:bg-[#E67E00] text-lg font-bold shadow-soft transition-all" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  가치 평가 전문 상담 <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" className="h-16 px-10 text-brand-navy dark:text-white font-bold hover:bg-zinc-100 dark:hover:bg-zinc-900" asChild>
                <Link href="/services">서비스 포트폴리오 <ChevronRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOGO CLOUD / TRUST - Minimalist */}
      <section className="py-16 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-12 opacity-60 grayscale transition-all hover:grayscale-0">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Our Trusted Partners</p>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 items-center text-3xl font-black italic text-zinc-300 dark:text-zinc-800">
            <span>BRAND A</span>
            <span>BRAND B</span>
            <span>BRAND C</span>
            <span>BRAND D</span>
            <span>BRAND E</span>
          </div>
        </div>
      </section>

      {/* 3. KEY METRICS - Structural Strength */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { label: 'Cumulative Throughput', value: '₩2.4T+', desc: '지난 39년간 해결한 누적 재고 자산 규모' },
              { label: 'Processing Speed', value: '24H', desc: '매입 결정 후 현금 지급까지 소요되는 최단 시간' },
              { label: 'Partnership Network', value: '1,200+', desc: '오렌지팩토리와 함께하는 국내외 패션 브랜드' },
            ].map((metric, i) => (
              <div key={metric.label} className="flex flex-col border-l-2 border-zinc-200 dark:border-zinc-800 pl-8 transition-all hover:border-[#FF8C00] group">
                <p className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-4">{metric.label}</p>
                <p className="text-5xl lg:text-6xl font-black text-brand-navy dark:text-white mb-6 group-hover:text-[#FF8C00] transition-colors tracking-tighter italic">{metric.value}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STRATEGIC SOLUTIONS - Precision Grid */}
      <section className="py-32 bg-white dark:bg-zinc-950">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-zinc-100 dark:border-zinc-900 pb-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Strategic Liquidity.</h2>
              <p className="text-brand-slate dark:text-zinc-400 text-lg">
                현금 흐름 최적화와 브랜드 보호를 동시에 달성하는 <br />
                오렌지팩토리만의 5대 핵심 비즈니스 엔진입니다.
              </p>
            </div>
            <Link href="/services" className="text-[#FF8C00] font-bold text-sm tracking-widest flex items-center gap-2 group">
              READ ALL SOLUTIONS <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              {
                icon: <Wallet2 className="w-6 h-6" />,
                title: "Institutional Buying",
                desc: "잉여 재고 전액 현금 매입. 신속한 결제로 기업의 유동성 위기를 해결합니다.",
                href: "/services/inventory"
              },
              {
                icon: <LineChart className="w-6 h-6" />,
                title: "Asset-Backed Finance",
                desc: "재고 자산을 담보로 한 운영 자금 원조. 비즈니스 단절 없는 자금 조달 솔루션.",
                href: "/services/finance"
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Consignment Ops",
                desc: "브랜드 가치 보호형 위탁 판매. 최적화된 채널을 통한 안정적 소진 전략.",
                href: "/services/consignment"
              },
              {
                icon: <Building2 className="w-6 h-6" />,
                title: "Global Supply Engine",
                desc: "해외 생산 최적화 인프라 가동. 원가 절감과 품질 고도화를 동시에 실현.",
                href: "/services/production"
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Strategic Sourcing",
                desc: "데이터 기반 B2B 상품 큐레이션 및 도매. 유통 파트너의 수익성을 극대화.",
                href: "/services/sourcing"
              },
              {
                icon: <BarChart4 className="w-6 h-6" />,
                title: "Market Analysis",
                desc: "데이터 중심의 정교한 재고 가치 산정. 불확실성을 상수로 바꾸는 인사이트.",
                href: "/success"
              }
            ].map((sol, i) => (
              <Link key={i} href={sol.href} className="group p-10 border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                <div className="text-[#FF8C00] mb-8 group-hover:scale-110 transition-transform origin-left">{sol.icon}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#FF8C00] transition-colors uppercase tracking-tight italic">{sol.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">{sol.desc}</p>
                <div className="text-[10px] font-black tracking-widest text-zinc-300 dark:text-zinc-700 uppercase">Discover more</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HERITAGE / WHY US - Information Density */}
      <section className="py-32 bg-brand-navy">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight italic">
                EXPERIENCE <br />
                THAT MATTERS.
              </h2>
              <p className="text-zinc-400 text-xl leading-relaxed">
                오렌지팩토리는 단순히 재고를 사고팔지 않습니다. <br />
                우리는 지난 39년간 1,200개 이상의 파트너사와 함께하며 
                패션 산업의 보이지 않는 리스크를 관리해 왔습니다. 
                전문가 집단의 정교한 가치 평가와 압도적인 자본력은 귀사의 가장 확실한 보험이 됩니다.
              </p>
              <div className="flex flex-col gap-6">
                {[
                  '1985년 설립 - 업계 최장수 업력의 안정성',
                  '자체 물류 센터 운영 - 즉각적인 일괄 수거 인프라',
                  '금융 연계 솔루션 - 단순 매입을 넘어선 자금 지원',
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-[#FF8C00]" />
                    <span className="text-white font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="aspect-square bg-zinc-800 rounded-lg p-1 border border-white/10 overflow-hidden group">
                  <div className="w-full h-full bg-zinc-900 flex items-center justify-center relative overflow-hidden">
                     {/* Static visual representation of professional context */}
                     <div className="absolute inset-0 opacity-20">
                        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]" />
                     </div>
                     <span className="text-zinc-700 font-black text-9xl tracking-tighter select-none rotate-12 opacity-50">TRUST</span>
                  </div>
               </div>
               <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-[#FF8C00] rounded-lg shadow-2xl flex flex-col items-center justify-center p-4">
                  <span className="text-4xl font-black text-white">39Y</span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest text-center leading-tight mt-1">Foundational Trust</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION - Solid Ending */}
      <section className="py-40 bg-white dark:bg-zinc-950">
        <div className="section-container text-center max-w-4xl">
           <div className="mb-12 flex justify-center">
             <Clock className="w-12 h-12 text-[#FF8C00] animate-pulse" />
           </div>
           <h2 className="text-4xl md:text-7xl font-black text-brand-navy dark:text-white tracking-tighter mb-10 leading-[1.1] italic">
             START YOUR <br />
             STRATEGIC EXIT.
           </h2>
           <p className="text-xl text-brand-slate dark:text-zinc-400 mb-16 font-medium leading-relaxed">
             더 이상 고민하지 마세요. 오렌지팩토리가 귀사의 재고 자산을 <br />
             가장 가치 있는 유동성으로 즉각 전환해 드립니다.
           </p>
           <Button size="lg" className="h-20 px-16 rounded-lg bg-brand-navy dark:bg-white dark:text-brand-navy text-white text-2xl font-black transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200" asChild>
             <Link href="/contact">CONSULTATION NOW</Link>
           </Button>
        </div>
      </section>
    </div>
  );
}

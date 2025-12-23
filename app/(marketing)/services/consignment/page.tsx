import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Store, 
  ArrowRight, 
  ShieldCheck, 
  Scale, 
  Network, 
  BarChart3,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Consignment Operations | Strategic Channel Management',
  description: '브랜드 가치를 보호하며 재고를 효율적으로 소진하는 오프라인 위탁 판매 솔루션.',
};

export default function ConsignmentServicePage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-zinc-950">
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-56 md:pb-40 border-b border-zinc-100 dark:border-zinc-900 bg-subtle-grid">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-[#FF8C00]"></span>
              <span className="text-[10px] font-black tracking-[0.3em] text-[#FF8C00] uppercase italic">Liquidity Solution 03</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-brand-navy dark:text-white mb-10 tracking-tighter leading-none italic uppercase">
              CONSIGNMENT <br />
              <span className="text-zinc-400">OPERATIONS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mb-16 leading-relaxed font-medium">
              온라인 가격 무너짐 없이 재고를 소진하고 싶으신가요? <br />
              오렌지팩토리의 독점 오프라인 채널이 정답입니다.
            </p>
            <Button size="lg" className="h-20 px-12 rounded-lg bg-brand-navy dark:bg-white dark:text-brand-navy text-white text-xl font-black shadow-elevated transition-transform hover:scale-105" asChild>
              <Link href="/contact" className="flex items-center gap-2 uppercase italic">
                Secure Your Channel <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Prop Grid */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-[#FF8C00]" />,
                title: "PRICE PROTECTION",
                desc: "온라인 검색 노출을 철저히 배제한 오프라인 '클로우즈드' 채널만을 활용하여 브랜드의 프리미엄 이미지를 유지합니다."
              },
              {
                icon: <Network className="w-8 h-8 text-[#FF8C00]" />,
                title: "SELECTIVE NETWORK",
                desc: "타겟 고객과 겹치지 않는 전국 단위의 특수 매장 및 기업 복지 채널을 통해 재고를 전략적으로 분산 소진합니다."
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-[#FF8C00]" />,
                title: "REVENUE OPTIMIZATION",
                desc: "단순 폐기가 아닌 위탁 판매를 통해 원가 이상의 회수율을 달성하며 기업의 최종 이익을 극대화합니다."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-12 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-lg shadow-subtle hover:border-[#FF8C00] transition-colors group">
                <div className="mb-8 group-hover:scale-110 transition-transform origin-left">{feature.icon}</div>
                <h3 className="text-2xl font-black tracking-tighter mb-6 italic uppercase">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium italic">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Integration */}
      <section className="py-40 bg-white dark:bg-zinc-950">
        <div className="section-container">
           <div className="max-w-3xl mx-auto text-center space-y-12">
              <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-tight">Channel <br /> Intelligence.</h2>
              <div className="h-1 w-20 bg-[#FF8C00] mx-auto mb-12"></div>
              <p className="text-zinc-500 text-xl font-medium italic leading-relaxed">
                오렌지팩토리는 단순히 물건을 위탁받지 않습니다. <br />
                우리는 브랜드의 현재 가치와 시장의 수요를 매칭하여 
                가장 저항이 적고 수익은 큰 채널을 설계합니다.
              </p>
           </div>
           
           <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-100 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-800 rounded-lg overflow-hidden">
                {[
                  { label: 'Channel Type', val: 'Private Offline Only' },
                  { label: 'Price Control', val: 'Centrally Managed' },
                  { label: 'Settlement', val: 'Transparent & Auto' },
                  { label: 'Reporting', val: 'Real-time Dash' },
                ].map((item, i) => (
                  <div key={i} className="bg-white dark:bg-zinc-950 p-12 flex flex-col justify-between h-48">
                    <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">{item.label}</p>
                    <p className="text-2xl font-black italic tracking-tighter uppercase">{item.val}</p>
                  </div>
                ))}
           </div>
        </div>
      </section>

      {/* Final Action */}
      <section className="py-40 bg-zinc-950">
        <div className="section-container text-center">
           <h2 className="text-4xl md:text-8xl font-black text-white italic tracking-tighter uppercase mb-16">Clearance with <br /> Honor.</h2>
           <Button size="lg" className="h-24 px-20 rounded-lg bg-[#FF8C00] text-white text-2xl font-black shadow-2xl transition-all hover:scale-105" asChild>
              <Link href="/contact" className="uppercase italic">Consult Your Strategy</Link>
           </Button>
        </div>
      </section>
    </div>
  );
}

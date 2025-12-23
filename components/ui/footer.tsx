import Link from 'next/link';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Globe2,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 pt-32 pb-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-10">
            <Link href="/" className="inline-block">
              <span className="font-black text-2xl tracking-tighter text-brand-navy dark:text-white">
                ORANGE<span className="text-[#FF8C00]">FACTORY</span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed max-w-sm font-medium">
              대한민국 1등 재고 솔루션 파트너. 39년간 쌓아온 데이터와 자본력을 바탕으로 
              기업의 재고 자산을 최적의 유동성으로 전환합니다. 
              우리의 기술력은 기업의 내일이 됩니다.
            </p>
            <div className="flex gap-4">
               {['LN', 'IG', 'FB'].map(sns => (
                 <a key={sns} href="#" className="text-[10px] font-black tracking-widest text-zinc-300 hover:text-[#FF8C00] transition-colors border border-zinc-100 dark:border-zinc-900 px-3 py-1 rounded uppercase">
                   {sns}
                 </a>
               ))}
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF8C00]">Solutions</h3>
            <ul className="space-y-4">
              {[
                { label: 'Inventory Purchasing', href: '/services/inventory' },
                { label: 'Asset Financing', href: '/services/finance' },
                { label: 'Consignment Ops', href: '/services/consignment' },
                { label: 'Global Sourcing', href: '/services/sourcing' },
                { label: 'Production Infra', href: '/services/production' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 hover:text-brand-navy dark:hover:text-white transition-colors text-xs font-bold flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Corporate</h3>
            <ul className="space-y-4 text-xs font-bold">
              <li><Link href="/about" className="text-slate-600 hover:text-brand-navy dark:hover:text-white">Our Heritage</Link></li>
              <li><Link href="/success" className="text-slate-600 hover:text-brand-navy dark:hover:text-white">Case Studies</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-brand-navy dark:hover:text-white">Get in Touch</Link></li>
              <li><Link href="/privacy" className="text-slate-600 hover:text-brand-navy dark:hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Operational Center */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Headquarters</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-4 h-4 text-zinc-300 mt-1" />
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  서울시 강남구 테헤란로 123 <br />
                  오렌지빌딩 8층, 전략 운영 센터
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="w-4 h-4 text-zinc-300 mt-1" />
                <p className="text-xs text-slate-600 font-bold">010-4464-0345</p>
              </div>
              <div className="flex gap-4">
                <Mail className="w-4 h-4 text-zinc-300 mt-1" />
                <p className="text-xs text-slate-600 font-bold">contact@orangefactory.kr</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Bottom Bar */}
        <div className="pt-16 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-10 items-center">
            <p className="text-[10px] font-black tracking-widest text-zinc-300 uppercase">
              © {currentYear} Orange Factory Global. Institutional Trust.
            </p>
            <div className="hidden md:flex gap-4 items-center">
               <span className="flex items-center gap-1 text-[10px] text-zinc-400 font-bold"><Globe2 className="w-3 h-3" /> KR / EN</span>
            </div>
          </div>
          <p className="text-[10px] font-black text-zinc-300 tracking-tighter uppercase italic">
            Leading the Liquidity Standard Since 1985
          </p>
        </div>
      </div>
    </footer>
  );
}
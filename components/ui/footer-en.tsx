import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Globe } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'Wholesale', href: '/wholesale' },
    { label: 'Inventory', href: '/inventory' },
    { label: 'Export', href: '/export' },
  ];

  const company = [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block mb-3">
              <Image src="/img/logo.png" alt="Orange Factory" width={100} height={25} className="h-5 w-auto" />
            </Link>
            <p className="text-sm text-slate-500">Korean Fashion Wholesale<br />Since 1985</p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Services</h3>
              <ul className="space-y-2">
                {services.map((link) => (<li key={link.href}><Link href={link.href} className="text-sm text-slate-600 hover:text-[#FF8C00] transition-colors">{link.label}</Link></li>))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Company</h3>
              <ul className="space-y-2">
                {company.map((link) => (<li key={link.href}><Link href={link.href} className="text-sm text-slate-600 hover:text-[#FF8C00] transition-colors">{link.label}</Link></li>))}
                <li><Link href="/ko" className="flex items-center gap-1 text-sm text-slate-600 hover:text-[#FF8C00] transition-colors"><Globe className="w-3.5 h-3.5" /> 한국어 사이트</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Contact</h3>
              <div className="space-y-2">
                <a href="tel:+82-10-4464-0345" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#FF8C00] transition-colors"><Phone className="w-3.5 h-3.5 text-[#FF8C00]" />+82-10-4464-0345</a>
                <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#FF8C00] transition-colors"><Mail className="w-3.5 h-3.5 text-[#FF8C00]" />orangefactory@kakao.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-slate-400">© {currentYear} Orange Factory. All rights reserved.</p>
          <p className="text-xs text-slate-400">40 Years of Korean Fashion Excellence</p>
        </div>
      </div>
    </footer>
  );
}

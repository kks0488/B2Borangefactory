import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: '재고매매', href: '/services/inventory' },
    { label: '동산담보', href: '/services/finance' },
    { label: '위탁판매', href: '/services/consignment' },
    { label: '해외생산', href: '/services/production' },
    { label: '상품소싱', href: '/services/sourcing' },
    { label: '해외수출', href: '/services/export' },
  ];

  const company = [
    { label: '회사소개', href: '/about' },
    { label: '문의하기', href: '/contact' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="section-container py-10">
        {/* 상단: 로고 + 네비게이션 */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          
          {/* 로고 및 슬로건 */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block mb-3">
              <Image 
                src="/img/logo.png" 
                alt="오렌지팩토리" 
                width={100} 
                height={25}
                className="h-5 w-auto"
              />
            </Link>
            <p className="text-sm text-slate-500">
              1985년부터 대한민국 재고 솔루션의 표준
            </p>
          </div>

          {/* 네비게이션 */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {/* 서비스 */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">서비스</h3>
              <ul className="space-y-2">
                {services.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-600 hover:text-[#FF8C00] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 회사 */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">회사</h3>
              <ul className="space-y-2">
                {company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-600 hover:text-[#FF8C00] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 연락처 */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">연락처</h3>
              <div className="space-y-2">
                <a href="tel:010-4464-0345" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#FF8C00] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#FF8C00]" />
                  010-4464-0345
                </a>
                <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#FF8C00] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#FF8C00]" />
                  orangefactory@kakao.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 바 */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-slate-400">
            © {currentYear} 오렌지팩토리. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            40년 전통의 재고 솔루션 파트너
          </p>
        </div>
      </div>
    </footer>
  );
}
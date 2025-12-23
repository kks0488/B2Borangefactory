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
      {/* 메인 푸터 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* 브랜드 */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/img/logo.png" 
                alt="오렌지팩토리" 
                width={120} 
                height={30}
                className="h-6 w-auto"
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              1985년부터 대한민국<br />재고 솔루션의 표준
            </p>
          </div>

          {/* 서비스 */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900">서비스</h3>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 hover:text-[#FF8C00] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 회사 */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900">회사</h3>
            <ul className="space-y-2">
              {company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 hover:text-[#FF8C00] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900">연락처</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF8C00] flex-shrink-0" />
                <a href="tel:010-4464-0345" className="text-slate-500 text-sm hover:text-[#FF8C00] transition-colors">
                  010-4464-0345
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF8C00] flex-shrink-0" />
                <a href="mailto:orangefactory@kakao.com" className="text-slate-500 text-sm hover:text-[#FF8C00] transition-colors">
                  orangefactory@kakao.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 바 */}
      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-slate-400 text-xs text-center">
            © {currentYear} 오렌지팩토리. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
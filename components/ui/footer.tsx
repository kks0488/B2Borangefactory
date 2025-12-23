import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: '재고매매 및 브랜드 양도양수', href: '/services/inventory' },
    { label: '동산 담보자금', href: '/services/finance' },
    { label: '오프라인 위탁판매', href: '/services/consignment' },
    { label: '의류 해외 생산', href: '/services/production' },
    { label: '상품 소싱 및 도매', href: '/services/sourcing' },
  ];

  const company = [
    { label: '회사소개', href: '/about' },
    { label: '문의하기', href: '/contact' },
  ];

  return (
    <footer className="bg-slate-900">
      {/* 메인 푸터 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 브랜드 */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/img/logo.png" 
                alt="오렌지팩토리" 
                width={70} 
                height={18}
                className="h-5 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              대한민국 1등 재고 솔루션 파트너.<br />
              30년간 쌓아온 경험과 네트워크를 바탕으로 기업의 재고 문제를 해결합니다.
            </p>
          </div>

          {/* 서비스 */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white">서비스</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 회사 */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white">회사</h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white">연락처</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#FF8C00] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">김경수 이사</p>
                  <a href="tel:010-4464-0345" className="text-slate-400 text-sm hover:text-white transition-colors">
                    010-4464-0345
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF8C00] flex-shrink-0" />
                <a href="mailto:orangefactory@kakao.com" className="text-slate-400 text-sm hover:text-white transition-colors">
                  orangefactory@kakao.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 바 */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">
              © {currentYear} 오렌지팩토리. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs">
              1985년부터 대한민국 재고 솔루션의 표준
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
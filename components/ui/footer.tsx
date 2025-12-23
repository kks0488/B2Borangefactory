import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

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
    <footer className="bg-slate-900 pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 브랜드 */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-black text-xl tracking-tight text-white">
                오렌지<span className="text-[#FF8C00]">팩토리</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              대한민국 1등 재고 솔루션 파트너. 30년간 쌓아온 경험과 네트워크를 바탕으로 
              기업의 재고 문제를 해결합니다.
            </p>
          </div>

          {/* 서비스 */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-[#FF8C00]">서비스</h3>
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
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-500">회사</h3>
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
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-500">연락처</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-[#FF8C00] mt-0.5" />
                <div>
                  <p className="text-white text-sm font-bold">김경수 이사</p>
                  <p className="text-slate-400 text-sm">010-4464-0345</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-[#FF8C00] mt-0.5" />
                <p className="text-slate-400 text-sm">orangefactory@kakao.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {currentYear} 오렌지팩토리. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            1985년부터 대한민국 재고 솔루션의 표준
          </p>
        </div>
      </div>
    </footer>
  );
}
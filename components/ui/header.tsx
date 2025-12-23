"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: '회사소개' },
    { href: '/services/inventory', label: '재고매매' },
    { href: '/services/finance', label: '동산담보' },
    { href: '/services/consignment', label: '위탁판매' },
    { href: '/services/production', label: '해외생산' },
    { href: '/services/sourcing', label: '상품소싱' },
  ];

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3" 
        : "bg-white py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* 모바일: 햄버거 버튼 (왼쪽) */}
          <button 
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* 로고 - 모바일: 중앙, 데스크탑: 왼쪽 */}
          <Link href="/" className="flex-shrink-0 lg:order-first">
            <Image 
              src="/img/logo.png" 
              alt="오렌지팩토리" 
              width={100} 
              height={25}
              className="h-6 w-auto"
              priority
            />
          </Link>

          {/* 데스크탑 네비게이션 - 중앙 */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-sm font-semibold text-slate-700 hover:text-[#FF8C00] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* 오른쪽 영역 */}
          <div className="flex items-center gap-3">
            {/* 모바일: 전화 아이콘만 */}
            <a href="tel:010-4464-0345" className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            
            {/* 데스크탑: 전화번호 + CTA 버튼 */}
            <a href="tel:010-4464-0345" className="hidden md:flex items-center gap-2 text-slate-600 hover:text-[#FF8C00] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold">010-4464-0345</span>
            </a>
            
            <Button
              size="sm"
              className="hidden sm:flex bg-[#FF8C00] hover:bg-[#E67E00] text-white rounded-lg font-bold px-4 h-9 text-sm"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-1">
                상담신청 <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-base font-semibold text-slate-800 hover:text-[#FF8C00] hover:bg-slate-50 transition-colors py-3 px-3 rounded-lg border-b border-slate-100 last:border-b-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <Button className="w-full h-12 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-bold rounded-lg" asChild>
                <Link href="/contact">무료 상담 신청</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
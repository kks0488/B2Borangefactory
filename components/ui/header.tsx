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
        ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-2" 
        : "bg-white py-3"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* 모바일: 햄버거 버튼 */}
          <button 
            className="lg:hidden p-2 -ml-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0">
            <Image 
              src="/img/logo.png" 
              alt="오렌지팩토리" 
              width={120} 
              height={30}
              className="h-auto w-44"
              priority
            />
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-sm font-medium text-slate-600 hover:text-[#FF8C00] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* 오른쪽: 전화 + CTA */}
          <div className="flex items-center gap-2">
            <a href="tel:010-4464-0345" className="p-2 text-slate-600 hover:text-[#FF8C00] transition-colors">
              <Phone className="w-4 h-4" />
            </a>
            
            <Button
              size="sm"
              className="hidden sm:flex bg-[#FF8C00] hover:bg-[#E67E00] text-white rounded-md font-semibold px-3 h-8 text-xs"
              asChild
            >
              <Link href="/contact">상담신청</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg">
          <div className="px-4 py-3">
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="block text-sm font-medium text-slate-700 hover:text-[#FF8C00] hover:bg-slate-50 py-2.5 px-3 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 pt-3 border-t border-slate-100">
              <Button className="w-full h-10 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-semibold text-sm rounded-lg" asChild>
                <Link href="/contact">무료 상담 신청</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
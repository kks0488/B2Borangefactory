"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
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
        ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-4" 
        : "bg-transparent py-6"
    )}>
      <div className="section-container flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-black text-xl tracking-tight text-slate-900">
              오렌지<span className="text-[#FF8C00]">팩토리</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-sm font-bold text-slate-600 hover:text-[#FF8C00] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs text-slate-500">전화문의</span>
            <span className="text-sm font-bold text-slate-900">010-4464-0345</span>
          </div>

          <div className="h-4 w-px bg-slate-200 hidden md:block" />
          
          <Button
            size="sm"
            className="hidden sm:flex cta-primary rounded-lg font-bold px-6 h-10"
            asChild
          >
            <Link href="/contact" className="flex items-center gap-2">
              무료 상담 <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>

          <button 
            className="lg:hidden p-1 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-8 shadow-xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-lg font-bold text-slate-900 hover:text-[#FF8C00] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 pt-8 border-t border-slate-100">
             <Button className="w-full h-14 rounded-lg cta-primary font-bold text-lg" asChild>
                <Link href="/contact">무료 상담 신청</Link>
             </Button>
          </div>
        </div>
      )}
    </header>
  );
}
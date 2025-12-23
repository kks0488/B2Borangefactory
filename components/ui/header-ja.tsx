"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function HeaderJa() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setIsLangOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { href: '/ja/about', label: '会社概要' },
    { href: '/ja/wholesale', label: '卸売り' },
    { href: '/ja/inventory', label: '在庫' },
    { href: '/ja/export', label: '輸出' },
    { href: '/ja/contact', label: 'お問い合わせ' },
  ];

  const languages = [
    { href: '/', label: 'English', flag: '🇺🇸' },
    { href: '/ko', label: '한국어', flag: '🇰🇷' },
    { href: '/ja', label: '日本語', flag: '🇯🇵' },
    { href: '/zh', label: '中文', flag: '🇨🇳' },
  ];

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-2" : "bg-white py-3"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <button className="lg:hidden p-2 -ml-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link href="/ja" className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0">
            <Image src="/img/logo.png" alt="Orange Factory" width={120} height={30} className="h-auto w-44" priority />
          </Link>

          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 hover:text-[#FF8C00] transition-colors whitespace-nowrap">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative" ref={langRef}>
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-1 p-2 text-slate-600 hover:text-[#FF8C00] transition-colors">
                <Globe className="w-4 h-4" />
                <ChevronDown className={cn("w-3 h-3 transition-transform", isLangOpen && "rotate-180")} />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-[120px] z-50">
                  {languages.map((lang) => (
                    <Link key={lang.href} href={lang.href} className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#FF8C00]" onClick={() => setIsLangOpen(false)}>
                      <span>{lang.flag}</span><span>{lang.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a href="tel:+82-10-4464-0345" className="p-2 text-slate-600 hover:text-[#FF8C00] transition-colors"><Phone className="w-4 h-4" /></a>
            <Button size="sm" className="hidden sm:flex bg-[#FF8C00] hover:bg-[#E67E00] text-white rounded-md font-semibold px-3 h-8 text-xs" asChild>
              <Link href="/ja/contact">お見積り</Link>
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg">
          <div className="px-4 py-3">
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm font-medium text-slate-700 hover:text-[#FF8C00] hover:bg-slate-50 py-2.5 px-3 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 pt-3 border-t border-slate-100">
              <p className="text-xs text-slate-500 mb-2 px-3">言語</p>
              <div className="grid grid-cols-2 gap-1">
                {languages.map((lang) => (<Link key={lang.href} href={lang.href} className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}><span>{lang.flag}</span><span>{lang.label}</span></Link>))}
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-100">
              <Button className="w-full h-10 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-semibold text-sm rounded-lg" asChild>
                <Link href="/ja/contact">お見積り依頼</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

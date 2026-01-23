"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

// P0: 상수를 컴포넌트 외부로 추출
const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/wholesale', label: 'Wholesale' },
  { href: '/inventory', label: 'Inventory' },
  { href: '/export', label: 'Export' },
  { href: '/contact', label: 'Contact' },
];

const LANGUAGES = [
  { href: '/', label: 'English', flag: '🇺🇸', locale: 'en' },
  { href: '/ko', label: '한국어', flag: '🇰🇷', locale: 'ko' },
  { href: '/ja', label: '日本語', flag: '🇯🇵', locale: 'ja' },
  { href: '/zh', label: '中文', flag: '🇨🇳', locale: 'zh' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  // Scroll event with requestAnimationFrame throttling (Performance Optimization)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    // passive: true for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside handler (separate effect for better organization)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // P2: useCallback으로 핸들러 메모이제이션
  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleLangToggle = useCallback(() => {
    setIsLangOpen(prev => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleLangClose = useCallback(() => {
    setIsLangOpen(false);
  }, []);

  // 언어 변경 시 쿠키 설정 후 페이지 이동
  const handleLangChange = useCallback((locale: string, href: string) => {
    document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;
    setIsLangOpen(false);
    setIsMobileMenuOpen(false);
    window.location.href = href;
  }, []);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-2" : "bg-white py-3"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <button
            className="lg:hidden p-2 -ml-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0">
            <Image src="/img/logo.png" alt="Orange Factory" width={120} height={30} className="h-auto w-44" priority />
          </Link>

          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 hover:text-[#FF8C00] transition-colors whitespace-nowrap">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-2">
            {/* Language Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={handleLangToggle}
                className="flex items-center gap-1 p-2 text-slate-600 hover:text-[#FF8C00] transition-colors"
              >
                <Globe className="w-4 h-4" />
                <ChevronDown className={cn("w-3 h-3 transition-transform", isLangOpen && "rotate-180")} />
              </button>
              {isLangOpen ? (
                <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-[120px] z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.href}
                      onClick={() => handleLangChange(lang.locale, lang.href)}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#FF8C00] w-full text-left"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
            <a href="tel:+82-10-4464-0345" className="p-2 text-slate-600 hover:text-[#FF8C00] transition-colors">
              <Phone className="w-4 h-4" />
            </a>
            <Button size="sm" className="hidden sm:flex bg-[#FF8C00] hover:bg-[#E67E00] text-white rounded-md font-semibold px-3 h-8 text-xs" asChild>
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg">
          <div className="px-4 py-3">
            <nav className="space-y-1">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm font-medium text-slate-700 hover:text-[#FF8C00] hover:bg-slate-50 py-2.5 px-3 rounded-lg transition-colors" onClick={handleMenuClose}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 pt-3 border-t border-slate-100">
              <p className="text-xs text-slate-500 mb-2 px-3">Language</p>
              <div className="grid grid-cols-2 gap-1">
                {LANGUAGES.map((lang) => (
                  <button key={lang.href} onClick={() => handleLangChange(lang.locale, lang.href)} className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg text-left">
                    <span>{lang.flag}</span><span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-100">
              <Button className="w-full h-10 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-semibold text-sm rounded-lg" asChild>
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

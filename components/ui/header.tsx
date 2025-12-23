"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight
} from 'lucide-react';
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
    { href: '/about', label: 'Company' },
    { href: '/services', label: 'Solutions' },
    { href: '/success', label: 'Success' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-4" 
        : "bg-transparent py-7"
    )}>
      <div className="section-container flex items-center justify-between">
        <div className="flex items-center gap-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-black text-2xl tracking-tighter text-brand-navy dark:text-white">
              ORANGE<span className="text-[#FF8C00]">FACTORY</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-xs font-black uppercase tracking-[0.2em] text-slate-600 hover:text-[#FF8C00] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 group cursor-pointer">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Direct Contact</span>
            <span className="text-sm font-bold text-brand-navy dark:text-zinc-200 group-hover:text-[#FF8C00] transition-colors">010-4464-0345</span>
          </div>

          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 hidden md:block" />
          
          <Button
            size="sm"
            className="hidden sm:flex rounded-lg bg-zinc-950 dark:bg-white dark:text-zinc-950 text-white font-bold px-6 h-10 transition-transform active:scale-95"
            asChild
          >
            <Link href="/contact" className="flex items-center gap-2">
              Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          


          <button 
            className="lg:hidden p-1 text-brand-navy dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-8 animate-reveal shadow-2xl">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-3xl font-black tracking-tighter text-brand-navy dark:text-white hover:text-[#FF8C00] transition-colors italic uppercase leading-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-12 pt-12 border-t border-zinc-100 dark:border-zinc-900">
             <Button className="w-full h-16 rounded-lg bg-[#FF8C00] font-black text-lg shadow-xl" asChild>
                <Link href="/contact">CONSULTATION START</Link>
             </Button>
          </div>
        </div>
      )}
    </header>
  );
}
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Wholesale', href: '/wholesale' },
  { label: 'Inventory', href: '/inventory' },
  { label: 'Export', href: '/export' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/img/logo.png" 
              alt="Orange Factory" 
              width={140} 
              height={35}
              className="h-5 md:h-6 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-[#FF8C00] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language & CTA */}
          <div className="flex items-center gap-3">
            <Link href="/ko" className="flex items-center gap-1 text-xs text-slate-500 hover:text-[#FF8C00]">
              <Globe className="w-3.5 h-3.5" />
              한국어
            </Link>
            <Button className="hidden sm:flex bg-[#FF8C00] hover:bg-[#E67E00] text-white h-8 px-4 text-sm rounded-md font-semibold" asChild>
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

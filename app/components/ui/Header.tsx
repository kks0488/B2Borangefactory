import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // 현재 경로와 비교하여 액티브 상태 확인
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  return (
    <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="font-bold text-xl text-zinc-900 dark:text-white hover:text-zinc-900 dark:hover:text-white"
            >
              오렌지팩토리
            </Link>
          </div>
          
          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-[#FF8C00]' // 액티브 상태만 액센트 컬러 적용
                  : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              회사 소개
            </Link>
            <Link 
              href="/services" 
              className={`text-sm font-medium transition-colors ${
                isActive('/services') || pathname?.startsWith('/services/') 
                  ? 'text-[#FF8C00]' // 액티브 상태만 액센트 컬러 적용
                  : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              서비스
            </Link>
            <Link 
              href="/success" 
              className={`text-sm font-medium transition-colors ${
                isActive('/success') 
                  ? 'text-[#FF8C00]' // 액티브 상태만 액센트 컬러 적용
                  : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              성공 사례
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-[#FF8C00]' // 액티브 상태만 액센트 컬러 적용
                  : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              문의하기
            </Link>
          </nav>
          
          {/* 연락처 버튼 - 주요 CTA이므로 액센트 컬러 사용 */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:010-4464-0345" 
              className="flex items-center text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
            >
              <Phone className="h-4 w-4 mr-2" />
              010-4464-0345
            </a>
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">
                상담 신청
              </Link>
            </Button>
          </div>
          
          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-zinc-700 dark:text-zinc-300 p-2"
              aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/about" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-[#FF8C00]' // 액티브 상태만 액센트 컬러 적용
                    : 'text-zinc-700 dark:text-zinc-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                회사 소개
              </Link>
              <Link 
                href="/services" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/services') || pathname?.startsWith('/services/') 
                    ? 'text-[#FF8C00]' // 액티브 상태만 액센트 컬러 적용
                    : 'text-zinc-700 dark:text-zinc-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                서비스
              </Link>
              <Link 
                href="/success" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/success') 
                    ? 'text-[#FF8C00]' // 액티브 상태만 액센트 컬러 적용
                    : 'text-zinc-700 dark:text-zinc-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                성공 사례
              </Link>
              <Link 
                href="/contact" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-[#FF8C00]' // 액티브 상태만 액센트 컬러 적용
                    : 'text-zinc-700 dark:text-zinc-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                문의하기
              </Link>
              
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <a 
                  href="tel:010-4464-0345" 
                  className="flex items-center text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  010-4464-0345
                </a>
              </div>
              
              <Button variant="primary" className="w-full mt-2" asChild>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  상담 신청
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 
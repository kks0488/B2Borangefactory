import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>
      
      {/* 푸터 위에 일관된 간격을 위한 래퍼 */}
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
} 
'use client';

import React, { useState, useCallback } from 'react';
import { MessageCircle, X, Phone, MessageSquare } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

// P1: 상수를 컴포넌트 외부로 추출
const CHANNELS = [
  {
    name: 'KakaoTalk (KR)',
    iconType: 'kakao' as const,
    color: 'bg-[#FEE500] hover:bg-[#EED200]',
    href: 'https://pf.kakao.com/_xxxx'
  },
  {
    name: 'WhatsApp (Global)',
    iconType: 'whatsapp' as const,
    color: 'bg-[#25D366] hover:bg-[#128C7E]',
    href: 'https://wa.me/821044640345'
  }
];

export function FloatingInquiryWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // P2: useCallback으로 핸들러 메모이제이션
  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Menu Options - P1: 삼항 연산자 사용 */}
      {isOpen ? (
        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {CHANNELS.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95",
                channel.color
              )}
            >
              <span className="text-sm font-bold">{channel.name}</span>
              {channel.iconType === 'kakao' ? (
                <MessageSquare className="w-5 h-5 text-yellow-900" />
              ) : (
                <Phone className="w-5 h-5 text-white" />
              )}
            </a>
          ))}
        </div>
      ) : null}

      {/* Main Toggle Button */}
      <Button
        onClick={handleToggle}
        className={cn(
          "w-14 h-14 rounded-full shadow-xl transition-all duration-300 p-0",
          isOpen ? "bg-slate-800 hover:bg-slate-900 rotate-90" : "bg-[#FF8C00] hover:bg-[#E67E00]"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </Button>
    </div>
  );
}

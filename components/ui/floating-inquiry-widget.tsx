'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Phone, MessageSquare } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

export function FloatingInquiryWidget() {
    const [isOpen, setIsOpen] = useState(false);

    const channels = [
        {
            name: 'KakaoTalk (KR)',
            icon: <MessageSquare className="w-5 h-5 text-yellow-900" />,
            color: 'bg-[#FEE500] hover:bg-[#EED200]',
            href: 'https://pf.kakao.com/_xxxx' // Placeholder for actual ID
        },
        {
            name: 'WhatsApp (Global)',
            icon: <Phone className="w-5 h-5 text-white" />,
            color: 'bg-[#25D366] hover:bg-[#128C7E]',
            href: 'https://wa.me/821044640345'
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Menu Options */}
            {isOpen && (
                <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    {channels.map((channel) => (
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
                            {channel.icon}
                        </a>
                    ))}
                </div>
            )}

            {/* Main Toggle Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-14 h-14 rounded-full shadow-xl transition-all duration-300 p-0",
                    isOpen ? "bg-slate-800 hover:bg-slate-900 rotate-90" : "bg-[#FF8C00] hover:bg-[#E67E00]"
                )}
            >
                {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-7 h-7 text-white" />}
            </Button>
        </div>
    );
}

'use client';

import dynamic from 'next/dynamic';

// Dynamic imports with ssr: false must be in Client Components (Next.js 15)
export const FloatingInquiryWidget = dynamic(
  () => import('@/components/ui/floating-inquiry-widget').then(mod => mod.FloatingInquiryWidget),
  { ssr: false }
);

export const GoogleAnalytics = dynamic(
  () => import('@/components/GoogleAnalytics'),
  { ssr: false }
);

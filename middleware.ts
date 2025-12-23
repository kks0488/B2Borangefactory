import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // 이미 특정 언어 경로에 있으면 리다이렉트 안함
  if (pathname.startsWith('/ko') || pathname.startsWith('/en') || 
      pathname.startsWith('/_next') || pathname.startsWith('/api') ||
      pathname.startsWith('/img') || pathname.includes('.')) {
    return NextResponse.next();
  }

  // 쿠키에 언어 설정이 있으면 그것을 사용
  const localeCookie = request.cookies.get('locale')?.value;
  if (localeCookie) {
    if (localeCookie === 'ko') {
      return NextResponse.rewrite(new URL(`/ko${pathname}`, request.url));
    }
    return NextResponse.next(); // 영어가 기본
  }

  // Accept-Language 헤더 확인
  const acceptLanguage = request.headers.get('accept-language') || '';
  const isKorean = acceptLanguage.toLowerCase().includes('ko');

  // 한국어면 /ko 경로로 rewrite (URL은 그대로 유지)
  if (isKorean) {
    return NextResponse.rewrite(new URL(`/ko${pathname}`, request.url));
  }

  // 기본값: 영어 (현재 경로 그대로)
  return NextResponse.next();
}

export const config = {
  matcher: [
    // 모든 경로에 적용하되 일부 제외
    '/((?!_next/static|_next/image|favicon.ico|img|api).*)',
  ],
};

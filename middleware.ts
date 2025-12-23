import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // 정적 파일, API, 이미지 등은 처리하지 않음
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') ||
      pathname.startsWith('/img') || pathname.includes('.')) {
    return NextResponse.next();
  }

  // 쿠키에 언어 설정이 있으면 그것을 우선 사용
  const localeCookie = request.cookies.get('locale')?.value;
  
  // /ko 경로로 직접 접근하면 한국어 쿠키 설정
  if (pathname.startsWith('/ko')) {
    const response = NextResponse.next();
    if (localeCookie !== 'ko') {
      response.cookies.set('locale', 'ko', { maxAge: 60 * 60 * 24 * 365 }); // 1년
    }
    return response;
  }

  // 쿠키가 있으면 자동 감지 무시
  if (localeCookie) {
    if (localeCookie === 'ko') {
      // 한국어 쿠키가 있지만 / 경로에 있으면 영문 쿠키로 변경 (사용자가 영문 선택)
      const response = NextResponse.next();
      response.cookies.set('locale', 'en', { maxAge: 60 * 60 * 24 * 365 });
      return response;
    }
    // 영어 쿠키면 그대로 진행
    return NextResponse.next();
  }

  // 쿠키 없으면 Accept-Language 헤더로 자동 감지 (첫 방문자)
  const acceptLanguage = request.headers.get('accept-language') || '';
  const isKorean = acceptLanguage.toLowerCase().includes('ko');

  if (isKorean) {
    // 한국어 사용자면 /ko로 리다이렉트
    const url = request.nextUrl.clone();
    url.pathname = `/ko${pathname === '/' ? '' : pathname}`;
    const response = NextResponse.redirect(url);
    response.cookies.set('locale', 'ko', { maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  // 기본값: 영어
  const response = NextResponse.next();
  response.cookies.set('locale', 'en', { maxAge: 60 * 60 * 24 * 365 });
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|img|api).*)',
  ],
};

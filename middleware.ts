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
  
  // 특정 언어 경로로 직접 접근하면 해당 언어 쿠키 설정
  if (pathname.startsWith('/ko')) {
    const response = NextResponse.next();
    if (localeCookie !== 'ko') {
      response.cookies.set('locale', 'ko', { maxAge: 60 * 60 * 24 * 365 });
    }
    return response;
  }
  if (pathname.startsWith('/ja')) {
    const response = NextResponse.next();
    if (localeCookie !== 'ja') {
      response.cookies.set('locale', 'ja', { maxAge: 60 * 60 * 24 * 365 });
    }
    return response;
  }
  if (pathname.startsWith('/zh')) {
    const response = NextResponse.next();
    if (localeCookie !== 'zh') {
      response.cookies.set('locale', 'zh', { maxAge: 60 * 60 * 24 * 365 });
    }
    return response;
  }

  // 쿠키가 있으면 자동 감지 무시 (사용자가 선택한 언어 유지)
  if (localeCookie) {
    // 영문이 아닌 쿠키인데 / 경로에 있으면 영문 쿠키로 변경 (사용자가 영문 선택)
    if (localeCookie !== 'en') {
      const response = NextResponse.next();
      response.cookies.set('locale', 'en', { maxAge: 60 * 60 * 24 * 365 });
      return response;
    }
    return NextResponse.next();
  }

  // 쿠키 없으면 Accept-Language 헤더로 자동 감지 (첫 방문자)
  const acceptLanguage = request.headers.get('accept-language') || '';
  const langLower = acceptLanguage.toLowerCase();

  // 한국어 우선 체크
  if (langLower.includes('ko')) {
    const url = request.nextUrl.clone();
    url.pathname = `/ko${pathname === '/' ? '' : pathname}`;
    const response = NextResponse.redirect(url);
    response.cookies.set('locale', 'ko', { maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  // 일본어 체크
  if (langLower.includes('ja')) {
    const url = request.nextUrl.clone();
    url.pathname = `/ja${pathname === '/' ? '' : pathname}`;
    const response = NextResponse.redirect(url);
    response.cookies.set('locale', 'ja', { maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  // 중국어 체크 (zh-CN, zh-TW, zh 등)
  if (langLower.includes('zh')) {
    const url = request.nextUrl.clone();
    url.pathname = `/zh${pathname === '/' ? '' : pathname}`;
    const response = NextResponse.redirect(url);
    response.cookies.set('locale', 'zh', { maxAge: 60 * 60 * 24 * 365 });
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

import Link from 'next/link';
import { PhoneIcon, MailIcon } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-900 text-zinc-400">
      {/* 일관된 상단 간격을 위한 스페이서 */}
      <div className="h-24 md:h-32" /> {/* 푸터 위 일관된 간격 유지 */}
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-white font-bold text-xl">오렌지팩토리</span>
            </div>
            <p className="text-zinc-400 text-sm mb-4">
              패션 업계의 재고 처리 솔루션을 선도해온 기업으로, 30년 이상의 전문성과 노하우를 바탕으로 고객에게 최상의 서비스를 제공합니다.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-zinc-400">
                <PhoneIcon className="h-4 w-4 mr-2" />
                <a href="tel:010-4464-0345" className="text-zinc-400 hover:text-white transition-colors">
                  010-4464-0345
                </a>
              </div>
              <div className="flex items-center text-zinc-400">
                <MailIcon className="h-4 w-4 mr-2" />
                <a href="mailto:orangefactory@kakao.com" className="text-zinc-400 hover:text-white transition-colors">
                  orangefactory@kakao.com
                </a>
              </div>
            </div>
          </div>
          
          {/* 서비스 링크 */}
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/inventory" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  재고 매입 및 브랜드 양도양수
                </Link>
              </li>
              <li>
                <Link href="/services/finance" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  동산 담보 자금
                </Link>
              </li>
              <li>
                <Link href="/services/consignment" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  오프라인 위탁 판매
                </Link>
              </li>
              <li>
                <Link href="/services/production" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  해외 의류 생산
                </Link>
              </li>
              <li>
                <Link href="/services/sourcing" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  상품 소싱 및 도매
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 회사 메뉴 */}
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4">회사</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="/success" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  성공 사례
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 뉴스레터 구독 - 액센트 컬러를 최소화하고 호버 상태에만 적용 */}
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4">뉴스레터</h3>
            <p className="text-zinc-400 text-sm mb-4">
              패션 산업의 최신 트렌드와 오렌지팩토리의 소식을 받아보세요.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="이메일 주소"
                className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 text-sm rounded-l-md focus:outline-none focus:ring-1 focus:ring-zinc-600 w-full"
              />
              <button
                type="submit"
                className="bg-zinc-700 text-white px-4 py-2 text-sm rounded-r-md hover:bg-[#FF8C00] transition-colors"
              >
                구독
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-500 text-sm">
              &copy; {currentYear} 오렌지팩토리. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-zinc-500 hover:text-white text-sm transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-zinc-500 hover:text-white text-sm transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
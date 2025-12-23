import { Metadata } from 'next';
import { Phone, Mail, ShieldCheck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '문의하기 | 오렌지팩토리',
  description: '재고 자산 관리 및 자금 조달에 관한 전문 컨설팅을 신청하세요.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">문의하기</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            비즈니스 상담 신청하기
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            재고 솔루션의 표준, 오렌지팩토리가 귀사의 문제를 즉각적으로 진단해 드립니다. 
            모든 문의 사항은 철저한 기밀이 유지됩니다.
          </p>
        </div>
      </section>

      {/* 연락처 및 폼 */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* 왼쪽: 연락처 정보 */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">연락처 정보</h2>
                <div className="space-y-6">
                  <a href="tel:010-4464-0345" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-slate-50 transition-colors -mx-4">
                    <div className="w-12 h-12 rounded-lg bg-[#FF8C00]/10 flex items-center justify-center group-hover:bg-[#FF8C00] transition-colors">
                      <Phone className="w-5 h-5 text-[#FF8C00] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">전화문의</p>
                      <p className="text-xl font-bold text-slate-900">010-4464-0345</p>
                      <p className="text-sm text-slate-600 mt-1">김경수 영업이사</p>
                    </div>
                  </a>

                  <a href="mailto:orangefactory@kakao.com" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-slate-50 transition-colors -mx-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-slate-900 transition-colors">
                      <Mail className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">이메일문의</p>
                      <p className="text-lg font-bold text-slate-900">orangefactory@kakao.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#FF8C00]" />
                  <span className="text-sm font-bold text-slate-900">운영시간</span>
                </div>
                <p className="text-slate-600 text-sm">월-금: 09:00 - 18:00</p>
                <p className="text-slate-600 text-sm">토-일: 휴무 (긴급 문의 가능)</p>
              </div>

              <div className="p-6 bg-slate-900 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-4 h-4 text-[#FF8C00]" />
                  <span className="text-sm font-bold text-white">보안 보장</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  귀사의 브랜드 정보와 재고 리스트는 엄격한 보안 프로토콜에 따라 보호되며, 
                  가치 평가 목적 이외에 일절 사용되지 않습니다.
                </p>
              </div>
            </div>

            {/* 오른쪽: 상담 폼 */}
            <div className="p-6 md:p-10 bg-slate-50 rounded-2xl">
              <h2 className="text-xl font-bold text-slate-900 mb-6">상담 신청</h2>
              <form action="https://formspree.io/f/xykglvry" method="POST" className="space-y-6">
                <input type="hidden" name="_language" value="ko" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">회사명</label>
                    <input 
                      type="text" 
                      name="company"
                      placeholder="회사명 또는 브랜드명" 
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">담당자명</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="담당자 성함" 
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">연락처</label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="휴대폰 번호" 
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">관심 서비스</label>
                    <select name="interest" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent transition-all">
                      <option value="">서비스를 선택하세요</option>
                      <option value="재고매매 및 브랜드 양도">재고매매 및 브랜드 양도</option>
                      <option value="동산 담보자금">동산 담보자금</option>
                      <option value="오프라인 위탁판매">오프라인 위탁판매</option>
                      <option value="의류 해외 생산">의류 해외 생산</option>
                      <option value="상품 소싱 및 도매">상품 소싱 및 도매</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">문의 내용</label>
                  <textarea 
                    name="message"
                    placeholder="상담 받고 싶은 내용을 자유롭게 적어주세요" 
                    rows={4} 
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full h-14 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-bold text-lg rounded-lg"
                >
                  상담 신청하기
                </Button>
                
                <p className="text-xs text-slate-500 text-center">
                  상담 신청 시 개인정보 처리에 동의하는 것으로 간주됩니다.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

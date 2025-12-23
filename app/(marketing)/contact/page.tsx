import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Globe2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact | Strategic Support Center',
  description: '재고 자산 관리 및 자금 조달에 관한 전문 컨설팅을 신청하세요.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-zinc-950">
      
      {/* Header Space for consistent top padding */}
      <div className="h-32" />

      <section className="py-24 md:py-40">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            
            {/* Left: Contact Info & Philosophy */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#FF8C00]"></span>
                  <span className="text-[10px] font-black tracking-[0.3em] text-[#FF8C00] uppercase italic">Get in Touch</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-brand-navy dark:text-white tracking-tighter italic uppercase leading-none">
                  START THE <br />
                  <span className="text-zinc-300 italic">CONVERSATION.</span>
                </h1>
                <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
                  재고 솔루션의 표준, 오렌지팩토리가 귀사의 유동성 리스크를 즉각적으로 진단해 드립니다. 
                  모든 문의 사항은 철저한 기밀이 유지됩니다.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-10">
                <div className="flex items-start gap-6 group">
                   <div className="w-12 h-12 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center group-hover:bg-[#FF8C00] group-hover:border-[#FF8C00] transition-colors">
                      <Phone className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-1">Direct Line</p>
                      <p className="text-2xl font-black italic tracking-tight text-brand-navy dark:text-white">010-4464-0345</p>
                   </div>
                </div>

                <div className="flex items-start gap-6 group">
                   <div className="w-12 h-12 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center group-hover:bg-[#FF8C00] group-hover:border-[#FF8C00] transition-colors">
                      <Mail className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-1">Email Inquiry</p>
                      <p className="text-xl font-bold italic tracking-tight text-brand-navy dark:text-white">contact@orangefactory.kr</p>
                   </div>
                </div>

                <div className="flex items-start gap-6 group">
                   <div className="w-12 h-12 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center group-hover:bg-zinc-950 transition-colors">
                      <MapPin className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-1">Global HQ</p>
                      <p className="text-sm font-medium leading-relaxed text-slate-600">서울시 강남구 테헤란로 123, 오렌지빌딩 8층</p>
                   </div>
                </div>
              </div>

              <div className="pt-10 border-t border-zinc-100 dark:border-zinc-900">
                 <div className="flex items-center gap-2 text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em] mb-4">
                    <ShieldCheck className="w-4 h-4" /> Confidentiality Guaranteed
                 </div>
                 <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    귀사의 브랜드 정보와 재고 리스트는 엄격한 보안 프로토콜에 따라 보호되며, 
                    가치 평가 목적 이외에 일절 사용되지 않습니다.
                 </p>
              </div>
            </div>

            {/* Right: Modern Form */}
            <div className="lg:col-span-7">
              <div className="p-10 md:p-16 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-elevated transition-all hover:bg-white dark:hover:bg-zinc-950">
                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Company Unit</label>
                      <input type="text" placeholder="회사명 / 브랜드명" className="w-full bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 py-3 focus:outline-none focus:border-[#FF8C00] transition-colors font-bold text-lg dark:text-white" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Responsible Agent</label>
                      <input type="text" placeholder="담당자 성함 / 직함" className="w-full bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 py-3 focus:outline-none focus:border-[#FF8C00] transition-colors font-bold text-lg dark:text-white" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Operational Phone</label>
                      <input type="tel" placeholder="연락처 (인증 불필요)" className="w-full bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 py-3 focus:outline-none focus:border-[#FF8C00] transition-colors font-bold text-lg dark:text-white" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Solution Context</label>
                      <select className="w-full bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 py-3 focus:outline-none focus:border-[#FF8C00] transition-colors font-bold text-lg dark:text-slate-500 cursor-pointer appearance-none">
                        <option>관심 서비스를 선택하세요</option>
                        <option>재고 매입 및 브랜드 매각</option>
                        <option>동산 담보 자금 상담</option>
                        <option>위탁 판매 및 판로 개척</option>
                        <option>생산 인프라 및 소싱 제휴</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Inquiry Brief</label>
                    <textarea placeholder="상담 받고 싶은 품목, 규모, 시급성 등을 자유롭게 남겨주세요." rows={5} className="w-full bg-transparent border-b-2 border-zinc-200 dark:border-zinc-800 py-3 focus:outline-none focus:border-[#FF8C00] transition-colors font-bold text-lg dark:text-white resize-none" />
                  </div>

                  <div className="pt-8 flex flex-col items-center">
                    <Button className="w-full h-20 rounded-lg bg-zinc-950 dark:bg-white dark:text-zinc-950 text-white font-black text-xl italic tracking-tight uppercase group shadow-2xl transition-all hover:bg-[#FF8C00] dark:hover:bg-[#FF8C00] dark:hover:text-white">
                      Request Strategic Consultation <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
                    </Button>
                    <p className="mt-8 text-[11px] text-slate-500 font-medium italic underline underline-offset-4 cursor-pointer hover:text-zinc-600 transition-colors">
                      By submitting this, you agree to our processing of your business data.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Bottom Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 overflow-hidden relative border-y border-zinc-100 dark:border-zinc-800">
         <div className="section-container flex items-center justify-between gap-12">
            <div className="flex gap-16 items-center">
               <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-zinc-300" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Global Coverage</span>
               </div>
               <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-zinc-300" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Legally Verified</span>
               </div>
            </div>
            <p className="text-[10px] font-black text-zinc-300 tracking-tighter uppercase italic text-right">
               Orange Factory | Liquidity Intelligence Center
            </p>
         </div>
      </section>
    </div>
  );
}

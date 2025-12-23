import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Package, 
  Landmark,
  Store, 
  Factory, 
  ShoppingBag, 
  Phone,
  Mail,
  CheckCircle2
} from 'lucide-react';

export default function LandingPage() {
  const services = [
    { icon: <Package className="w-5 h-5" />, title: "재고매매", desc: "과잉 재고 현금화", href: "/services/inventory" },
    { icon: <Landmark className="w-5 h-5" />, title: "동산담보", desc: "재고 담보 자금", href: "/services/finance" },
    { icon: <Store className="w-5 h-5" />, title: "위탁판매", desc: "브랜드 보호 판매", href: "/services/consignment" },
    { icon: <Factory className="w-5 h-5" />, title: "해외생산", desc: "원가 절감 생산", href: "/services/production" },
    { icon: <ShoppingBag className="w-5 h-5" />, title: "상품소싱", desc: "이월상품 연결", href: "/services/sourcing" },
  ];

  const stats = [
    { value: "30년", label: "업력" },
    { value: "1,200+", label: "파트너사" },
    { value: "당일", label: "현금화" },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* HERO */}
      <section className="pt-20 pb-10 md:pt-28 md:pb-16">
        <div className="section-container">
          <p className="text-sm font-semibold text-[#FF8C00] mb-2">Since 1985</p>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            대한민국 <span className="text-[#FF8C00]">재고처리 NO.1</span>
          </h1>
          <p className="text-base text-slate-600 mb-6 max-w-lg">
            30년간 브랜드 재고처리 업계에서 독보적인 위치. 오렌지팩토리와 함께 비즈니스를 정리하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-11 px-5 rounded-lg font-semibold" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                무료 상담 <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" className="h-11 px-5 border-slate-300 rounded-lg font-semibold" asChild>
              <Link href="/about">회사소개</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 서비스 */}
      <section className="py-10 md:py-16 bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-6 text-center">서비스</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {services.map((s, i) => (
              <Link 
                key={i} 
                href={s.href}
                className="group flex flex-col items-center text-center p-4 bg-white border border-slate-200 rounded-xl hover:border-[#FF8C00] hover:shadow-md transition-all"
              >
                <div className="p-2.5 bg-orange-50 rounded-lg text-[#FF8C00] group-hover:bg-[#FF8C00] group-hover:text-white transition-colors mb-3">
                  {s.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{s.title}</h3>
                <p className="text-xs text-slate-500">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 신뢰 지표 + CTA */}
      <section className="py-10 md:py-16 bg-slate-900">
        <div className="section-container text-center">
          <div className="flex justify-center gap-8 md:gap-16 mb-8">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-2xl md:text-3xl font-black text-white">{s.value}</p>
                <p className="text-xs text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">비즈니스 문의</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <a href="tel:010-4464-0345" className="flex items-center gap-2 text-white text-sm">
              <Phone className="w-4 h-4 text-[#FF8C00]" /> 010-4464-0345
            </a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-white text-sm">
              <Mail className="w-4 h-4 text-[#FF8C00]" /> orangefactory@kakao.com
            </a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-11 px-6 rounded-lg font-semibold" asChild>
            <Link href="/contact">상담 신청</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

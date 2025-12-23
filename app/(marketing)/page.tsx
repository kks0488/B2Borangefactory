import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Package, 
  Store, 
  Factory, 
  ShoppingBag, 
  Phone,
  Mail,
  CheckCircle2
} from 'lucide-react';

export default function LandingPage() {
  const services = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "재고 및 브랜드 양도양수",
      desc: "고객사의 과잉 재고 및 현금유동성 문제 해결",
      href: "/services/inventory"
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: "오프라인 위탁판매",
      desc: "브랜드 가치를 보호하면서 재고 처리",
      href: "/services/consignment"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "잔여 원단 해외 생산",
      desc: "유명 브랜드 원단으로 원가 절감 생산",
      href: "/services/production"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "상품 소싱 대행",
      desc: "고객사 이미지에 맞는 상품 연결",
      href: "/services/sourcing"
    },
  ];

  const reasons = [
    { title: "30년 전문성", desc: "과잉 재고 매입에 특화된 전문 매입팀" },
    { title: "유연한 대응", desc: "1인기업부터 대기업까지 모두 지원" },
    { title: "당일 현금화", desc: "연중무휴 신속한 현금 구매" },
    { title: "원스톱 솔루션", desc: "상담부터 입금까지 한번에" },
    { title: "신뢰 기반", desc: "최상의 계약과 성과 보장" },
    { title: "네트워크", desc: "해외생산, 수출 등 다양한 채널" },
  ];

  const testimonials = [
    { brand: "A 브랜드", quote: "홈쇼핑 스케쥴을 맞추지 못해 남은 대량의 상품을 쉽고 편하게 정리할 수 있었습니다." },
    { brand: "B 브랜드", quote: "오프라인 채널을 통해 브랜드 이미지를 보호하면서도 매출을 올릴 수 있었습니다." },
    { brand: "C 브랜드", quote: "명품 브랜드 원단으로 수준 높은 상품을 저렴하게 생산할 수 있었습니다." },
    { brand: "D 플랫폼", quote: "이월상품을 매입해 고객들에게 저렴하게 판매할 수 있게 되었습니다." },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* HERO */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#FF8C00] mb-3">Since 1985</p>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
              대한민국<br />
              <span className="text-[#FF8C00]">재고처리 NO.1</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
              30년간 브랜드 재고처리 업계에서 독보적인 위치를 차지해온 오렌지팩토리와 함께 비즈니스를 정리하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-6 rounded-lg font-semibold" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  무료 상담 신청 <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" className="h-12 px-6 border-slate-300 rounded-lg font-semibold" asChild>
                <Link href="/services">서비스 알아보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 text-center">주요 서비스</h2>
          <p className="text-slate-600 text-center mb-8 md:mb-12">30년 경험을 바탕으로 고객사의 고민을 해결합니다</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <Link 
                key={i} 
                href={service.href}
                className="group flex items-start gap-4 p-4 md:p-6 bg-white border border-slate-200 rounded-xl hover:border-[#FF8C00] hover:shadow-md transition-all"
              >
                <div className="p-2.5 bg-orange-50 rounded-lg text-[#FF8C00] group-hover:bg-[#FF8C00] group-hover:text-white transition-colors flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-[#FF8C00] transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 선택 이유 */}
      <section className="py-12 md:py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 text-center">
            오렌지팩토리를 선택하는 이유
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {reasons.map((item, i) => (
              <div key={i} className="p-4 md:p-5 border border-slate-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8C00] flex-shrink-0" />
                  <h3 className="text-sm md:text-base font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-xs md:text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 고객 후기 */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 text-center">고객 후기</h2>
          <p className="text-slate-600 text-center mb-8">다양한 고객사들이 오렌지팩토리를 통해 문제를 해결했습니다</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.map((item, i) => (
              <div key={i} className="p-4 md:p-6 bg-white border border-slate-200 rounded-xl">
                <p className="text-[#FF8C00] font-bold text-sm mb-2">{item.brand}</p>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-slate-900">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">비즈니스 협업 문의</h2>
          <p className="text-slate-400 mb-8 text-sm md:text-base">
            언제든지 연락 주시면 과잉 재고를 적절한 가격에 구매합니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:010-4464-0345" className="flex items-center gap-2 text-white hover:text-[#FF8C00] transition-colors">
              <Phone className="w-4 h-4 text-[#FF8C00]" />
              <span className="font-semibold text-sm">010-4464-0345</span>
            </a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-white hover:text-[#FF8C00] transition-colors">
              <Mail className="w-4 h-4 text-[#FF8C00]" />
              <span className="font-semibold text-sm">orangefactory@kakao.com</span>
            </a>
          </div>
          
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-12 px-8 rounded-lg font-semibold" asChild>
            <Link href="/contact">무료 상담 신청하기</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

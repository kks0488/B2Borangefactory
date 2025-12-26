import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Package,
  Landmark,
  Store,
  Factory,
  ShoppingBag,
  Globe,
  Phone,
  Mail,
  CheckCircle2
} from 'lucide-react';

export default function LandingPage() {
  const services = [
    {
      icon: <Package className="w-7 h-7" />,
      title: "재고 및 브랜드 양도양수",
      desc: "과잉 재고 및 현금유동성 문제를 해결합니다. 브랜드, 쇼핑몰까지 한번에 정리 가능.",
      href: "/ko/services/inventory"
    },
    {
      icon: <Landmark className="w-7 h-7" />,
      title: "동산 담보자금",
      desc: "재고를 담보로 긴급 자금을 확보하세요. 홈쇼핑 스케줄 변동 등 급한 상황에 대응.",
      href: "/ko/services/finance"
    },
    {
      icon: <Store className="w-7 h-7" />,
      title: "오프라인 위탁판매",
      desc: "온라인 가격 노출 없이 브랜드 가치를 보호하면서 재고를 처리합니다.",
      href: "/ko/services/consignment"
    },
    {
      icon: <Factory className="w-7 h-7" />,
      title: "잔여 원단 해외 생산",
      desc: "유명 브랜드 잔여원단을 활용해 원가를 절감하는 해외 생산 솔루션.",
      href: "/ko/services/production"
    },
    {
      icon: <ShoppingBag className="w-7 h-7" />,
      title: "상품 소싱 및 도매",
      desc: "이월상품, 브랜드 의류 상품을 찾아 고객사에 연결해드립니다.",
      href: "/ko/services/sourcing"
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "해외수출",
      desc: "K-Fashion을 세계로. 글로벌 바이어와 한국 업체를 연결하고 수출을 지원합니다.",
      href: "/ko/services/export"
    },
  ];

  const reasons = [
    { title: "40년 전문성", desc: "과잉 재고 매입에 특화된 전문 매입팀" },
    { title: "유연한 대응", desc: "1인기업부터 대기업까지 모두 지원" },
    { title: "당일 현금화", desc: "연중무휴 신속한 현금 구매" },
    { title: "원스톱 솔루션", desc: "상담부터 입금까지 한번에" },
  ];

  const testimonials = [
    { brand: "패션 브랜드 A사", quote: "홈쇼핑 스케쥴 차질로 남은 대량의 상품을 당일 현금화로 정리할 수 있었습니다. 신속한 대응에 만족합니다." },
    { brand: "온라인 쇼핑몰 B사", quote: "오프라인 채널을 통해 브랜드 이미지 훼손 없이 이월 재고를 처리했습니다. 온라인 가격 충돌 걱정이 없어졌어요." },
    { brand: "의류 제조업체 C사", quote: "잔여 원단 해외 생산 서비스로 소량 생산 비용을 크게 절감했습니다. 명품 원단을 저렴하게 활용할 수 있었어요." },
    { brand: "수출 무역회사 D사", quote: "해외 바이어 연결부터 물류까지 원스톱으로 지원받았습니다. K-Fashion 수출의 좋은 파트너입니다." },
  ];

  return (
    <div className="flex flex-col w-full bg-white">

      {/* HERO - 다른 서비스 페이지와 동일한 스타일 */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#FF8C00]"></span>
            <span className="text-sm font-bold tracking-widest text-[#FF8C00]">Since 1985</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            대한민국 재고처리 NO.1
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
            40년간 쌓아온 경험과 네트워크로 기업의 재고 문제를 근본적으로 해결합니다.
            당일 현금화부터 브랜드 양도까지, 한번에.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-14 px-8 rounded-lg font-semibold text-base" asChild>
              <Link href="/ko/contact" className="flex items-center gap-2">
                무료 상담 신청 <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" className="h-14 px-8 border-slate-300 rounded-lg font-semibold text-base" asChild>
              <Link href="/ko/about">회사소개</Link>
            </Button>
          </div>

          {/* 신뢰 지표 */}
          <div className="flex items-center gap-6 pt-10 border-t border-slate-200">
            <div>
              <p className="text-3xl font-black text-[#FF8C00]">40+</p>
              <p className="text-sm text-slate-500">년 경력</p>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div>
              <p className="text-3xl font-black text-[#FF8C00]">1,200+</p>
              <p className="text-sm text-slate-500">협력 파트너사</p>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div>
              <p className="text-3xl font-black text-[#FF8C00]">24h</p>
              <p className="text-sm text-slate-500">당일 현금화</p>
            </div>
          </div>
        </div>
      </section>

      {/* 실시간 매물 현황 (Inventory Showcase) */}
      <section className="py-16 md:py-20 bg-slate-900 text-white overflow-hidden">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-3 text-white">실시간 입고 현황</h2>
              <p className="text-slate-400">오렌지팩토리 물류센터에 방금 도착한 따끈따끈한 매물들입니다.</p>
            </div>
            <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white border-0" asChild>
              <Link href="/ko/services/inventory">전체 매물 보기</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "국내 유명 골프웨어", brand: "A-Brand", qty: "3,500pcs", status: "매입완료", date: "방금 전" },
              { title: "프리미엄 구스 다운", brand: "B-Brand", qty: "1,200pcs", status: "검품중", date: "30분 전" },
              { title: "S/S 시즌 린넨 셔츠", brand: "C-Brand", qty: "8,000pcs", status: "수출대기", date: "2시간 전" },
            ].map((item, i) => (
              <div key={i} className="group p-6 bg-slate-800 border border-slate-700 rounded-2xl hover:border-[#FF8C00] transition-all">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2 py-1 bg-[#FF8C00]/20 text-[#FF8C00] text-[10px] font-bold rounded uppercase tracking-wider">{item.status}</span>
                  <span className="text-xs text-slate-500">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-[#FF8C00] transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{item.brand} | {item.qty}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <span className="text-xs font-medium text-slate-500 italic">Wholesale Only</span>
                  <Link href="/ko/contact" className="text-xs font-bold text-[#FF8C00] flex items-center gap-1">상세문의 <ArrowRight className="w-3 h-3" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 협력 브랜드 (Partner Brands) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <p className="text-center text-sm font-bold text-slate-400 tracking-widest uppercase mb-12">Trusted by Global Brands</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 grayscale opacity-50">
            {["NIKE", "ADIDAS", "POLO", "GUCCI", "ZARA", "UNIQLO"].map((brand) => (
              <div key={brand} className="flex items-center justify-center font-black text-2xl tracking-tighter text-slate-400">
                {brand}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-12">* 위 브랜드는 업무 협력 및 매입 실적을 보유한 브랜드들입니다.</p>
        </div>
      </section>

      {/* 서비스 */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 text-center">주요 서비스</h2>
          <p className="text-slate-600 text-center mb-10">40년 경험을 바탕으로 고객사의 고민을 해결합니다</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-[#FF8C00] hover:shadow-md transition-all"
              >
                <div className="p-2.5 bg-orange-50 rounded-lg text-[#FF8C00] group-hover:bg-[#FF8C00] group-hover:text-white transition-colors flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#FF8C00] transition-colors mb-1">
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
      <section className="py-16 md:py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 text-center">
            오렌지팩토리를 선택하는 이유
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {reasons.map((item, i) => (
              <div key={i} className="p-5 border border-slate-200 rounded-xl text-center">
                <CheckCircle2 className="w-6 h-6 text-[#FF8C00] mx-auto mb-3" />
                <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 고객 후기 */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 text-center">성공 사례</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.map((item, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-xl">
                <p className="text-[#FF8C00] font-bold text-sm mb-3">{item.brand}</p>
                <p className="text-slate-700 text-sm leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 전문 서비스 영역 (SEO) */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="section-container">
          <h2 className="text-lg font-bold text-slate-900 mb-6">주요 서비스 키워드</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "의류땡처리", "재고매입", "의류재고매입", "재고정리", "이월상품",
              "덤핑매입", "재고처분", "재고의류", "땡처리의류", "의류덤핑",
              "의류도매", "배송대행B2B", "위탁판매", "브랜드유통", "도매매입",
              "쇼핑몰폐업", "폐업재고처리", "희망리턴패키지", "불용자산매각", "점포정리",
              "신발매입", "화장품땡처리", "식품덤핑", "아동복재고", "명품의류매입"
            ].map((keyword, i) => (
              <span key={i} className="px-3 py-1 bg-slate-50 text-slate-500 text-xs rounded-full border border-slate-200">
                #{keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">비즈니스 문의</h2>
          <p className="text-slate-600 mb-8">재고 문제, 오렌지팩토리가 해결해드립니다</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:010-4464-0345" className="flex items-center gap-2 text-slate-900 font-semibold">
              <Phone className="w-5 h-5 text-[#FF8C00]" /> 010-4464-0345
            </a>
            <a href="mailto:orangefactory@kakao.com" className="flex items-center gap-2 text-slate-900 font-semibold">
              <Mail className="w-5 h-5 text-[#FF8C00]" /> orangefactory@kakao.com
            </a>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#E67E00] text-white h-14 px-10 rounded-lg font-semibold text-base" asChild>
            <Link href="/ko/contact">무료 상담 신청</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

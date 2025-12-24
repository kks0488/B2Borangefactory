// 실제 셀러 커뮤니티 스타일 시드 데이터 생성
// 실행: npx ts-node scripts/generate-seed-data.ts > data/listings.json

interface Listing {
  id: string;
  titleKo: string;          // 한국어 제목
  titleEn: string;          // 영문 제목
  category: string;
  status: '진행중' | '완료' | '예약중' | '계약중';
  publishedAt: string;
  views: number;
  comments: number;
  hasNewComment: boolean;
  isPrivate: boolean;       // 비밀글 여부
}

// 실제 카테고리와 패턴들
const templates = {
  // 여성의류 쇼핑몰 양도
  womenClothing: [
    { ko: "여성의류 쇼핑몰 양도합니다", en: "Women's clothing shopping mall for sale" },
    { ko: "2030 여성의류 에이블리 마켓 양도", en: "20-30s women's clothing Ably market for sale" },
    { ko: "지그재그 {찜}만 여성의류 급매", en: "Zigzag {찜} followers women's clothing urgent sale" },
    { ko: "동대문 여성의류 1인운영 가능 양도", en: "Dongdaemun women's clothing 1-person operation for sale" },
    { ko: "여성의류 스마트스토어 양도 (찜수 {찜})", en: "Women's clothing Smart Store for sale ({찜} followers)" },
    { ko: "에이블리 마켓찜 {찜}만 여성의류 양도", en: "Ably market {찜}K followers women's clothing for sale" },
    { ko: "{년}년차 여성의류 쇼핑몰 매각합니다", en: "{년}-year-old women's clothing mall for sale" },
    { ko: "순익 {순익}% 여성의류 쇼핑몰 양도", en: "{순익}% net profit women's clothing mall for sale" },
    { ko: "유니크 캐주얼 여성의류 {가격}만원 급처분", en: "Unique casual women's clothing {가격}K KRW urgent sale" },
    { ko: "빅사이즈 여성의류 에이블리 양도합니다", en: "Plus size women's clothing Ably for sale" },
  ],
  // 남성의류
  menClothing: [
    { ko: "남성의류 쇼핑몰 양도합니다 (현재운영중)", en: "Men's clothing mall for sale (currently operating)" },
    { ko: "{년}년차 남성의류 쇼핑몰 매매합니다", en: "{년}-year men's clothing mall for sale" },
    { ko: "미니멀 남성의류 스마트스토어 양도", en: "Minimal men's clothing Smart Store for sale" },
    { ko: "무신사 입점 남성브랜드 양도합니다", en: "Musinsa registered men's brand for sale" },
  ],
  // 브랜드 양도
  brandTransfer: [
    { ko: "무신사,29CM 입점 브랜드 매매", en: "Musinsa, 29CM registered brand for sale" },
    { ko: "무신사 입점 브랜드 양도합니다", en: "Musinsa registered brand for sale" },
    { ko: "W컨셉·29CM·하고 등 입점 브랜드 양도", en: "W Concept, 29CM registered brand for sale" },
    { ko: "{년}년 운영 브랜드 전체 양도", en: "{년}-year operated brand full transfer" },
    { ko: "여성 언더웨어 브랜드 양도 (입점 다수)", en: "Women's underwear brand for sale (multiple platforms)" },
  ],
  // 재고 매각
  inventory: [
    { ko: "F/W 이월재고 {수량}장 급처분", en: "F/W carryover inventory {수량} pcs urgent sale" },
    { ko: "S/S 여성의류 재고 {수량}장 정리", en: "S/S women's clothing inventory {수량} pcs clearance" },
    { ko: "브랜드 이월제품 {수량}장 현금매입 원합니다", en: "Brand carryover {수량} pcs cash purchase wanted" },
    { ko: "시즌오프 재고 일괄 정리합니다", en: "Season-off inventory bulk clearance" },
    { ko: "홈쇼핑 방송분 잔량 {수량}장", en: "Home shopping broadcast remaining {수량} pcs" },
  ],
  // 악세서리/잡화
  accessories: [
    { ko: "휴대폰케이스 쇼핑몰 양도합니다", en: "Phone case shopping mall for sale" },
    { ko: "악세서리 스마트스토어 양도 (월순익 {순익}만)", en: "Accessories Smart Store for sale (monthly {순익}K profit)" },
    { ko: "실버925 악세사리 쇼핑몰 양도", en: "Silver 925 accessories mall for sale" },
  ],
  // 기타 카테고리
  others: [
    { ko: "애견의류 브랜드 양도합니다", en: "Pet clothing brand for sale" },
    { ko: "아동복 스마트스토어 판매합니다", en: "Children's clothing Smart Store for sale" },
    { ko: "신발 쇼핑몰 매매합니다 ({년}년 운영)", en: "Shoe shopping mall for sale ({년} years operated)" },
    { ko: "명품 편집샵 매매합니다", en: "Luxury select shop for sale" },
    { ko: "구매대행 스마트스토어 양도", en: "Purchasing agency Smart Store for sale" },
  ],
  // 양수 희망 (구매 원함)
  wanted: [
    { ko: "여성의류 쇼핑몰 양수 원합니다", en: "Looking to acquire women's clothing mall" },
    { ko: "운영중인 스토어 인수 희망합니다", en: "Looking to acquire operating store" },
    { ko: "브랜드 재고 매입합니다", en: "Looking to purchase brand inventory" },
    { ko: "쇼핑몰 양수 희망 (여성의류)", en: "Looking for women's clothing mall" },
  ],
};

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateDate(year: number, month: number, day: number): string {
  return `${year}.${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}`;
}

function fillTemplate(template: { ko: string; en: string }): { ko: string; en: string } {
  const replacements: Record<string, string> = {
    '{찜}': String(randomChoice([1.2, 1.5, 2.3, 3.5, 4.4, 5.6, 7.8, 10, 12, 15, 17, 20, 30])),
    '{년}': String(randomChoice([2, 3, 4, 5, 6, 7, 8, 9, 10, 15])),
    '{순익}': String(randomChoice([15, 20, 25, 30, 35, 40, 45, 50])),
    '{가격}': String(randomChoice([100, 150, 200, 250, 300, 350, 400, 500, 700, 1000])),
    '{수량}': String(randomChoice([500, 800, 1000, 1500, 2000, 2500, 3000, 4000, 5000, 7000, 10000])).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  };
  
  let ko = template.ko;
  let en = template.en;
  
  for (const [key, value] of Object.entries(replacements)) {
    ko = ko.replace(key, value);
    en = en.replace(key, value);
  }
  
  return { ko, en };
}

function generateListings(count: number): Listing[] {
  const listings: Listing[] = [];
  const allTemplates = [
    ...templates.womenClothing.map(t => ({ template: t, category: '여성의류' })),
    ...templates.womenClothing.map(t => ({ template: t, category: '여성의류' })), // 가중치
    ...templates.menClothing.map(t => ({ template: t, category: '남성의류' })),
    ...templates.brandTransfer.map(t => ({ template: t, category: '브랜드양도' })),
    ...templates.inventory.map(t => ({ template: t, category: '재고매각' })),
    ...templates.accessories.map(t => ({ template: t, category: '악세서리' })),
    ...templates.others.map(t => ({ template: t, category: '기타' })),
    ...templates.wanted.map(t => ({ template: t, category: '양수희망' })),
  ];
  
  // 2021년 1월부터 2024년 12월까지 날짜 분포
  for (let i = 0; i < count; i++) {
    const year = randomInt(2021, 2024);
    const month = randomInt(1, 12);
    const day = randomInt(1, 28);
    
    const item = randomChoice(allTemplates);
    const titles = fillTemplate(item.template);
    
    // 최근 글일수록 진행중, 오래된 글일수록 완료
    const isRecent = year === 2024 && month >= 10;
    const isVeryRecent = year === 2024 && month === 12;
    
    let status: '진행중' | '완료' | '예약중' | '계약중';
    if (isVeryRecent) {
      status = randomChoice(['진행중', '진행중', '진행중', '예약중', '계약중']);
    } else if (isRecent) {
      status = randomChoice(['진행중', '완료', '예약중', '계약중']);
    } else {
      status = randomChoice(['완료', '완료', '완료', '완료', '예약중']);
    }
    
    // 조회수: 오래된 글일수록 높음
    const baseViews = (2025 - year) * 50 + randomInt(30, 200);
    const views = status === '완료' ? baseViews + randomInt(50, 300) : baseViews;
    
    // 댓글: 0~20개, 완료된 건 더 많음
    const comments = status === '완료' ? randomInt(1, 15) : randomInt(0, 8);
    
    listings.push({
      id: `listing-${100000 + i}`,
      titleKo: titles.ko,
      titleEn: titles.en,
      category: item.category,
      status,
      publishedAt: generateDate(year, month, day),
      views,
      comments,
      hasNewComment: isVeryRecent && comments > 0 && Math.random() > 0.5,
      isPrivate: Math.random() > 0.3, // 70%가 비밀글
    });
  }
  
  // 날짜 역순 정렬 (최신순)
  return listings.sort((a, b) => {
    const dateA = new Date(a.publishedAt.replace(/\./g, '-'));
    const dateB = new Date(b.publishedAt.replace(/\./g, '-'));
    return dateB.getTime() - dateA.getTime();
  });
}

// 500개 생성
const seedData = generateListings(500);
console.log(JSON.stringify(seedData, null, 2));

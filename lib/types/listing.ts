export interface Listing {
  id: string;
  titleKo: string;          // 한국어 제목
  titleEn: string;          // 영문 제목
  category: string;         // 여성의류, 남성의류, 브랜드양도, 재고매각, 악세서리, 기타, 양수희망
  status: '진행중' | '완료' | '예약중' | '계약중';
  publishedAt: string;      // YYYY.MM.DD
  views: number;            // 조회수
  comments: number;         // 댓글수 (비밀 댓글)
  hasNewComment: boolean;   // 새 댓글 표시
  isPrivate: boolean;       // 비밀글 여부 (제목만 공개)
}

// 게시판 표시용 상태 라벨
export const statusLabelsKo: Record<string, string> = {
  '진행중': '진행중',
  '완료': '거래완료',
  '예약중': '예약중',
  '계약중': '계약중',
};

export const statusLabelsEn: Record<string, string> = {
  '진행중': 'Available',
  '완료': 'Completed',
  '예약중': 'Reserved',
  '계약중': 'In Contract',
};

export const categoryLabelsKo: Record<string, string> = {
  '여성의류': '여성의류',
  '남성의류': '남성의류',
  '브랜드양도': '브랜드양도',
  '재고매각': '재고매각',
  '악세서리': '악세서리',
  '기타': '기타',
  '양수희망': '양수희망',
};

export const categoryLabelsEn: Record<string, string> = {
  '여성의류': 'Women\'s Clothing',
  '남성의류': 'Men\'s Clothing',
  '브랜드양도': 'Brand Transfer',
  '재고매각': 'Inventory Sale',
  '악세서리': 'Accessories',
  '기타': 'Others',
  '양수희망': 'Wanted',
};

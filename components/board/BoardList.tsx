'use client';

import { useState, useMemo, memo, useCallback } from 'react';
import { Listing, statusLabelsKo } from '@/lib/types/listing';

// P0: 상수를 컴포넌트 외부로 추출 (매 렌더링마다 재생성 방지)
const STATUS_STYLES: Record<string, string> = {
  '진행중': 'bg-green-100 text-green-700',
  '완료': 'bg-slate-100 text-slate-500',
  '예약중': 'bg-orange-100 text-orange-700',
  '계약중': 'bg-blue-100 text-blue-700',
};

const STATUS_LABELS_EN: Record<string, string> = {
  '진행중': 'Available',
  '완료': 'Completed',
  '예약중': 'Reserved',
  '계약중': 'In Contract',
};

interface ListingRowProps {
  item: Listing;
  lang: 'ko' | 'en';
  statusLabels: Record<string, string>;
}

// P0: memo로 리스트 아이템 최적화 (props 변경 시에만 리렌더링)
const ListingRow = memo(function ListingRow({ item, lang, statusLabels }: ListingRowProps) {
  const statusStyle = STATUS_STYLES[item.status] || 'bg-slate-100 text-slate-600';

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 px-4 py-3 hover:bg-slate-50 transition-colors">
      {/* 상태 */}
      <div className="md:col-span-1 flex md:justify-center items-center">
        <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${statusStyle}`}>
          {statusLabels[item.status]}
        </span>
      </div>

      {/* 제목 */}
      <div className="md:col-span-7 flex items-center gap-2">
        {item.isPrivate ? <span className="text-xs text-slate-400">[비밀]</span> : null}
        <span className={`text-sm ${item.status === '완료' ? 'text-slate-400' : 'text-slate-800'}`}>
          {lang === 'ko' ? item.titleKo : item.titleEn}
        </span>
        {item.comments > 0 ? (
          <span className="text-xs text-[#FF8C00] font-medium">[{item.comments}]</span>
        ) : null}
        {item.hasNewComment ? (
          <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full"></span>
        ) : null}
      </div>

      {/* 날짜 */}
      <div className="md:col-span-2 text-xs text-slate-500 md:text-center">
        {item.publishedAt}
      </div>

      {/* 조회수 */}
      <div className="hidden md:block md:col-span-1 text-xs text-slate-500 text-center">
        {item.views.toLocaleString()}
      </div>

      {/* 댓글수 */}
      <div className="hidden md:block md:col-span-1 text-xs text-slate-500 text-center">
        {item.comments}
      </div>
    </div>
  );
});

interface BoardListProps {
  listings: Listing[];
  lang?: 'ko' | 'en';
}

export function BoardList({ listings, lang = 'ko' }: BoardListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // P0: useMemo로 계산 결과 캐싱
  const { totalPages, currentListings } = useMemo(() => {
    const total = Math.ceil(listings.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const current = listings.slice(startIndex, startIndex + itemsPerPage);
    return { totalPages: total, currentListings: current };
  }, [listings, currentPage, itemsPerPage]);

  // P0: 상태 레이블 메모이제이션
  const statusLabels = useMemo(() =>
    lang === 'ko' ? statusLabelsKo : STATUS_LABELS_EN,
    [lang]
  );

  // P2: useCallback으로 핸들러 메모이제이션
  const handlePrevPage = useCallback(() => {
    setCurrentPage(p => Math.max(1, p - 1));
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage(p => Math.min(totalPages, p + 1));
  }, [totalPages]);

  const handlePageClick = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return (
    <div className="w-full">
      {/* 게시판 헤더 */}
      <div className="hidden md:grid grid-cols-12 gap-2 px-4 py-3 bg-slate-50 border-y border-slate-200 text-xs font-semibold text-slate-600">
        <div className="col-span-1 text-center">상태</div>
        <div className="col-span-7">{lang === 'ko' ? '제목' : 'Title'}</div>
        <div className="col-span-2 text-center">{lang === 'ko' ? '날짜' : 'Date'}</div>
        <div className="col-span-1 text-center">{lang === 'ko' ? '조회' : 'Views'}</div>
        <div className="col-span-1 text-center">{lang === 'ko' ? '댓글' : 'Comments'}</div>
      </div>

      {/* 리스트 - memo 컴포넌트 사용 */}
      <div className="divide-y divide-slate-100">
        {currentListings.map((item) => (
          <ListingRow
            key={item.id}
            item={item}
            lang={lang}
            statusLabels={statusLabels}
          />
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center items-center gap-2 py-6 border-t border-slate-200">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-3 py-1.5 text-sm border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          이전
        </button>

        <div className="flex gap-1">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const page = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
            if (page > totalPages) return null;
            return (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-3 py-1.5 text-sm rounded ${
                  currentPage === page
                    ? 'bg-[#FF8C00] text-white'
                    : 'border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1.5 text-sm border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          다음
        </button>
      </div>

      {/* 통계 */}
      <div className="text-center text-xs text-slate-400 pb-4">
        {lang === 'ko'
          ? `총 ${listings.length.toLocaleString()}건의 거래 기록`
          : `Total ${listings.length.toLocaleString()} listings`
        }
      </div>
    </div>
  );
}

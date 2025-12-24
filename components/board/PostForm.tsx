'use client';

import { useState } from 'react';
import { createListing } from '@/app/actions/listings';

interface PostFormProps {
  lang?: 'ko' | 'en';
  onSuccess?: () => void;
}

const categories = [
  { value: '여성의류', labelKo: '여성의류', labelEn: "Women's Clothing" },
  { value: '남성의류', labelKo: '남성의류', labelEn: "Men's Clothing" },
  { value: '브랜드양도', labelKo: '브랜드양도', labelEn: 'Brand Transfer' },
  { value: '재고매각', labelKo: '재고매각', labelEn: 'Inventory Sale' },
  { value: '악세서리', labelKo: '악세서리/잡화', labelEn: 'Accessories' },
  { value: '기타', labelKo: '기타', labelEn: 'Others' },
  { value: '양수희망', labelKo: '양수희망 (구매원함)', labelEn: 'Wanted (Looking to Buy)' },
];

export function PostForm({ lang = 'ko', onSuccess }: PostFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const isKo = lang === 'ko';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    const result = await createListing({
      titleKo: formData.get('titleKo') as string,
      titleEn: formData.get('titleEn') as string,
      category: formData.get('category') as string,
      contactName: formData.get('contactName') as string,
      contactPhone: formData.get('contactPhone') as string,
      contactEmail: formData.get('contactEmail') as string || undefined,
      content: formData.get('content') as string || undefined,
      isPrivate: true, // 항상 비밀글로 등록
    });

    setIsSubmitting(false);

    if (result.success) {
      setSuccess(true);
      onSuccess?.();
    } else {
      setError(result.error || (isKo ? '등록에 실패했습니다.' : 'Failed to submit.'));
    }
  };

  if (success) {
    return (
      <div className="text-center py-12">
        <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {isKo ? '등록이 완료되었습니다!' : 'Successfully Submitted!'}
        </h3>
        <p className="text-slate-600 mb-6">
          {isKo 
            ? '담당자가 확인 후 연락드리겠습니다.'
            : 'Our team will contact you shortly.'}
        </p>
        <a
          href={isKo ? '/ko/board' : '/board'}
          className="inline-block bg-[#FF8C00] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#E67E00] transition-colors"
        >
          {isKo ? '목록으로' : 'Back to List'}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* 제목 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            {isKo ? '제목 (한국어)' : 'Title (Korean)'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="titleKo"
            required
            placeholder={isKo ? '예: 여성의류 에이블리 쇼핑몰 양도합니다' : 'e.g. Women clothing Ably mall for sale'}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#FF8C00]/20 focus:border-[#FF8C00] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            {isKo ? '제목 (영문)' : 'Title (English)'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="titleEn"
            required
            placeholder="e.g. Women's clothing Ably mall for sale"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#FF8C00]/20 focus:border-[#FF8C00] outline-none"
          />
        </div>
      </div>

      {/* 카테고리 */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          {isKo ? '카테고리' : 'Category'} <span className="text-red-500">*</span>
        </label>
        <select
          name="category"
          required
          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#FF8C00]/20 focus:border-[#FF8C00] outline-none"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {isKo ? cat.labelKo : cat.labelEn}
            </option>
          ))}
        </select>
      </div>

      {/* 상세 내용 */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          {isKo ? '상세 내용' : 'Details'}
        </label>
        <textarea
          name="content"
          rows={4}
          placeholder={isKo 
            ? '재고 수량, 브랜드 정보, 희망 가격 등을 자유롭게 작성해 주세요.'
            : 'Please provide details such as quantity, brand info, expected price, etc.'}
          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#FF8C00]/20 focus:border-[#FF8C00] outline-none resize-none"
        />
      </div>

      {/* 연락처 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            {isKo ? '담당자명' : 'Contact Name'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="contactName"
            required
            placeholder={isKo ? '홍길동' : 'John Doe'}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#FF8C00]/20 focus:border-[#FF8C00] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            {isKo ? '연락처' : 'Phone'} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="contactPhone"
            required
            placeholder="010-0000-0000"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#FF8C00]/20 focus:border-[#FF8C00] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            {isKo ? '이메일' : 'Email'}
          </label>
          <input
            type="email"
            name="contactEmail"
            placeholder="email@example.com"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#FF8C00]/20 focus:border-[#FF8C00] outline-none"
          />
        </div>
      </div>

      {/* 비밀글 안내 */}
      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
        <p className="text-sm text-slate-600">
          {isKo 
            ? '📌 모든 글은 비밀글로 등록됩니다. 제목만 공개되며, 상세 내용과 연락처는 담당자만 확인할 수 있습니다.'
            : '📌 All posts are private by default. Only the title is visible; details and contact info are only accessible to our team.'}
        </p>
      </div>

      {/* 제출 버튼 */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#FF8C00] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#E67E00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting 
            ? (isKo ? '등록 중...' : 'Submitting...') 
            : (isKo ? '매물 등록하기' : 'Submit Listing')}
        </button>
      </div>
    </form>
  );
}

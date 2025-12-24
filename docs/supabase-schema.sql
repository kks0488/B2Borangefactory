-- listings 테이블 생성
-- Supabase SQL Editor에서 실행하세요

CREATE TABLE IF NOT EXISTS listings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title_ko TEXT NOT NULL,
  title_en TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT '여성의류',
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'completed', 'reserved', 'contracted')),
  views INTEGER NOT NULL DEFAULT 0,
  comments INTEGER NOT NULL DEFAULT 0,
  is_private BOOLEAN NOT NULL DEFAULT true,
  contact_name TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  contact_email TEXT,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS listings_status_idx ON listings(status);
CREATE INDEX IF NOT EXISTS listings_category_idx ON listings(category);
CREATE INDEX IF NOT EXISTS listings_created_at_idx ON listings(created_at DESC);

-- RLS (Row Level Security) 활성화
ALTER TABLE listings ENABLE ROW LEVEL SECURITY;

-- 읽기: 모든 사용자 허용
CREATE POLICY "Allow public read" ON listings
  FOR SELECT USING (true);

-- 쓰기: 모든 사용자 허용 (익명 글 작성)
CREATE POLICY "Allow public insert" ON listings
  FOR INSERT WITH CHECK (true);

-- updated_at 자동 업데이트 트리거
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_listings_updated_at
  BEFORE UPDATE ON listings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 환경변수가 없으면 더미 클라이언트 생성 (에러 방지)
const isConfigured = supabaseUrl && supabaseAnonKey && 
                     supabaseUrl !== 'your_supabase_url' &&
                     !supabaseUrl.includes('undefined');

export const supabase = isConfigured 
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

export const isSupabaseConfigured = isConfigured;

export type Database = {
  public: {
    Tables: {
      listings: {
        Row: {
          id: string;
          title_ko: string;
          title_en: string;
          category: string;
          status: 'pending' | 'active' | 'completed' | 'reserved' | 'contracted';
          views: number;
          comments: number;
          is_private: boolean;
          contact_name: string;
          contact_phone: string;
          contact_email: string | null;
          content: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<
          Database['public']['Tables']['listings']['Row'],
          'id' | 'views' | 'comments' | 'created_at' | 'updated_at'
        >;
        Update: Partial<Database['public']['Tables']['listings']['Insert']>;
      };
    };
  };
};

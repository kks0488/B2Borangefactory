import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      listings: {
        Row: {
          id: string;
          title_ko: string;
          title_en: string;
          category: string;
          status:
            | 'pending'
            | 'active'
            | 'completed'
            | 'reserved'
            | 'contracted';
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

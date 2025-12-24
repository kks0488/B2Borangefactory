'use server';

import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

interface CreateListingData {
  titleKo: string;
  titleEn: string;
  category: string;
  contactName: string;
  contactPhone: string;
  contactEmail?: string;
  content?: string;
  isPrivate?: boolean;
}

export async function createListing(data: CreateListingData) {
  // Supabase 설정 확인
  if (!isSupabaseConfigured || !supabase) {
    console.error('Supabase is not configured. Check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
    return { 
      success: false, 
      error: 'Database connection is not configured. Please contact the administrator.' 
    };
  }

  try {
    const { error } = await supabase.from('listings').insert({
      title_ko: data.titleKo,
      title_en: data.titleEn,
      category: data.category,
      contact_name: data.contactName,
      contact_phone: data.contactPhone,
      contact_email: data.contactEmail || null,
      content: data.content || null,
      is_private: data.isPrivate ?? true, // 디폴트 비밀글
      status: 'pending', // 대기중 상태로 시작
    });

    if (error) {
      console.error('Error creating listing:', error);
      return { success: false, error: error.message };
    }

    revalidatePath('/ko/board');
    revalidatePath('/board');
    
    return { success: true };
  } catch (err) {
    console.error('Unexpected error creating listing:', err);
    return { success: false, error: 'An unexpected error occurred. Please try again.' };
  }
}

export async function getListings() {
  if (!isSupabaseConfigured || !supabase) {
    console.error('Supabase is not configured');
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('listings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching listings:', error);
      return [];
    }

    return data;
  } catch (err) {
    console.error('Unexpected error fetching listings:', err);
    return [];
  }
}

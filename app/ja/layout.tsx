import '@/app/styles/globals.css';
import { HeaderJa } from '@/components/ui/header-ja';
import { FooterJa } from '@/components/ui/footer-ja';

export const metadata = {
  title: 'Orange Factory | 韓国ファッション卸売り＆輸出',
  description: '韓国ファッションの卸売りパートナー。40年の経験でK-Fashionをお届けします。',
};

export default function JapaneseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeaderJa />
      <main className="flex-1">{children}</main>
      <FooterJa />
    </div>
  );
}

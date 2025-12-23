import '@/app/styles/globals.css';
import { HeaderZh } from '@/components/ui/header-zh';
import { FooterZh } from '@/components/ui/footer-zh';

export const metadata = {
  title: 'Orange Factory | 韩国时尚批发与出口',
  description: '您值得信赖的韩国时尚批发合作伙伴。40年K-Fashion分销经验。',
};

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeaderZh />
      <main className="flex-1">{children}</main>
      <FooterZh />
    </div>
  );
}

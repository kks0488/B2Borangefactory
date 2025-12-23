import '@/app/styles/globals.css';
import { Header } from '@/components/ui/header-en';
import { Footer } from '@/components/ui/footer-en';

export const metadata = {
  title: 'Orange Factory | Korean Fashion Wholesale & Export',
  description: 'Your trusted partner for Korean fashion wholesale sourcing. 40 years of experience in K-Fashion distribution.',
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

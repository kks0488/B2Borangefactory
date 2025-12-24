import { Metadata } from 'next';
import { Header } from '@/components/ui/header-en';
import { Footer } from '@/components/ui/footer-en';
import { PostForm } from '@/components/board/PostForm';

export const metadata: Metadata = {
  title: 'Post a Listing',
  description: 'Post your fashion brand inventory, shopping mall, or brand for sale.',
};

export default function PostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-12 border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
              Post a Listing
            </h1>
            <p className="text-slate-600">
              Post your fashion brand inventory, shopping mall transfer,<br />
              or brand acquisition listing.
            </p>
          </div>
        </section>
        
        {/* Form */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <PostForm lang="en" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { Metadata } from 'next';
import { Header } from '@/components/ui/header-en';
import { Footer } from '@/components/ui/footer-en';
import { BoardList } from '@/components/board/BoardList';
import listings from '@/data/listings.json';
import { Listing } from '@/lib/types/listing';

export const metadata: Metadata = {
  title: 'Inventory & Brand Listings',
  description: 'Browse fashion brand inventory, shopping mall transfers, and brand acquisitions from Korean sellers.',
};

export default function BoardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-12 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
              Inventory & Brand Listings
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Browse fashion brand inventory, shopping mall transfers, and brand acquisitions.
              <br />
              Private listings require consultation to view details.
            </p>
          </div>
        </section>
        
        {/* Stats */}
        <section className="py-8 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="text-2xl font-bold text-[#FF8C00]">
                  {(listings as Listing[]).filter(l => l.status === '완료').length.toLocaleString()}
                </p>
                <p className="text-sm text-slate-500">Completed</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-green-600">
                  {(listings as Listing[]).filter(l => l.status === '진행중').length}
                </p>
                <p className="text-sm text-slate-500">Available</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-blue-600">
                  {(listings as Listing[]).filter(l => l.status === '계약중' || l.status === '예약중').length}
                </p>
                <p className="text-sm text-slate-500">Reserved</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-slate-700">4+ Years</p>
                <p className="text-sm text-slate-500">Track Record</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Board */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4">
            <BoardList listings={listings as Listing[]} lang="en" />
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-12 bg-slate-50 border-t border-slate-100">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Have Inventory to Sell?
            </h2>
            <p className="text-slate-600 mb-6">
              Post your fashion brand inventory, shopping mall, or brand for sale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/board/post"
                className="inline-block bg-[#FF8C00] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#E67E00] transition-colors"
              >
                Post a Listing
              </a>
              <a
                href="/contact"
                className="inline-block bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

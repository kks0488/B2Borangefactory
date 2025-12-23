import { Metadata } from 'next';
import { Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = { title: 'お問い合わせ | Orange Factory', description: '卸売りのお問い合わせはこちら。' };

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6"><span className="h-px w-12 bg-[#FF8C00]"></span><span className="text-sm font-bold tracking-widest text-[#FF8C00]">お問い合わせ</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">お問い合わせ</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">韓国ファッションの仕入れをご検討ですか？お気軽にお問い合わせください。</p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">連絡先情報</h2>
                <div className="space-y-6">
                  <a href="tel:+82-10-4464-0345" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white transition-colors -mx-4">
                    <div className="w-12 h-12 rounded-lg bg-[#FF8C00]/10 flex items-center justify-center group-hover:bg-[#FF8C00] transition-colors"><Phone className="w-5 h-5 text-[#FF8C00] group-hover:text-white" /></div>
                    <div><p className="text-xs text-slate-500 mb-1">電話（WhatsApp対応）</p><p className="text-xl font-bold text-slate-900">+82-10-4464-0345</p><p className="text-sm text-slate-600 mt-1">担当：キム</p></div>
                  </a>
                  <a href="mailto:orangefactory@kakao.com" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white transition-colors -mx-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-slate-900 transition-colors"><Mail className="w-5 h-5 text-slate-600 group-hover:text-white" /></div>
                    <div><p className="text-xs text-slate-500 mb-1">メール</p><p className="text-lg font-bold text-slate-900">orangefactory@kakao.com</p></div>
                  </a>
                </div>
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-3"><Clock className="w-4 h-4 text-[#FF8C00]" /><span className="text-sm font-bold text-slate-900">営業時間（韓国時間）</span></div>
                <p className="text-slate-600 text-sm">月〜金: 09:00 - 18:00</p>
              </div>
              <div className="p-6 bg-slate-900 rounded-xl">
                <div className="flex items-center gap-2 mb-3"><ShieldCheck className="w-4 h-4 text-[#FF8C00]" /><span className="text-sm font-bold text-white">機密保持</span></div>
                <p className="text-slate-400 text-sm">すべてのお問い合わせは厳格に機密扱いされます。</p>
              </div>
            </div>
            <div className="p-6 md:p-10 bg-white rounded-2xl border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6">お問い合わせフォーム</h2>
              <form action="https://formspree.io/f/xykglvry" method="POST" className="space-y-6">
                <input type="hidden" name="_language" value="ja" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-semibold text-slate-700 mb-2">会社名</label><input type="text" name="company" placeholder="会社名" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00]" /></div>
                  <div><label className="block text-sm font-semibold text-slate-700 mb-2">お名前</label><input type="text" name="name" placeholder="お名前" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00]" /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-semibold text-slate-700 mb-2">メールアドレス</label><input type="email" name="email" placeholder="example@email.com" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00]" /></div>
                  <div><label className="block text-sm font-semibold text-slate-700 mb-2">国</label><input type="text" name="country" placeholder="日本" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00]" /></div>
                </div>
                <div><label className="block text-sm font-semibold text-slate-700 mb-2">ご関心のサービス</label>
                  <select name="interest" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00]">
                    <option value="">お選びください</option><option value="卸売り仕入れ">卸売り仕入れ</option><option value="ブランド在庫">ブランド在庫</option><option value="輸出サービス">輸出サービス</option><option value="パートナーシップ">パートナーシップ</option>
                  </select>
                </div>
                <div><label className="block text-sm font-semibold text-slate-700 mb-2">メッセージ</label><textarea name="message" placeholder="ご要望をお聞かせください" rows={4} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00] resize-none" /></div>
                <Button type="submit" className="w-full h-14 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-bold text-lg rounded-lg">送信する</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

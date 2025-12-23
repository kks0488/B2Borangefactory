import { Metadata } from 'next';
import { Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = { title: '联系我们 | Orange Factory', description: '批发咨询请联系我们。' };

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6"><span className="h-px w-12 bg-[#FF8C00]"></span><span className="text-sm font-bold tracking-widest text-[#FF8C00]">联系我们</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">联系我们</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">准备采购韩国时尚？请联系我们获取批发咨询。</p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">联系方式</h2>
                <div className="space-y-6">
                  <a href="tel:+82-10-4464-0345" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white transition-colors -mx-4">
                    <div className="w-12 h-12 rounded-lg bg-[#FF8C00]/10 flex items-center justify-center group-hover:bg-[#FF8C00] transition-colors"><Phone className="w-5 h-5 text-[#FF8C00] group-hover:text-white" /></div>
                    <div><p className="text-xs text-slate-500 mb-1">电话（支持WhatsApp）</p><p className="text-xl font-bold text-slate-900">+82-10-4464-0345</p><p className="text-sm text-slate-600 mt-1">联系人：金先生</p></div>
                  </a>
                  <a href="mailto:orangefactory@kakao.com" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white transition-colors -mx-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-slate-900 transition-colors"><Mail className="w-5 h-5 text-slate-600 group-hover:text-white" /></div>
                    <div><p className="text-xs text-slate-500 mb-1">邮箱</p><p className="text-lg font-bold text-slate-900">orangefactory@kakao.com</p></div>
                  </a>
                </div>
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-3"><Clock className="w-4 h-4 text-[#FF8C00]" /><span className="text-sm font-bold text-slate-900">工作时间（韩国时间）</span></div>
                <p className="text-slate-600 text-sm">周一至周五: 09:00 - 18:00</p>
              </div>
              <div className="p-6 bg-slate-900 rounded-xl">
                <div className="flex items-center gap-2 mb-3"><ShieldCheck className="w-4 h-4 text-[#FF8C00]" /><span className="text-sm font-bold text-white">保密承诺</span></div>
                <p className="text-slate-400 text-sm">所有咨询均严格保密。</p>
              </div>
            </div>
            <div className="p-6 md:p-10 bg-white rounded-2xl border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6">发送询价</h2>
              <form action="https://formspree.io/f/xykglvry" method="POST" className="space-y-6">
                <input type="hidden" name="_language" value="zh" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-semibold text-slate-700 mb-2">公司名称</label><input type="text" name="company" placeholder="公司名称" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00]" /></div>
                  <div><label className="block text-sm font-semibold text-slate-700 mb-2">姓名</label><input type="text" name="name" placeholder="您的姓名" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00]" /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-semibold text-slate-700 mb-2">邮箱</label><input type="email" name="email" placeholder="example@email.com" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00]" /></div>
                  <div><label className="block text-sm font-semibold text-slate-700 mb-2">国家</label><input type="text" name="country" placeholder="中国" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00]" /></div>
                </div>
                <div><label className="block text-sm font-semibold text-slate-700 mb-2">感兴趣的服务</label>
                  <select name="interest" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00]">
                    <option value="">请选择</option><option value="批发采购">批发采购</option><option value="品牌库存">品牌库存</option><option value="出口服务">出口服务</option><option value="合作伙伴">合作伙伴</option>
                  </select>
                </div>
                <div><label className="block text-sm font-semibold text-slate-700 mb-2">留言</label><textarea name="message" placeholder="请告诉我们您的需求" rows={4} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00] resize-none" /></div>
                <Button type="submit" className="w-full h-14 bg-[#FF8C00] hover:bg-[#E67E00] text-white font-bold text-lg rounded-lg">提交询价</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

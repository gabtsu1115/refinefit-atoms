import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 md:pt-24">
      <section className="py-12 md:py-20 px-4 text-center">
        <ScrollReveal>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            お<span className="text-[#00b4d8]">問い合わせ</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            見学・入会のご相談はお気軽にお電話ください。
          </p>
        </ScrollReveal>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal delay={200}>
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#00b4d8]/10 flex items-center justify-center">
                <Phone className="w-10 h-10 text-[#00b4d8]" />
              </div>
              <h2 className="text-white text-2xl font-bold mb-2">お電話でのお問い合わせ</h2>
              <p className="text-gray-400 text-sm mb-6">見学・入会のご相談を承ります</p>
              <a
                href="tel:046-854-5609"
                className="inline-flex items-center gap-2 bg-[#00b4d8] text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-[#0096b7] transition-all hover:scale-105 shadow-lg shadow-[#00b4d8]/20 mb-8"
              >
                <Phone className="w-6 h-6" />
                046-854-5609
              </a>

              <div className="border-t border-gray-800 pt-8 space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00b4d8] mt-0.5 shrink-0" />
                  <p className="text-gray-300 text-sm">〒238-0008 神奈川県横須賀市大滝町2丁目10 藤掛ビル B1</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#00b4d8] mt-0.5 shrink-0" />
                  <p className="text-gray-300 text-sm">24時間営業・年中無休</p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://refinefit.zoom-coltd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00b4d8] hover:text-[#0096b7] transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  公式サイトはこちら
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-20 md:hidden" />
    </div>
  );
}
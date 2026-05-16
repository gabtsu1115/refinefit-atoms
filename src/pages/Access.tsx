import { MapPin, Phone, Clock, Train } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Access() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 md:pt-24">
      <section className="py-12 md:py-20 px-4 text-center">
        <ScrollReveal>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[#00b4d8]">アクセス</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            横須賀中央エリアから通いやすい24時間ジム
          </p>
        </ScrollReveal>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 md:p-8">
                <h2 className="text-white text-xl font-semibold mb-6">店舗情報</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#00b4d8]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#00b4d8]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">住所</p>
                      <p className="text-white">〒238-0008</p>
                      <p className="text-white">神奈川県横須賀市大滝町2丁目10</p>
                      <p className="text-white">藤掛ビル B1</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#00b4d8]/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#00b4d8]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">電話番号</p>
                      <a href="tel:046-854-5609" className="text-white text-lg hover:text-[#00b4d8] transition-colors">
                        046-854-5609
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#00b4d8]/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#00b4d8]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">営業時間</p>
                      <p className="text-white font-medium">24時間営業・年中無休</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#00b4d8]/10 flex items-center justify-center shrink-0">
                      <Train className="w-5 h-5 text-[#00b4d8]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">最寄り駅</p>
                      <p className="text-white">京急線 横須賀中央駅</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.0!2d139.67!3d35.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE2JzQ4LjAiTiAxMznCsDQwJzEyLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="リファインフィット24 横須賀中央店 地図"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="h-20 md:hidden" />
    </div>
  );
}
import { Link } from "react-router-dom";
import { Eye, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 md:pt-24">
      <section className="py-12 md:py-20 px-4 text-center">
        <ScrollReveal>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[#00b4d8]">料金</span>プラン
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            シンプルでわかりやすい料金体系。月額定額で24時間使い放題。
          </p>
        </ScrollReveal>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-lg mx-auto">
          <ScrollReveal delay={200}>
            <div className="bg-[#1a1a1a] border-2 border-[#00b4d8] rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#00b4d8] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                おすすめ
              </div>
              <h2 className="text-white text-xl font-semibold mb-2">月額プラン</h2>
              <p className="text-gray-400 text-sm mb-6">24時間・年中無休で使い放題</p>
              <div className="flex items-baseline justify-center gap-1 mb-8">
                <span className="text-5xl md:text-7xl font-bold text-white">5,500</span>
                <span className="text-xl text-gray-400">円（税込）/月</span>
              </div>
              <ul className="space-y-4 mb-10 text-left">
                {[
                  "24時間いつでも利用可能",
                  "年中無休",
                  "パワーラック2台",
                  "スミスマシン1台",
                  "ダンベル30kgまで",
                  "シャワー完備",
                  "ロッカー完備",
                  "Wi-Fi完備",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-[#00b4d8]/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#00b4d8]" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 bg-[#00b4d8] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#0096b7] transition-all hover:scale-105 shadow-lg shadow-[#00b4d8]/20"
              >
                <Eye className="w-5 h-5" />
                見学・お問い合わせ
              </Link>
              <p className="text-gray-500 text-xs mt-6 text-center">
                ※料金は変更される可能性があります。最新料金は店舗へお問い合わせください。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-20 md:hidden" />
    </div>
  );
}
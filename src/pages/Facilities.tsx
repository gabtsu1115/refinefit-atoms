import { Dumbbell, ShowerHead, Wifi, Clock, Lock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

// New realistic gym photos
const FREEWEIGHT_IMAGE = "https://mgx-backend-cdn.metadl.com/generate/images/1219835/2026-05-12/onxmzbyaagqa/real-gym-freeweight-area.png";
const MACHINE_AREA_IMAGE = "https://mgx-backend-cdn.metadl.com/generate/images/1219835/2026-05-12/onxmztqaagqq/real-gym-machine-area.png";
const CARDIO_AREA_IMAGE = "https://mgx-backend-cdn.metadl.com/generate/images/1219835/2026-05-12/onxmxjqaagpq/real-gym-cardio-area.png";
const LOCKER_ROOM_IMAGE = "https://mgx-backend-cdn.metadl.com/generate/images/1219835/2026-05-12/onxmwxiaagnq/real-gym-locker-room.png";
const ENTRANCE_IMAGE = "https://mgx-backend-cdn.metadl.com/generate/images/1219835/2026-05-12/onxnnfiaagqq/real-gym-entrance-stairs.png";
const WIDE_INTERIOR_IMAGE = "https://mgx-backend-cdn.metadl.com/generate/images/1219835/2026-05-12/onxnkqiaagnq/real-gym-wide-interior.png";

const equipmentList = [
  {
    name: "フリーウェイトエリア",
    desc: "パワーラック2台完備。ベンチプレス、スクワット、デッドリフトなどBIG3トレーニングに最適な環境を提供します。",
    image: FREEWEIGHT_IMAGE,
    specs: ["パワーラック2台設置", "セーフティバー付き", "バーベル・プレート完備", "ダンベル30kgまで"],
  },
  {
    name: "マシンエリア",
    desc: "スミスマシン・ケーブルマシン完備。ガイドレール付きで安全にトレーニングが可能。初心者の方でも安心して高重量に挑戦できます。",
    image: MACHINE_AREA_IMAGE,
    specs: ["スミスマシン1台設置", "ガイドレール付き", "多目的利用可能"],
  },
  {
    name: "有酸素エリア",
    desc: "トレッドミル・エリプティカル完備。ウォームアップからカーディオトレーニングまで幅広く対応します。",
    image: CARDIO_AREA_IMAGE,
    specs: ["トレッドミル完備", "エリプティカル完備", "TV付きモニター"],
  },
];

const facilityImages = [
  { name: "ロッカールーム", image: LOCKER_ROOM_IMAGE, desc: "清潔で広々としたロッカー。荷物を安全に保管できます。" },
  { name: "エントランス", image: ENTRANCE_IMAGE, desc: "地下に広がる隠れ家的空間。セキュリティ完備で安心。" },
  { name: "ジム全体", image: WIDE_INTERIOR_IMAGE, desc: "広々とした空間で快適にトレーニング。" },
];

const amenities = [
  { icon: Lock, name: "ロッカー", desc: "荷物を安全に保管。仕事帰りでも安心。" },
  { icon: ShowerHead, name: "シャワー", desc: "トレーニング後にスッキリリフレッシュ。" },
  { icon: Wifi, name: "Wi-Fi", desc: "館内全域で高速Wi-Fiを利用可能。" },
  { icon: Clock, name: "24時間利用", desc: "年中無休。いつでもお好きな時間に。" },
];

export default function Facilities() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 md:pt-24">
      {/* Header */}
      <section className="py-12 md:py-20 px-4 text-center">
        <ScrollReveal>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            設備<span className="text-[#00b4d8]">紹介</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            リファインフィット24は、本格的なトレーニングに必要な設備を完備。初心者から上級者まで満足いただける環境です。
          </p>
        </ScrollReveal>
      </section>

      {/* Main Equipment */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {equipmentList.map((item, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="rounded-2xl overflow-hidden border border-gray-800 group">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.name}</h2>
                  <p className="text-gray-400 leading-relaxed mb-6">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.specs.map((spec, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-300 text-sm">
                        <Dumbbell className="w-4 h-4 text-[#00b4d8]" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Facility Photos Grid */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              その他<span className="text-[#00b4d8]">施設</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilityImages.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#00b4d8]/50 transition-all duration-300 group">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 md:py-20 px-4 bg-black/50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              付帯<span className="text-[#00b4d8]">設備</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 text-center hover:border-[#00b4d8]/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#00b4d8]/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-[#00b4d8]" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="h-20 md:hidden" />
    </div>
  );
}
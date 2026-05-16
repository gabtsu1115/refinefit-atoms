import { Link } from "react-router-dom";
import { Phone, Eye, Clock, DollarSign, Users, Dumbbell, ShowerHead, Wifi, Star, MapPin, ChevronDown, Camera } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

// New realistic gym photos
const HERO_IMAGE = "https://mgx-backend-cdn.metadl.com/generate/images/1219835/2026-05-12/onxmzbyaagqa/real-gym-freeweight-area.png";
const MACHINE_AREA_IMAGE = "https://mgx-backend-cdn.metadl.com/generate/images/1219835/2026-05-12/onxmztqaagqq/real-gym-machine-area.png";
const CARDIO_AREA_IMAGE = "https://mgx-backend-cdn.metadl.com/generate/images/1219835/2026-05-12/onxmxjqaagpq/real-gym-cardio-area.png";
const LOCKER_ROOM_IMAGE = "https://mgx-backend-cdn.metadl.com/generate/images/1219835/2026-05-12/onxmwxiaagnq/real-gym-locker-room.png";
const ENTRANCE_IMAGE = "https://mgx-backend-cdn.metadl.com/generate/images/1219835/2026-05-12/onxnnfiaagqq/real-gym-entrance-stairs.png";
const WIDE_INTERIOR_IMAGE = "https://mgx-backend-cdn.metadl.com/generate/images/1219835/2026-05-12/onxnkqiaagnq/real-gym-wide-interior.png";

const galleryImages = [
  { src: HERO_IMAGE, alt: "フリーウェイトエリア" },
  { src: MACHINE_AREA_IMAGE, alt: "マシンエリア" },
  { src: CARDIO_AREA_IMAGE, alt: "有酸素エリア" },
  { src: LOCKER_ROOM_IMAGE, alt: "ロッカールーム" },
  { src: ENTRANCE_IMAGE, alt: "エントランス" },
  { src: WIDE_INTERIOR_IMAGE, alt: "ジム全体" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="リファインフィット24 フリーウェイトエリア"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#00b4d8] text-sm md:text-base font-medium tracking-widest uppercase mb-4 animate-fade-in">
            横須賀中央で本格的に鍛えるならここ
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            横須賀中央で、
            <br />
            <span className="text-[#00b4d8]">24時間</span>いつでも鍛えられる。
          </h1>
          <p className="text-gray-200 text-base md:text-lg lg:text-xl mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-delay">
            月額5,500円で使い放題。パワーラック・スミスマシン・シャワー・Wi-Fi完備の通いやすいフィットネスジム。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-[#00b4d8] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#0096b7] transition-all hover:scale-105 shadow-lg shadow-[#00b4d8]/20"
            >
              <Eye className="w-5 h-5" />
              見学・お問い合わせ
            </Link>
            <a
              href="tel:046-854-5609"
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              電話する
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Reasons Section with Wide Interior Photo */}
      <section className="py-20 md:py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={WIDE_INTERIOR_IMAGE}
            alt="ジム内装全体"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/90" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
              選ばれる<span className="text-[#00b4d8]">理由</span>
            </h2>
            <p className="text-gray-400 text-center mb-4">Why Choose Us</p>
            <p className="text-[#00b4d8] text-center text-sm font-medium mb-12 md:mb-16">
              — 横須賀中央で本格的に鍛えるならここ —
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "24時間営業", desc: "年中無休でいつでも利用可能。仕事前でも深夜でも。" },
              { icon: DollarSign, title: "月額5,500円", desc: "コスパ抜群。安心の定額制で使い放題。" },
              { icon: Users, title: "混雑しにくい", desc: "ピークタイムでも比較的空いていると好評。" },
              { icon: Dumbbell, title: "充実の設備", desc: "パワーラック2台、スミスマシン、ダンベル30kgまで完備。" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-[#00b4d8]/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#00b4d8]/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-[#00b4d8]" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: ShowerHead, title: "シャワー・ロッカー完備", desc: "仕事帰りでも安心。" },
                { icon: Wifi, title: "Wi-Fi完備", desc: "トレーニング中も快適に。" },
                { icon: Users, title: "フレンドリーなスタッフ", desc: "必要以上に干渉しない、心地よい距離感。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-[#00b4d8]/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#00b4d8]/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-[#00b4d8]" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Facilities Section - Card Layout with Real Photos */}
      <section className="py-20 md:py-28 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
              設備<span className="text-[#00b4d8]">紹介</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 md:mb-16">Facilities</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "マシンエリア", desc: "スミスマシン・ケーブルマシン完備。安全に高重量トレーニングが可能。", image: MACHINE_AREA_IMAGE },
              { name: "有酸素エリア", desc: "トレッドミル・エリプティカル完備。ウォームアップからカーディオまで。", image: CARDIO_AREA_IMAGE },
              { name: "ロッカールーム", desc: "清潔で広々としたロッカー。シャワーも完備で仕事帰りも安心。", image: LOCKER_ROOM_IMAGE },
              { name: "エントランス", desc: "地下に広がる隠れ家的空間。24時間セキュリティ完備。", image: ENTRANCE_IMAGE },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#00b4d8]/50 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="h-56 md:h-64 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[#00b4d8]/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {item.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-semibold text-lg mb-2">{item.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Dumbbell, name: "ダンベル 30kgまで", desc: "幅広いトレーニングに対応。" },
                { icon: ShowerHead, name: "シャワー完備", desc: "トレーニング後にスッキリ。" },
                { icon: Wifi, name: "Wi-Fi完備", desc: "館内全域で利用可能。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 text-center hover:border-[#00b4d8]/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#00b4d8]/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#00b4d8]" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera className="w-6 h-6 text-[#00b4d8]" />
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                店内<span className="text-[#00b4d8]">ギャラリー</span>
              </h2>
            </div>
            <p className="text-gray-400 text-center mb-12 md:mb-16">Gallery</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="relative group rounded-xl overflow-hidden border border-gray-800 hover:border-[#00b4d8]/50 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                    <span className="text-white text-sm font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-20 md:py-28 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
              こんな方に<span className="text-[#00b4d8]">おすすめ</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 md:mb-16">Recommended For</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "仕事前や仕事終わりに通いたい方",
              "安くジムを始めたい方",
              "混雑しにくいジムを探している方",
              "自分のペースで黙々と鍛えたい方",
              "初心者だけど本格設備を使いたい方",
              "横須賀中央駅周辺でジムを探している方",
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-center gap-4 bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 hover:border-[#00b4d8]/50 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#00b4d8] shrink-0" />
                  <p className="text-gray-300 text-sm md:text-base">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
              お客様の<span className="text-[#00b4d8]">声</span>
            </h2>
            <p className="text-gray-400 text-center mb-4">Reviews</p>
            <div className="flex items-center justify-center gap-1 mb-12">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-white font-semibold ml-2">5.0 / 5.0</span>
              <span className="text-gray-400 text-sm ml-2">Google口コミ</span>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "月額5,500円で24時間使い放題。ロッカー、シャワー、Wi-Fiも完備されていて申し分ない。",
              "安くておすすめ。ピークタイムでもあまり混んでおらず、スタッフもフレンドリー。",
            ].map((review, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 hover:border-[#00b4d8]/50 transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed italic">「{review}」</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-28 px-4 bg-black/50">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              <span className="text-[#00b4d8]">料金</span>プラン
            </h2>
            <p className="text-gray-400 mb-12 md:mb-16">Pricing</p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="bg-[#1a1a1a] border-2 border-[#00b4d8] rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#00b4d8] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                コスパ◎
              </div>
              <p className="text-gray-400 text-sm mb-2">月額料金</p>
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-5xl md:text-7xl font-bold text-white">5,500</span>
                <span className="text-xl text-gray-400">円（税込）</span>
              </div>
              <div className="space-y-2 mb-8">
                <p className="text-[#00b4d8] font-medium">24時間・年中無休で使い放題</p>
                <p className="text-gray-400 text-sm">コスパ重視の方におすすめ</p>
              </div>
              <ul className="text-left max-w-sm mx-auto space-y-3 mb-8">
                {[
                  "パワーラック2台利用可",
                  "スミスマシン利用可",
                  "ダンベル30kgまで",
                  "シャワー・ロッカー完備",
                  "Wi-Fi完備",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#00b4d8]/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#00b4d8]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#00b4d8] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#0096b7] transition-all hover:scale-105 shadow-lg shadow-[#00b4d8]/20"
              >
                <Eye className="w-5 h-5" />
                見学・お問い合わせ
              </Link>
              <p className="text-gray-500 text-xs mt-6">
                ※料金は変更される可能性があります。最新料金は店舗へお問い合わせください。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
              <span className="text-[#00b4d8]">アクセス</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 md:mb-16">Access</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 md:p-8">
                <h3 className="text-white font-semibold text-lg mb-6">店舗情報</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#00b4d8] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-gray-400 text-xs mb-1">住所</p>
                      <p className="text-white text-sm">〒238-0008 神奈川県横須賀市大滝町2丁目10 藤掛ビル B1</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#00b4d8] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-gray-400 text-xs mb-1">電話番号</p>
                      <a href="tel:046-854-5609" className="text-white text-sm hover:text-[#00b4d8] transition-colors">
                        046-854-5609
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#00b4d8] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-gray-400 text-xs mb-1">営業時間</p>
                      <p className="text-white text-sm">24時間営業・年中無休</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-[#00b4d8]/10 rounded-xl">
                  <p className="text-[#00b4d8] text-sm font-medium">
                    横須賀中央で本格的に鍛えるならここ
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden h-[300px] lg:h-full min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.0!2d139.67!3d35.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE2JzQ4LjAiTiAxMznCsDQwJzEyLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
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

      {/* FAQ Section */}
      <section className="py-20 md:py-28 px-4 bg-black/50">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
              よくある<span className="text-[#00b4d8]">質問</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 md:mb-16">FAQ</p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "初心者でも利用できますか？", a: "はい。自分のペースで利用できるため、初心者の方にもおすすめです。スタッフも必要に応じてサポートいたします。" },
                { q: "24時間利用できますか？", a: "はい。24時間営業・年中無休です。早朝でも深夜でも、ご都合の良い時間にご利用いただけます。" },
                { q: "シャワーはありますか？", a: "はい。シャワー・ロッカーを完備しています。仕事帰りでも安心してトレーニングいただけます。" },
                { q: "混雑しますか？", a: "口コミでは、ピークタイムでも比較的混雑しにくいという声があります。快適にトレーニングいただけます。" },
                { q: "見学できますか？", a: "見学をご希望の方は、店舗へお電話（046-854-5609）にてお問い合わせください。" },
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-[#1a1a1a] border border-gray-800 rounded-xl px-6 data-[state=open]:border-[#00b4d8]/50">
                  <AccordionTrigger className="text-white text-left text-sm md:text-base hover:text-[#00b4d8] py-5 hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[#00b4d8] text-sm font-medium tracking-wider mb-4">
              横須賀中央で本格的に鍛えるならここ
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              横須賀中央で24時間ジムを始めるなら、
              <br />
              <span className="text-[#00b4d8]">リファインフィット24</span>へ。
            </h2>
            <p className="text-gray-400 mb-10">まずはお気軽にお問い合わせください。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:046-854-5609"
                className="flex items-center justify-center gap-2 bg-[#00b4d8] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#0096b7] transition-all hover:scale-105 shadow-lg shadow-[#00b4d8]/20"
              >
                <Phone className="w-5 h-5" />
                電話で問い合わせる
              </a>
              <a
                href="https://refinefit.zoom-coltd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all hover:scale-105"
              >
                公式サイトを見る
              </a>
              <Link
                to="/access"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                アクセスを見る
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom padding for mobile CTA */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
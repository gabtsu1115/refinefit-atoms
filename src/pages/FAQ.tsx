import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqItems = [
  {
    q: "初心者でも利用できますか？",
    a: "はい。自分のペースで利用できるため、初心者の方にもおすすめです。スタッフも必要に応じてサポートいたします。マシンの使い方がわからない場合もお気軽にお声がけください。",
  },
  {
    q: "24時間利用できますか？",
    a: "はい。24時間営業・年中無休です。早朝でも深夜でも、ご都合の良い時間にご利用いただけます。",
  },
  {
    q: "シャワーはありますか？",
    a: "はい。シャワー・ロッカーを完備しています。仕事帰りでも安心してトレーニングいただけます。",
  },
  {
    q: "混雑しますか？",
    a: "口コミでは、ピークタイムでも比較的混雑しにくいという声があります。快適にトレーニングいただけます。",
  },
  {
    q: "見学できますか？",
    a: "見学をご希望の方は、店舗へお電話（046-854-5609）にてお問い合わせください。スタッフがご案内いたします。",
  },
  {
    q: "月額料金以外に費用はかかりますか？",
    a: "詳しい料金体系については店舗へ直接お問い合わせください。最新の情報をご案内いたします。",
  },
  {
    q: "駐車場はありますか？",
    a: "専用駐車場はございません。近隣のコインパーキングをご利用ください。",
  },
  {
    q: "どんな設備がありますか？",
    a: "パワーラック2台、スミスマシン1台、ダンベル（30kgまで）、シャワー、ロッカー、Wi-Fiを完備しています。",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 md:pt-24">
      <section className="py-12 md:py-20 px-4 text-center">
        <ScrollReveal>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            よくある<span className="text-[#00b4d8]">質問</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            お客様からよくいただくご質問をまとめました。
          </p>
        </ScrollReveal>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={200}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-[#1a1a1a] border border-gray-800 rounded-xl px-6 data-[state=open]:border-[#00b4d8]/50"
                >
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

      <div className="h-20 md:hidden" />
    </div>
  );
}
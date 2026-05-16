import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white tracking-wider mb-4">
              REFINE FIT <span className="text-[#00b4d8]">24</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              横須賀中央エリアで24時間営業のフィットネスジム。
              月額5,500円で使い放題。初心者からガチ勢まで。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">ナビゲーション</h4>
            <ul className="space-y-2">
              {[
                { name: "ホーム", path: "/" },
                { name: "設備紹介", path: "/facilities" },
                { name: "料金", path: "/pricing" },
                { name: "アクセス", path: "/access" },
                { name: "よくある質問", path: "/faq" },
                { name: "お問い合わせ", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-[#00b4d8] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">店舗情報</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-[#00b4d8] shrink-0" />
                <span>〒238-0008 神奈川県横須賀市大滝町2丁目10 藤掛ビル B1</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#00b4d8] shrink-0" />
                <a href="tel:046-854-5609" className="hover:text-[#00b4d8] transition-colors">
                  046-854-5609
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-[#00b4d8] shrink-0" />
                <span>24時間営業・年中無休</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 リファインフィット24 横須賀中央店. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
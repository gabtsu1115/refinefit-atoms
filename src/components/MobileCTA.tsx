import { Phone, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 px-4 py-3">
      <div className="flex gap-3">
        <Link
          to="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-[#00b4d8] text-white py-3 rounded-full font-medium text-sm hover:bg-[#0096b7] transition-colors"
        >
          <Eye className="w-4 h-4" />
          見学する
        </Link>
        <a
          href="tel:046-854-5609"
          className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-3 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors"
        >
          <Phone className="w-4 h-4" />
          電話する
        </a>
      </div>
    </div>
  );
}
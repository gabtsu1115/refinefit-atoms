import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "ホーム", path: "/" },
  { name: "設備", path: "/facilities" },
  { name: "料金", path: "/pricing" },
  { name: "アクセス", path: "/access" },
  { name: "FAQ", path: "/faq" },
  { name: "お問い合わせ", path: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold text-white tracking-wider">
              REFINE FIT <span className="text-[#00b4d8]">24</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#00b4d8] ${
                  location.pathname === link.path
                    ? "text-[#00b4d8]"
                    : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:046-854-5609"
              className="flex items-center gap-2 bg-[#00b4d8] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0096b7] transition-colors"
            >
              <Phone className="w-4 h-4" />
              電話する
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="メニュー"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-black/98 backdrop-blur-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xl font-medium transition-colors duration-200 hover:text-[#00b4d8] ${
                location.pathname === link.path
                  ? "text-[#00b4d8]"
                  : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:046-854-5609"
            className="flex items-center gap-2 bg-[#00b4d8] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#0096b7] transition-colors"
          >
            <Phone className="w-5 h-5" />
            電話する
          </a>
        </div>
      </div>
    </nav>
  );
}
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Music, Globe } from "lucide-react";

interface NavItem {
  label: string;
  englishLabel: string;
  path: string;
}

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [lang, setLang] = useState<"hi" | "en">("en");
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: "होम", englishLabel: "Home", path: "/" },
    { label: "इतिहास", englishLabel: "History", path: "/history" },
    { label: "चार दिन", englishLabel: "4 Days", path: "/four-days" },
    { label: "गीत", englishLabel: "Songs", path: "/songs" },
    { label: "विरासत", englishLabel: "Heritage", path: "/heritage" },
    { label: "घाट", englishLabel: "Ghats", path: "/ghats" },
    { label: "रसोई", englishLabel: "Kitchen", path: "/kitchen" },
    { label: "कहानियाँ", englishLabel: "Stories", path: "/stories" },
    { label: "गैलरी", englishLabel: "Gallery", path: "/gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "hi" ? "en" : "hi"));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#FDFBF7]/95 backdrop-blur-sm py-3 border-[#EADEC9] shadow-[0_2px_8px_rgba(44,34,30,0.04)]"
            : "bg-[#FDFBF7] py-4 border-[#EADEC9]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Cultural Archive Institutional Identity */}
          <Link to="/" className="flex items-center gap-3 select-none group">
            <div className="w-8 h-8 border border-[#8E4A23] flex items-center justify-center bg-[#FAF7F0] text-[#8E4A23] font-yatra text-base transition-colors group-hover:bg-[#8E4A23] group-hover:text-white">
              छ
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base md:text-lg text-[#2C221E] tracking-tight leading-none group-hover:text-[#8E4A23] transition-colors">
                CHHATH
              </span>
              <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#7D6B58] mt-0.5">
                Living Heritage Archive · Bihar
              </span>
            </div>
          </Link>

          {/* Editorial Text Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-inter">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative py-1 text-xs tracking-wider transition-colors duration-200"
                >
                  <span
                    className={`transition-colors duration-200 ${
                      isActive
                        ? "text-[#8E4A23] font-bold"
                        : "text-[#5C2E16] hover:text-[#8E4A23] font-medium"
                    }`}
                  >
                    {lang === "hi" ? item.label : item.englishLabel}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navActiveUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8E4A23]"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-wider text-[#5C2E16] border border-[#EADEC9] hover:border-[#8E4A23] hover:text-[#8E4A23] transition-colors bg-white"
              title="Toggle Language"
            >
              <Globe className="w-3 h-3 text-[#8E4A23]" />
              <span className="uppercase">{lang === "hi" ? "EN" : "HI · हिन्दी"}</span>
            </button>

            {/* Music Shortcut */}
            <Link
              to="/songs"
              className="p-1.5 border border-[#EADEC9] text-[#5C2E16] hover:border-[#8E4A23] hover:text-[#8E4A23] transition-colors bg-white"
              title="Living Sound Archive"
              aria-label="Sound Archive"
            >
              <Music className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-1.5 border border-[#EADEC9] text-[#2C221E] hover:border-[#8E4A23] transition-colors bg-white"
              aria-label="Toggle Menu"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Editorial Navigation Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[57px] z-40 bg-[#FDFBF7] border-b border-[#EADEC9] shadow-xl p-6 font-inter lg:hidden"
          >
            <div className="max-w-md mx-auto space-y-6">
              <div className="border-b border-[#EADEC9] pb-2 flex justify-between items-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#7D6B58]">
                  Archival Index · अनुक्रमणिका
                </span>
                <span className="font-mono text-[10px] text-[#8E4A23]">
                  9 Collections
                </span>
              </div>

              <nav className="grid grid-cols-2 gap-3">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`p-3 border text-xs font-semibold flex items-center justify-between transition-colors ${
                        isActive
                          ? "border-[#8E4A23] bg-[#FAF7F0] text-[#8E4A23]"
                          : "border-[#EADEC9] bg-white text-[#2C221E] hover:border-[#8E4A23]"
                      }`}
                    >
                      <span>{item.englishLabel}</span>
                      <span className="font-noto text-[11px] text-[#7D6B58] font-normal">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div className="border-t border-[#EADEC9] pt-4 flex justify-between items-center text-xs">
                <button
                  onClick={toggleLanguage}
                  className="px-3 py-1.5 border border-[#EADEC9] bg-white text-xs font-mono text-[#5C2E16]"
                >
                  Language: {lang === "hi" ? "Hindi (हिन्दी)" : "English (EN)"}
                </button>
                <Link
                  to="/about"
                  className="text-xs text-[#8E4A23] hover:underline font-medium"
                >
                  About the Archive →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

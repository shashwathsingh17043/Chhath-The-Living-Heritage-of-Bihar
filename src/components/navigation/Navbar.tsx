import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Music, Globe, ChevronDown } from "lucide-react";
import { useAudioPlayer } from "../../context/AudioPlayerContext";

interface NavLinkItem {
  label: string;
  englishLabel: string;
  path: string;
  isExternalHash?: boolean;
}

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isTraditionsOpen, setIsTraditionsOpen] = useState(false);
  const [lang, setLang] = useState<"hi" | "en">("en");
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const wasMobileOpenRef = useRef(false);
  const { currentSong, isPlaying } = useAudioPlayer();


  // Grouped inside Traditions dropdown
  const traditionItems: NavLinkItem[] = [
    { label: "इतिहास", englishLabel: "History", path: "/history" },
    { label: "विरासत", englishLabel: "Heritage", path: "/heritage" },
    { label: "गीत", englishLabel: "Songs", path: "/songs" },
    { label: "रसोई", englishLabel: "Kitchen", path: "/kitchen" },
    { label: "पूजन सामग्री", englishLabel: "Ritual Objects", path: "/heritage" },
  ];

  // Scroll detection for sticky header state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsTraditionsOpen(false);
  }, [location.pathname]);

  // Click outside to close Traditions dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsTraditionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown or mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isTraditionsOpen) setIsTraditionsOpen(false);
        if (isMobileOpen) setIsMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTraditionsOpen, isMobileOpen]);

  // Mobile drawer: body scroll locking, background inert isolation, and keyboard focus trap
  useEffect(() => {
    if (!isMobileOpen) return;

    // 1. Lock background scrolling while preserving original overflow style
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 2. Isolate background content from keyboard & assistive technology
    const mainEl = document.querySelector("main");
    const footerEl = document.querySelector("footer");
    if (mainEl) mainEl.setAttribute("inert", "");
    if (footerEl) footerEl.setAttribute("inert", "");

    // 3. Move initial focus to the first focusable element inside the drawer
    const animId = requestAnimationFrame(() => {
      if (drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length > 0) {
          focusables[0].focus();
        }
      }
    });

    // 4. Trap Tab and Shift+Tab focus inside the drawer
    const handleTrapKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (!drawerRef.current) return;
        const focusables = Array.from(
          drawerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => el.offsetParent !== null);

        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first || !drawerRef.current.contains(document.activeElement)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last || !drawerRef.current.contains(document.activeElement)) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleTrapKeyDown);

    // Safeguard: Restore original body overflow, remove inert attributes, and clean up listeners
    return () => {
      document.body.style.overflow = originalOverflow;
      if (mainEl) mainEl.removeAttribute("inert");
      if (footerEl) footerEl.removeAttribute("inert");
      cancelAnimationFrame(animId);
      window.removeEventListener("keydown", handleTrapKeyDown);
    };
  }, [isMobileOpen]);

  // Restore focus to the menu-toggle button when drawer closes
  useEffect(() => {
    if (isMobileOpen) {
      wasMobileOpenRef.current = true;
    } else if (wasMobileOpenRef.current) {
      wasMobileOpenRef.current = false;
      menuButtonRef.current?.focus();
    }
  }, [isMobileOpen]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "hi" ? "en" : "hi"));
  };

  const isTraditionsActive = traditionItems.some((item) => location.pathname === item.path);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#FFF8EC]/95 backdrop-blur-md py-2.5 border-[#D8C5AF] shadow-[0_4px_16px_rgba(43,27,22,0.06)]"
            : "bg-[#FFF8EC] py-3.5 border-[#D8C5AF]/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Living Heritage Archive Identity */}
          <Link
            to="/"
            className="flex items-center gap-3 select-none group focus-visible:ring-2 focus-visible:ring-[#E97824] rounded px-1"
            aria-label="Chhath Living Heritage Archive Home"
          >
            <div className="w-9 h-9 border border-[#B9653B] flex items-center justify-center bg-[#F5ECE0] text-[#B9653B] font-hindi font-bold text-lg transition-colors group-hover:bg-[#B9653B] group-hover:text-white">
              छ
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl text-[#2B1B16] tracking-tight leading-none group-hover:text-[#A93120] transition-colors">
                CHHATH
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#5C4A3E] mt-0.5 font-medium">
                Living Heritage Archive · Bihar
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 font-sans" aria-label="Main Navigation">
            {/* Discover Link */}
            <a
              href="#introduction"
              className="py-1 text-sm tracking-wide text-[#5C4A3E] hover:text-[#A93120] font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#E97824] rounded px-1"
            >
              {lang === "hi" ? "परिचय" : "Discover"}
            </a>

            {/* Four Days */}
            <Link
              to="/four-days"
              className={`relative py-1 text-sm tracking-wide transition-colors focus-visible:ring-2 focus-visible:ring-[#E97824] rounded px-1 ${
                location.pathname === "/four-days" || location.pathname.startsWith("/four-days/")
                  ? "text-[#A93120] font-bold"
                  : "text-[#5C4A3E] hover:text-[#A93120] font-medium"
              }`}
            >
              {lang === "hi" ? "चार दिन" : "Four Days"}
              {(location.pathname === "/four-days" || location.pathname.startsWith("/four-days/")) && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A93120]"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
            </Link>

            {/* Traditions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsTraditionsOpen(!isTraditionsOpen)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    setIsTraditionsOpen(true);
                  }
                }}
                className={`flex items-center gap-1 py-1 text-sm tracking-wide transition-colors focus-visible:ring-2 focus-visible:ring-[#E97824] rounded px-1 ${
                  isTraditionsActive
                    ? "text-[#A93120] font-bold"
                    : "text-[#5C4A3E] hover:text-[#A93120] font-medium"
                }`}
                aria-expanded={isTraditionsOpen}
                aria-haspopup="true"
              >
                <span>{lang === "hi" ? "परंपराएँ" : "Traditions"}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isTraditionsOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isTraditionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-[#FFF8EC] border border-[#D8C5AF] shadow-xl py-2 z-50 rounded-sm"
                    role="menu"
                  >
                    <div className="px-3 py-1.5 border-b border-[#D8C5AF]/60 mb-1">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#7D6B58] font-semibold">
                        Living Traditions · परंपराएँ
                      </span>
                    </div>
                    {traditionItems.map((item) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.englishLabel}
                          to={item.path}
                          onClick={() => setIsTraditionsOpen(false)}
                          className={`flex items-center justify-between px-3 py-2 text-xs transition-colors ${
                            isActive
                              ? "bg-[#F5ECE0] text-[#A93120] font-bold"
                              : "text-[#2B1B16] hover:bg-[#F5ECE0]/80 hover:text-[#A93120]"
                          }`}
                          role="menuitem"
                        >
                          <span>{item.englishLabel}</span>
                          <span className="font-hindi text-[12px] text-[#7D6B58]">
                            {item.label}
                          </span>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Stories */}
            <Link
              to="/stories"
              className={`relative py-1 text-sm tracking-wide transition-colors focus-visible:ring-2 focus-visible:ring-[#E97824] rounded px-1 ${
                location.pathname === "/stories" || location.pathname.startsWith("/stories/")
                  ? "text-[#A93120] font-bold"
                  : "text-[#5C4A3E] hover:text-[#A93120] font-medium"
              }`}
            >
              {lang === "hi" ? "कहानियाँ" : "Stories"}
              {(location.pathname === "/stories" || location.pathname.startsWith("/stories/")) && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A93120]"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
            </Link>

            {/* Ghats */}
            <Link
              to="/ghats"
              className={`relative py-1 text-sm tracking-wide transition-colors focus-visible:ring-2 focus-visible:ring-[#E97824] rounded px-1 ${
                location.pathname === "/ghats" || location.pathname.startsWith("/ghats/")
                  ? "text-[#A93120] font-bold"
                  : "text-[#5C4A3E] hover:text-[#A93120] font-medium"
              }`}
            >
              {lang === "hi" ? "घाट" : "Ghats"}
              {(location.pathname === "/ghats" || location.pathname.startsWith("/ghats/")) && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A93120]"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
            </Link>

            {/* Gallery */}
            <Link
              to="/gallery"
              className={`relative py-1 text-sm tracking-wide transition-colors focus-visible:ring-2 focus-visible:ring-[#E97824] rounded px-1 ${
                location.pathname === "/gallery"
                  ? "text-[#A93120] font-bold"
                  : "text-[#5C4A3E] hover:text-[#A93120] font-medium"
              }`}
            >
              {lang === "hi" ? "गैलरी" : "Gallery"}
              {location.pathname === "/gallery" && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A93120]"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
            </Link>
          </nav>

          {/* Action Tools (Language switch & Audio control) */}
          <div className="flex items-center gap-2.5">
            {/* Language Switcher (Preserving exact navigation label toggle functionality) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-wider text-[#2B1B16] border border-[#D8C5AF] hover:border-[#B9653B] hover:text-[#A93120] transition-colors bg-white shadow-xs focus-visible:ring-2 focus-visible:ring-[#E97824] rounded"
              title="Toggle Navigation Language (English / हिन्दी)"
              aria-label={`Switch navigation language to ${lang === "hi" ? "English" : "Hindi"}`}
            >
              <Globe className="w-3.5 h-3.5 text-[#B9653B]" />
              <span className="uppercase font-semibold">{lang === "hi" ? "EN" : "HI · हिन्दी"}</span>
            </button>

            {/* Audio Control Shortcut */}
            <Link
              to="/songs"
              className={`p-2 border transition-colors bg-white shadow-xs flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#E97824] rounded ${
                isPlaying
                  ? "border-[#E97824] text-[#E97824] bg-[#F5ECE0]"
                  : "border-[#D8C5AF] text-[#5C4A3E] hover:border-[#B9653B] hover:text-[#A93120]"
              }`}
              title={isPlaying && currentSong ? `Playing: ${currentSong.title}` : "Living Sound Archive · पारंपरिक गीत"}
              aria-label="Living Sound Archive"
            >
              <Music className={`w-4 h-4 ${isPlaying ? "animate-pulse text-[#E97824]" : ""}`} />
            </Link>

            {/* Mobile Menu Toggle (Min touch target 44px) */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2.5 border border-[#D8C5AF] text-[#2B1B16] hover:border-[#B9653B] transition-colors bg-white shadow-xs min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#E97824] rounded"
              aria-label={isMobileOpen ? "Close Menu" : "Open Navigation Menu"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav-drawer"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-nav-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[59px] z-40 bg-[#FFF8EC] border-b border-[#D8C5AF] shadow-2xl p-6 font-sans lg:hidden max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <div className="max-w-md mx-auto space-y-6">
              
              {/* Primary links */}
              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#7D6B58] block pb-2 border-b border-[#D8C5AF]">
                  Main Navigation · मुख्य पृष्ठ
                </span>
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <a
                    href="#introduction"
                    onClick={() => setIsMobileOpen(false)}
                    className="p-3 border border-[#D8C5AF] bg-white text-xs font-semibold text-[#2B1B16] hover:border-[#B9653B] flex items-center justify-between min-h-[44px]"
                  >
                    <span>Discover</span>
                    <span className="font-hindi text-[12px] text-[#7D6B58]">परिचय</span>
                  </a>
                  <Link
                    to="/four-days"
                    onClick={() => setIsMobileOpen(false)}
                    className="p-3 border border-[#D8C5AF] bg-white text-xs font-semibold text-[#2B1B16] hover:border-[#B9653B] flex items-center justify-between min-h-[44px]"
                  >
                    <span>Four Days</span>
                    <span className="font-hindi text-[12px] text-[#7D6B58]">चार दिन</span>
                  </Link>
                  <Link
                    to="/stories"
                    onClick={() => setIsMobileOpen(false)}
                    className="p-3 border border-[#D8C5AF] bg-white text-xs font-semibold text-[#2B1B16] hover:border-[#B9653B] flex items-center justify-between min-h-[44px]"
                  >
                    <span>Stories</span>
                    <span className="font-hindi text-[12px] text-[#7D6B58]">कहानियाँ</span>
                  </Link>
                  <Link
                    to="/ghats"
                    onClick={() => setIsMobileOpen(false)}
                    className="p-3 border border-[#D8C5AF] bg-white text-xs font-semibold text-[#2B1B16] hover:border-[#B9653B] flex items-center justify-between min-h-[44px]"
                  >
                    <span>Ghats</span>
                    <span className="font-hindi text-[12px] text-[#7D6B58]">घाट</span>
                  </Link>
                  <Link
                    to="/gallery"
                    onClick={() => setIsMobileOpen(false)}
                    className="p-3 border border-[#D8C5AF] bg-white text-xs font-semibold text-[#2B1B16] hover:border-[#B9653B] flex items-center justify-between min-h-[44px] col-span-2"
                  >
                    <span>Gallery</span>
                    <span className="font-hindi text-[12px] text-[#7D6B58]">चित्र दीर्घा</span>
                  </Link>
                </div>
              </div>

              {/* Traditions Section */}
              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#B9653B] font-semibold block pb-2 border-b border-[#D8C5AF]">
                  Traditions · परंपरा और विरासत
                </span>
                <div className="grid grid-cols-1 gap-2 pt-2">
                  {traditionItems.map((item) => (
                    <Link
                      key={item.englishLabel}
                      to={item.path}
                      onClick={() => setIsMobileOpen(false)}
                      className="p-3 border border-[#D8C5AF] bg-white text-xs font-semibold text-[#2B1B16] hover:border-[#B9653B] flex items-center justify-between min-h-[44px]"
                    >
                      <span>{item.englishLabel}</span>
                      <span className="font-hindi text-[12px] text-[#7D6B58]">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Footer Tools */}
              <div className="border-t border-[#D8C5AF] pt-4 flex justify-between items-center text-xs">
                <button
                  onClick={toggleLanguage}
                  className="px-3.5 py-2 border border-[#D8C5AF] bg-white text-xs font-mono text-[#2B1B16] min-h-[44px] flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-[#B9653B]" />
                  <span>Nav Language: {lang === "hi" ? "हिन्दी" : "English"}</span>
                </button>
                <Link
                  to="/about"
                  onClick={() => setIsMobileOpen(false)}
                  className="text-xs text-[#A93120] hover:underline font-semibold min-h-[44px] flex items-center"
                >
                  About Archive →
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

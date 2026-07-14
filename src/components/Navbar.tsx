"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Locations", href: "/#explore" },
  { label: "AI Recommender", href: "/#ai-finder" },
  { label: "Compare Markets", href: "/#compare" },
  { label: "EMI Advisor", href: "/#emi-advisor" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl overflow-hidden border border-gold-500/30 shadow-gold bg-[#06060c] flex-shrink-0 relative">
            <img
              src="/logo.jpg"
              alt="SIR Logo"
              className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-xl tracking-wide text-white leading-none">
              SMART INDIA
            </span>
            <span className="font-sans font-bold text-xs tracking-[0.25em] text-[#C9A84C] mt-0.5 leading-none">
              REALTORS
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-sm font-semibold text-[#8888a8] hover:text-[#C9A84C] transition-colors duration-300 relative py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Quick Contact CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919985730999"
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 hover:border-[#C9A84C]/50 text-white hover:text-[#C9A84C] transition-all duration-300"
            title="Call Support"
          >
            <Phone size={16} />
          </a>
          <a
            href="https://wa.me/919985730999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center gap-2"
          >
            <MessageSquare size={16} />
            <span>Chat Live</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white rounded-xl border border-white/10 hover:border-[#C9A84C]/50"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass shadow-glass border-t border-white/10 py-6 px-6 flex flex-col gap-4 animate-slide-up bg-[#0c0c14]/95">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-sans text-base font-semibold text-[#8888a8] hover:text-[#C9A84C] py-2 transition-colors border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-4 mt-2">
            <a
              href="tel:+919985730999"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-white font-semibold"
            >
              <Phone size={16} />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/919985730999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-gold justify-center"
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

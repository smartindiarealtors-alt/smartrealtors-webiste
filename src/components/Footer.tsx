"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Sparkles, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#030306] border-t border-white/10 pt-20 pb-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">
        {/* Brand logo & Description */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-gold-500/30 shadow-gold bg-[#06060c] flex-shrink-0 relative">
              <img
                src="/logo.jpg"
                alt="SIR Logo"
                className="w-full h-full object-cover"
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
          <p className="text-[#8888a8] text-sm leading-relaxed">
            India's most premium location-first property explorer platform. Connecting you to verified residential, villa, and commercial properties with AI insights.
          </p>
          <div className="flex gap-3">
            {/* Social SVGs */}
            <a
              href="#"
              className="w-9 h-9 rounded-lg border border-white/5 hover:border-[#C9A84C]/50 text-[#8888a8] hover:text-[#C9A84C] flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg border border-white/5 hover:border-[#C9A84C]/50 text-[#8888a8] hover:text-[#C9A84C] flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg border border-white/5 hover:border-[#C9A84C]/50 text-[#8888a8] hover:text-[#C9A84C] flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-heading text-lg font-bold mb-6">Quick Navigation</h4>
          <ul className="space-y-3 text-sm font-semibold text-[#8888a8]">
            <li>
              <Link href="/#explore" className="hover:text-[#C9A84C] transition-colors">
                Explore Locations
              </Link>
            </li>
            <li>
              <Link href="/#ai-finder" className="hover:text-[#C9A84C] transition-colors">
                AI Match Finder
              </Link>
            </li>
            <li>
              <Link href="/#compare" className="hover:text-[#C9A84C] transition-colors">
                Market Comparison
              </Link>
            </li>
            <li>
              <Link href="/#emi-advisor" className="hover:text-[#C9A84C] transition-colors">
                Mortgage Calculator
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-heading text-lg font-bold mb-6">Support Center</h4>
          <ul className="space-y-4 text-sm font-semibold text-[#8888a8]">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#C9A84C]" />
              <a href="tel:+919985730999" className="hover:text-[#C9A84C] transition-colors text-white">
                +91 9985-730-999
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#C9A84C]" />
              <a href="mailto:smartindiarealtors@gmail.com" className="hover:text-[#C9A84C] transition-colors text-white">
                smartindiarealtors@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-[#C9A84C] mt-0.5" />
              <span className="leading-relaxed">
                #503, 5th Floor, AVN Residency, Whitefields, Kondapur, Hyderabad - 500081
              </span>
            </li>
          </ul>
        </div>

        {/* Accolades */}
        <div className="space-y-6">
          <h4 className="text-white font-heading text-lg font-bold mb-6">Accreditation</h4>
          <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-[#C9A84C]">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="text-xs text-white font-bold">100% RERA Verified</div>
              <div className="text-[10px] text-[#8888a8] mt-0.5">Compliant Gated Communities Only</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#8888a8] text-xs font-semibold">
        <span>© 2026 Smart India Realtors. All Rights Reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

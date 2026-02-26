"use client"

import Link from "next/link"
import Logo from "./Logo"
import { FaTwitter } from "react-icons/fa"

export default function Navbar() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex justify-center">
      <nav className="w-full max-w-6xl bg-lexa-glass backdrop-blur-2xl border border-lexa-glass rounded-3xl px-4 py-3 flex justify-between items-center relative overflow-hidden shadow-2xl shadow-lexa-mid/10">
        <div className="absolute inset-0 bg-gradient-to-r from-lexa-mid/5 via-transparent to-lexa-mid/5 rounded-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl" />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-lexa-accent via-transparent to-lexa-accent opacity-20 animate-pulse" />

        <Link href="/" className="relative z-10 flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
          <Logo size={32} />
          <div className="text-lexa-text text-lg sm:text-xl font-bold font-inter tracking-wider">
            lexa.money
          </div>
        </Link>

        <div className="flex items-center gap-2 relative z-10">
          <a
            href="https://x.com/lexadotmoney"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lexa-muted hover:text-lexa-accent transition-all duration-300 hover:scale-110 p-2 rounded-xl hover:bg-lexa-bg-soft/30"
            aria-label="Twitter"
          >
            <FaTwitter size={16} />
          </a>
          <button className="px-4 py-2 bg-gradient-lexa hover:shadow-lexa-glow-sm text-lexa-bg text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-lexa-mid/30 relative overflow-hidden group">
            <span className="relative z-10">Join Waitlist</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      </nav>
    </div>
  )
}

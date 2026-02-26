import NeonIsometricMaze from "./neonGraphic"
import { FaGlobe } from "react-icons/fa"
import Navbar from "../components/Navbar"
import Link from "next/link"

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-hidden bg-lexa-bg relative font-inter">
      <NeonIsometricMaze />

      <div className="absolute inset-0 flex flex-col bg-gradient-to-b from-lexa-bg-mid/40 to-lexa-bg/80">
        <Navbar />

        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="relative w-full max-w-6xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-inter mb-6 sm:mb-8 tracking-tight leading-tight drop-shadow-2xl">
              <div className="overflow-hidden mb-2">
                <span className="inline-block animate-slide-up text-lexa-text relative">
                  Prediction Markets,
                </span>
              </div>
              <div className="overflow-hidden -mt-2 sm:-mt-3 md:-mt-4">
                <span className="inline-block animate-slide-up-delayed gradient-text relative italic">
                  Reimagined.
                </span>
              </div>
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-1 sm:w-2 h-1 sm:h-2 bg-lexa-accent rounded-full animate-ping opacity-75 shadow-[0_0_10px_rgba(95,211,255,0.5)]" />
              <div className="absolute -top-1 sm:-top-2 -right-2 sm:-right-4 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-lexa-glow rounded-full animate-pulse shadow-[0_0_8px_rgba(110,231,255,0.4)]" />
              <div className="absolute -bottom-2 sm:-bottom-4 left-1/4 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-lexa-cyan rounded-full animate-bounce shadow-[0_0_6px_rgba(62,199,244,0.3)]" />
            </h1>
          </div>

          <div className="relative mb-8 sm:mb-12 animate-fade-in-up">
            <p className="text-lg sm:text-xl md:text-2xl text-lexa-text-secondary font-inter max-w-4xl font-weight-500 leading-relaxed px-4">
              Ask. Allocate. Win — Lexa turns your beliefs into real positions
              instantly.
            </p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-lexa-accent/50 to-transparent opacity-0 animate-pulse" />
          </div>

          <div className="w-full max-w-md animate-fade-in-up-delayed flex flex-col items-center">
            <Link
              href="https://app.lexa.money"
              className="group px-8 py-4 bg-gradient-lexa hover:shadow-lexa-glow text-lexa-bg font-semibold rounded-xl transition-all duration-300 hover:scale-105 border border-lexa-glass focus:ring-2 focus:ring-lexa-glow focus:ring-offset-2 focus:ring-offset-lexa-bg"
            >
              <span className="flex items-center gap-2">
                Enter Trenches
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>

        <footer className="w-full px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 border-t border-lexa-border/50 font-inter backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center text-lexa-muted text-xs sm:text-sm gap-4 md:gap-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <FaGlobe className="text-lexa-accent text-sm sm:text-lg" />
              <span className="font-weight-500 text-lexa-text-secondary text-center md:text-left">
                © 2025 lexa.money — Prediction Markets, Reimagined
              </span>
            </div>
            <div className="flex gap-4 sm:gap-6 md:gap-8">
              <a
                href="#"
                className="hover:text-lexa-accent transition-all duration-300 font-weight-500 hover:scale-105"
              >
                Terms
              </a>
              <a
                href="#"
                className="hover:text-lexa-accent transition-all duration-300 font-weight-500 hover:scale-105"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-lexa-accent transition-all duration-300 font-weight-500 hover:scale-105"
              >
                Support
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

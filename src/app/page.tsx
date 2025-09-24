import NeonIsometricMaze from "./neonGraphic"
import { FaTwitter, FaGlobe, FaBars } from "react-icons/fa"
import Link from "next/link"

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-hidden bg-gradient-primary relative font-inter">
      <NeonIsometricMaze />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col bg-gradient-to-b from-gray-900/30 to-black/50">
        {/* Mercury-Style Navbar */}
        <div className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex justify-center">
          <nav className="w-full max-w-6xl bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex justify-between items-center relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-2xl"></div>
            
            {/* Logo Section */}
            <div className="relative z-10 flex items-center gap-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-usdt to-usdt-dark rounded-xl flex items-center justify-center shadow-lg shadow-usdt/30 group-hover:shadow-usdt/50 transition-all duration-300">
                  <span className="text-black font-bold text-lg">L</span>
                </div>
                <div className="text-white text-2xl sm:text-3xl font-bold font-inter tracking-wider">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    lexa.money
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 relative z-10">
            <Link href="/dashboard" className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-lg relative group">
                Dashboard
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-usdt group-hover:w-full transition-all duration-300"></div>
              </Link>
              
              <a href="https://x.com/lexadotmoney" className="text-gray-400 hover:text-usdt transition-all duration-300 hover:scale-110 p-2">
                <FaTwitter size={20} />
              </a>
              
              {/* CTA Button */}
              <button className="px-6 py-3 bg-gradient-to-r from-usdt to-usdt-dark hover:from-usdt-dark hover:to-usdt text-black font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-usdt/30 hover:shadow-usdt/50 relative overflow-hidden group">
                <span className="relative z-10">Join Waitlist</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-gray-300 hover:text-white transition-colors duration-300 p-2">
                <FaBars size={20} />
              </button>
            </div>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="relative w-full max-w-6xl">
            {/* Central Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-usdt rounded-full flex items-center justify-center animate-pulse">
                <span className="text-black font-bold text-2xl sm:text-3xl">L</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-inter mb-6 sm:mb-8 
              tracking-tight leading-tight font-weight-700
              drop-shadow-2xl">
              
              {/* First Line */}
              <div className="overflow-hidden mb-2">
                <span className="inline-block animate-slide-up bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent
                  animate-float relative">
                  Smart & Accessible
                </span>
              </div>
              
              {/* Second Line with emphasis */}
              <div className="overflow-hidden -mt-2 sm:-mt-3 md:-mt-4">
                <span className="inline-block animate-slide-up-delayed bg-gradient-to-r from-usdt via-usdt-light to-usdt bg-clip-text text-transparent
                  animate-gradient-x animate-float-delayed relative italic">
                  Perpetual Markets
                </span>
              </div>
              
              {/* Enhanced floating particles effect */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-1 sm:w-2 h-1 sm:h-2 bg-usdt rounded-full animate-ping opacity-75 shadow-[0_0_10px_rgba(29,191,115,0.5)]"></div>
              <div className="absolute -top-1 sm:-top-2 -right-2 sm:-right-4 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-usdt-light rounded-full animate-pulse shadow-[0_0_8px_rgba(29,191,115,0.4)]"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 left-1/4 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-usdt rounded-full animate-bounce shadow-[0_0_6px_rgba(29,191,115,0.3)]"></div>
            </h1>
          </div>
          
          <div className="relative mb-8 sm:mb-12 animate-fade-in-up">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-inter max-w-4xl font-weight-500 leading-relaxed px-4
              bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent
              animate-gradient-x">
              The ultimate perpetual aggregator. Best prices, lowest fees, maximum alpha.
            </p>
            {/* Subtle underline for subtitle */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-usdt/50 to-transparent opacity-0 animate-pulse"></div>
          </div>

          {/* Waitlist Section */}
          <div className="w-full max-w-md animate-fade-in-up-delayed">
            <div className="flex flex-col sm:flex-row gap-3 p-4 bg-black/20 backdrop-blur-md rounded-xl border border-white/10">
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="@twitter_handle" 
                  className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 border border-white/20 rounded-lg focus:border-usdt focus:outline-none transition-colors duration-300"
                />
              </div>
              <button className="px-6 py-3 bg-usdt hover:bg-usdt-dark text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Let&apos;s go
              </button>            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 border-t border-gray-700/50 font-inter backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm gap-4 md:gap-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <FaGlobe className="text-usdt text-sm sm:text-lg" />
              <span className="font-weight-500 text-gray-300 text-center md:text-left">
                © 2025 lexa.money - Perpetual Market Aggregator
              </span>
            </div>
            <div className="flex gap-4 sm:gap-6 md:gap-8">
              <a href="#" className="hover:text-usdt transition-all duration-300 font-weight-500 hover:scale-105">Terms</a>
              <a href="#" className="hover:text-usdt transition-all duration-300 font-weight-500 hover:scale-105">Privacy</a>
              <a href="#" className="hover:text-usdt transition-all duration-300 font-weight-500 hover:scale-105">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

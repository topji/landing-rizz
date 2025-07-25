import NeonIsometricMaze from "./neonGraphic"
import { FaTwitter, FaGlobe, FaArrowRight } from "react-icons/fa"
import Link from "next/link"

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-hidden bg-gradient-primary relative font-inter">
      <NeonIsometricMaze />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col bg-gradient-to-b from-gray-900/30 to-black/50">
        {/* Navbar */}
        <nav className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex justify-between items-center z-10 bg-gradient-to-b from-gray-800/90 to-gray-800/0 backdrop-blur-sm">
          <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold font-inter tracking-wider">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              rizz.money
            </span>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <a href="https://x.com/rizzdotmoney" className="text-gray-400 hover:text-usdt transition-all duration-300 hover:scale-110">
              <FaTwitter size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="relative w-full max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-inter mb-6 sm:mb-8 
              tracking-tight leading-tight font-weight-700
              drop-shadow-2xl">
              
              {/* First Line - INTERNET CAPITAL */}
              <div className="overflow-hidden mb-2">
                <span className="inline-block animate-slide-up bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent
                  animate-float relative">
                  INTERNET CAPITAL
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 blur-xl opacity-0 animate-pulse"></div>
                </span>
              </div>
              
              {/* Second Line - MARKETS with enhanced styling */}
              <div className="overflow-hidden -mt-2 sm:-mt-3 md:-mt-4">
                <span className="inline-block animate-slide-up-delayed bg-gradient-to-r from-usdt via-usdt-light to-usdt bg-clip-text text-transparent
                  animate-gradient-x animate-float-delayed relative">
                  MARKETS
                  {/* Enhanced animated underline effect */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-usdt to-transparent 
                    animate-underline transform origin-left shadow-[0_0_10px_rgba(29,191,115,0.5)]"></div>
                  {/* Additional glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-usdt/30 via-transparent to-usdt/30 blur-2xl opacity-0 animate-pulse"></div>
                </span>
              </div>
              
              {/* Enhanced floating particles effect */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-1 sm:w-2 h-1 sm:h-2 bg-usdt rounded-full animate-ping opacity-75 shadow-[0_0_10px_rgba(29,191,115,0.5)]"></div>
              <div className="absolute -top-1 sm:-top-2 -right-2 sm:-right-4 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-usdt-light rounded-full animate-pulse shadow-[0_0_8px_rgba(29,191,115,0.4)]"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 left-1/4 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-usdt rounded-full animate-bounce shadow-[0_0_6px_rgba(29,191,115,0.3)]"></div>
            </h1>
          </div>
          
          <div className="relative mb-8 sm:mb-12 animate-fade-in-up">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-inter max-w-4xl font-weight-500 leading-relaxed px-4
              bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent
              animate-gradient-x">
              Democratizing access to Real World
              <br />
              Assets
            </p>
            {/* Subtle underline for subtitle */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-usdt/50 to-transparent opacity-0 animate-pulse"></div>
          </div>

          <Link href="https://app.rizz.money" className="w-full max-w-sm sm:max-w-md">
            <button className="group relative w-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 
              text-white text-base sm:text-lg md:text-xl font-inter font-semibold tracking-wider
              transition-all duration-500 ease-in-out
              uppercase font-weight-600
              rounded-xl sm:rounded-2xl
              overflow-hidden
              animate-fade-in-up-delayed
              hover:scale-105
              border border-white/20
              hover:border-usdt/60
              shadow-lg
              hover:shadow-2xl">
              
              {/* Glassy background with reduced transparency */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-white/30 
                group-hover:border-usdt/70 group-hover:shadow-[0_0_20px_rgba(29,191,115,0.4)] 
                transition-all duration-500"></div>
              
              {/* Inner glow on hover */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-usdt/15 via-transparent to-usdt/15 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              {/* Tech grid pattern */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="w-full h-full bg-[linear-gradient(90deg,transparent_50%,rgba(29,191,115,0.1)_50%),linear-gradient(0deg,transparent_50%,rgba(29,191,115,0.1)_50%)] bg-[length:15px_15px]"></div>
              </div>
              
              {/* Button content */}
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-white group-hover:text-usdt transition-colors duration-500 font-mono tracking-widest">
                  ENTER_THE_TRENCHES
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white/60 group-hover:bg-usdt rounded-full animate-pulse transition-colors duration-500"></div>
                  <FaArrowRight className="text-white/80 group-hover:text-usdt transition-all duration-500 group-hover:translate-x-1" size={14} />
                </div>
              </div>
              
              {/* Sci-fi corner accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-white/30 group-hover:border-usdt/60 transition-colors duration-500"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-white/30 group-hover:border-usdt/60 transition-colors duration-500"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-white/30 group-hover:border-usdt/60 transition-colors duration-500"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-white/30 group-hover:border-usdt/60 transition-colors duration-500"></div>
              
              {/* Subtle data indicators */}
              <div className="absolute top-1 left-1 text-xs text-usdt/40 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                0x1DBF
              </div>
              <div className="absolute bottom-1 right-1 text-xs text-usdt/40 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                READY
              </div>
            </button>
          </Link>
        </div>

        {/* Footer */}
        <footer className="w-full px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 border-t border-gray-700/50 font-inter backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm gap-4 md:gap-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <FaGlobe className="text-usdt text-sm sm:text-lg" />
              <span className="font-weight-500 text-gray-300 text-center md:text-left">
                © 2025 rizz.money - Democratizing Real World Assets
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


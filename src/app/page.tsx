import NeonIsometricMaze from "./neonGraphic"
import { FaTwitter, FaTelegram } from "react-icons/fa"
import Link from "next/link"
export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden bg-black relative">
      <NeonIsometricMaze />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col bg-gradient-to-b from-purple-900/30 to-black/50">
        {/* Navbar */}
        <nav className="w-full px-6 py-4 flex justify-between items-center z-10 bg-gradient-to-b from-purple-900/80 to-purple-900/0">
          <div className="text-white text-2xl font-bold font-orbitron tracking-wider">
            rizz Money
          </div>
          <div className="flex gap-4">
            <a href="https://twitter.com" className="text-white hover:text-purple-700 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://telegram.org" className="text-white hover:text-purple-700 transition-colors">
              <FaTelegram size={24} />
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-6 
            bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent
            tracking-tight leading-tight">
            Where only the top degens gamble
          </h1>
          <p className="text-l md:text-2xl text-white/40 mb-8 font-space-grotesk">
            Stop being the Exit liquidity. 
          </p>
          <Link href="https://docs.rizz.money">
            <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-purple-100 px-8 py-3 
              rounded-lg text-lg font-orbitron tracking-wide 
              hover:from-purple-700 hover:to-purple-900 
              transition-all duration-300 ease-in-out
              shadow-lg shadow-purple-500/20 
              hover:shadow-purple-500/40 hover:scale-105
              uppercase font-bold
              animate-pulse-subtle
              relative
              group
              overflow-hidden">
              <span className="relative z-10">Enter the Arena</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-purple-800/40 
                transform scale-x-0 group-hover:scale-x-100 
                transition-transform duration-500 origin-left"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent 
                blur-xl group-hover:opacity-100 opacity-0 
                transition-opacity duration-500"></div>
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}


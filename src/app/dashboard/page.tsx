"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { 
  FaChartLine, 
  FaDollarSign, 
  FaUsers, 
  FaExchangeAlt,
  FaGlobe,
  FaTwitter,
  FaChevronRight,
  FaEye,
  FaFilter,
  FaSearch,
  FaCog,
  FaBell,
  FaWallet,
  FaChartBar,
  FaPercentage,
  FaLongArrowAltUp,
  FaLongArrowAltDown,
  FaCircle,
  FaPlay,
  FaPause,
  FaSync,
  FaArrowUp as FaTrendingUp,
} from "react-icons/fa"

interface MarketData {
  symbol: string
  price: number
  change24h: number
  volume24h: number
  marketCap: number
  openInterest: number
  fundingRate: number
  longShortRatio: number
  high24h: number
  low24h: number
  trades24h: number
  lastUpdate: string
}

interface StatsData {
  totalVolume24h: number
  totalOpenInterest: number
  activeMarkets: number
  averageFundingRate: number
  totalTraders: number
  totalTrades: number
  totalLiquidation24h: number
  averageLeverage: number
  topGainer: string
  topLoser: string
  marketDominance: { btc: number; eth: number; others: number }
}

export default function Dashboard() {
  const [markets, setMarkets] = useState<MarketData[]>([])
  const [stats, setStats] = useState<StatsData>({
    totalVolume24h: 0,
    totalOpenInterest: 0,
    activeMarkets: 0,
    averageFundingRate: 0,
    totalTraders: 0,
    totalTrades: 0,
    totalLiquidation24h: 0,
    averageLeverage: 0,
    topGainer: "",
    topLoser: "",
    marketDominance: { btc: 0, eth: 0, others: 0 }
  })
  const [loading, setLoading] = useState(true)
  const [autoRefresh, setAutoRefresh] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("volume24h")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  // Mock data with more realistic and diverse data
  useEffect(() => {
    const mockMarkets: MarketData[] = [
      {
        symbol: "BTC-PERP",
        price: 43250.50,
        change24h: 2.34,
        volume24h: 1250000000,
        marketCap: 850000000000,
        openInterest: 2500000000,
        fundingRate: 0.01,
        longShortRatio: 1.25,
        high24h: 44100.00,
        low24h: 42000.00,
        trades24h: 125000,
        lastUpdate: new Date().toISOString()
      },
      {
        symbol: "ETH-PERP",
        price: 2650.75,
        change24h: -1.23,
        volume24h: 890000000,
        marketCap: 320000000000,
        openInterest: 1800000000,
        fundingRate: -0.005,
        longShortRatio: 0.87,
        high24h: 2750.00,
        low24h: 2600.00,
        trades24h: 98000,
        lastUpdate: new Date().toISOString()
      },
      {
        symbol: "SOL-PERP",
        price: 98.45,
        change24h: 5.67,
        volume24h: 450000000,
        marketCap: 42000000000,
        openInterest: 750000000,
        fundingRate: 0.02,
        longShortRatio: 1.45,
        high24h: 102.00,
        low24h: 92.00,
        trades24h: 67000,
        lastUpdate: new Date().toISOString()
      },
      {
        symbol: "AVAX-PERP",
        price: 35.20,
        change24h: 3.12,
        volume24h: 280000000,
        marketCap: 13000000000,
        openInterest: 320000000,
        fundingRate: 0.008,
        longShortRatio: 1.12,
        high24h: 36.50,
        low24h: 33.80,
        trades24h: 45000,
        lastUpdate: new Date().toISOString()
      },
      {
        symbol: "MATIC-PERP",
        price: 0.85,
        change24h: -2.45,
        volume24h: 150000000,
        marketCap: 8000000000,
        openInterest: 180000000,
        fundingRate: -0.012,
        longShortRatio: 0.76,
        high24h: 0.89,
        low24h: 0.82,
        trades24h: 32000,
        lastUpdate: new Date().toISOString()
      },
      {
        symbol: "LINK-PERP",
        price: 14.30,
        change24h: 1.89,
        volume24h: 220000000,
        marketCap: 8000000000,
        openInterest: 250000000,
        fundingRate: 0.005,
        longShortRatio: 1.08,
        high24h: 14.80,
        low24h: 13.90,
        trades24h: 38000,
        lastUpdate: new Date().toISOString()
      },
      {
        symbol: "ADA-PERP",
        price: 0.52,
        change24h: 4.12,
        volume24h: 180000000,
        marketCap: 18000000000,
        openInterest: 200000000,
        fundingRate: 0.015,
        longShortRatio: 1.33,
        high24h: 0.54,
        low24h: 0.49,
        trades24h: 28000,
        lastUpdate: new Date().toISOString()
      },
      {
        symbol: "DOT-PERP",
        price: 7.85,
        change24h: -0.89,
        volume24h: 120000000,
        marketCap: 10000000000,
        openInterest: 150000000,
        fundingRate: -0.003,
        longShortRatio: 0.92,
        high24h: 8.10,
        low24h: 7.60,
        trades24h: 22000,
        lastUpdate: new Date().toISOString()
      }
    ]

    const mockStats: StatsData = {
      totalVolume24h: 3240000000,
      totalOpenInterest: 7800000000,
      activeMarkets: 156,
      averageFundingRate: 0.003,
      totalTraders: 125000,
      totalTrades: 2500000,
      totalLiquidation24h: 45000000,
      averageLeverage: 12.5,
      topGainer: "SOL-PERP",
      topLoser: "MATIC-PERP",
      marketDominance: { btc: 45.2, eth: 28.7, others: 26.1 }
    }

    // Simulate loading
    setTimeout(() => {
      setMarkets(mockMarkets)
      setStats(mockStats)
      setLoading(false)
    }, 1000)
  }, [])

  // Auto-refresh functionality
  useEffect(() => {
    if (!autoRefresh) return

    const interval = setInterval(() => {
      // Simulate real-time updates
      setMarkets(prevMarkets => 
        prevMarkets.map(market => ({
          ...market,
          price: market.price * (1 + (Math.random() - 0.5) * 0.02), // ±1% price variation
          lastUpdate: new Date().toISOString()
        }))
      )
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [autoRefresh])

  const formatNumber = (num: number, decimals: number = 2) => {
    if (num >= 1e9) return (num / 1e9).toFixed(decimals) + 'B'
    if (num >= 1e6) return (num / 1e6).toFixed(decimals) + 'M'
    if (num >= 1e3) return (num / 1e3).toFixed(decimals) + 'K'
    return num.toFixed(decimals)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 8
    }).format(price)
  }

  const formatPercentage = (num: number) => {
    return `${num >= 0 ? '+' : ''}${num.toFixed(2)}%`
  }

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const filteredMarkets = markets
    .filter(market => 
      market.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortBy as keyof MarketData] as number
      const bValue = b[sortBy as keyof MarketData] as number
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue
    })

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-primary flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-usdt rounded-full flex items-center justify-center animate-pulse mb-4">
            <span className="text-black font-bold text-2xl">L</span>
          </div>
          <p className="text-white text-xl">Loading dashboard...</p>
          <div className="mt-4 w-64 bg-gray-700 rounded-full h-2">
            <div className="bg-usdt h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Enhanced Navbar */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex justify-center">
        <nav className="w-full max-w-7xl bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex justify-between items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-2xl"></div>
          
          <div className="relative z-10 flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-usdt to-usdt-dark rounded-xl flex items-center justify-center shadow-lg shadow-usdt/30 group-hover:shadow-usdt/50 transition-all duration-300">
                <span className="text-black font-bold text-lg">L</span>
              </div>
              <div className="text-white text-2xl sm:text-3xl font-bold font-inter tracking-wider">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  lexa.money
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="text-usdt font-medium text-lg">Dashboard</span>
              <div className="w-2 h-2 bg-usdt rounded-full animate-pulse"></div>
            </div>
            
            <button 
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                autoRefresh 
                  ? 'bg-usdt/20 text-usdt' 
                  : 'bg-gray-700/50 text-gray-400 hover:text-white'
              }`}
              title={autoRefresh ? 'Pause auto-refresh' : 'Start auto-refresh'}
            >
              {autoRefresh ? <FaPause size={16} /> : <FaPlay size={16} />}
            </button>
            
            <a href="https://x.com/lexadotmoney" className="text-gray-400 hover:text-usdt transition-all duration-300 hover:scale-110 p-2">
              <FaTwitter size={20} />
            </a>
            
            <button className="px-6 py-3 bg-gradient-to-r from-usdt to-usdt-dark hover:from-usdt-dark hover:to-usdt text-black font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-usdt/30 hover:shadow-usdt/50 relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                <FaWallet size={16} />
                Connect Wallet
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 md:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  Perpetual Markets Dashboard
                </h1>
                <p className="text-gray-400 text-lg">
                  Real-time data and analytics for perpetual futures markets
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2">
                  <FaSync className="text-usdt" />
                  <span className="text-white text-sm">Last updated: {formatTime(markets[0]?.lastUpdate || '')}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="p-2 bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-xl text-gray-400 hover:text-white transition-colors">
                    <FaBell size={16} />
                  </button>
                  <button className="p-2 bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-xl text-gray-400 hover:text-white transition-colors">
                    <FaCog size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-usdt/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-usdt/20 rounded-xl group-hover:bg-usdt/30 transition-colors">
                  <FaDollarSign className="text-usdt text-xl" />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
                  <FaTrendingUp size={12} />
                  +12.5%
                </div>
              </div>
              <h3 className="text-gray-400 text-sm font-medium mb-1">24h Volume</h3>
              <p className="text-2xl font-bold text-white">${formatNumber(stats.totalVolume24h)}</p>
              <div className="mt-2 text-xs text-gray-500">
                vs yesterday: +${formatNumber(stats.totalVolume24h * 0.125)}
              </div>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-usdt/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-usdt/20 rounded-xl group-hover:bg-usdt/30 transition-colors">
                  <FaChartLine className="text-usdt text-xl" />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
                  <FaTrendingUp size={12} />
                  +8.2%
                </div>
              </div>
              <h3 className="text-gray-400 text-sm font-medium mb-1">Open Interest</h3>
              <p className="text-2xl font-bold text-white">${formatNumber(stats.totalOpenInterest)}</p>
              <div className="mt-2 text-xs text-gray-500">
                Avg leverage: {stats.averageLeverage}x
              </div>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-usdt/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-usdt/20 rounded-xl group-hover:bg-usdt/30 transition-colors">
                  <FaGlobe className="text-usdt text-xl" />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
                  <FaTrendingUp size={12} />
                  +3
                </div>
              </div>
              <h3 className="text-gray-400 text-sm font-medium mb-1">Active Markets</h3>
              <p className="text-2xl font-bold text-white">{stats.activeMarkets}</p>
              <div className="mt-2 text-xs text-gray-500">
                Top: {stats.topGainer} (+5.67%)
              </div>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-usdt/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-usdt/20 rounded-xl group-hover:bg-usdt/30 transition-colors">
                  <FaPercentage className="text-usdt text-xl" />
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
                  <FaCircle size={8} />
                  Avg
                </div>
              </div>
              <h3 className="text-gray-400 text-sm font-medium mb-1">Avg Funding Rate</h3>
              <p className="text-2xl font-bold text-white">{formatPercentage(stats.averageFundingRate * 100)}</p>
              <div className="mt-2 text-xs text-gray-500">
                8h rate: {formatPercentage(stats.averageFundingRate * 100)}
              </div>
            </div>
          </div>

          {/* Additional Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-red-500/20 rounded-xl">
                  <FaExchangeAlt className="text-red-400 text-xl" />
                </div>
                <span className="text-red-400 text-sm font-medium">24h</span>
              </div>
              <h3 className="text-gray-400 text-sm font-medium mb-1">Liquidations</h3>
              <p className="text-2xl font-bold text-white">${formatNumber(stats.totalLiquidation24h)}</p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-usdt/20 rounded-xl">
                  <FaUsers className="text-usdt text-xl" />
                </div>
                <span className="text-green-400 text-sm font-medium">+2.1%</span>
              </div>
              <h3 className="text-gray-400 text-sm font-medium mb-1">Active Traders</h3>
              <p className="text-2xl font-bold text-white">{formatNumber(stats.totalTraders)}</p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-usdt/20 rounded-xl">
                  <FaChartBar className="text-usdt text-xl" />
                </div>
                <span className="text-green-400 text-sm font-medium">+15.3%</span>
              </div>
              <h3 className="text-gray-400 text-sm font-medium mb-1">24h Trades</h3>
              <p className="text-2xl font-bold text-white">{formatNumber(stats.totalTrades)}</p>
            </div>
          </div>

          {/* Market Dominance Chart */}
          <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Market Dominance</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">BTC</span>
                  <span className="text-sm font-medium text-white">{stats.marketDominance.btc}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-usdt h-2 rounded-full transition-all duration-1000" 
                    style={{ width: `${stats.marketDominance.btc}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">ETH</span>
                  <span className="text-sm font-medium text-white">{stats.marketDominance.eth}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-1000" 
                    style={{ width: `${stats.marketDominance.eth}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Others</span>
                  <span className="text-sm font-medium text-white">{stats.marketDominance.others}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gray-500 h-2 rounded-full transition-all duration-1000" 
                    style={{ width: `${stats.marketDominance.others}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Markets Table */}
          <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white">Top Perpetual Markets</h2>
                  <p className="text-gray-400 text-sm">Real-time market data and analytics</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                    <input
                      type="text"
                      placeholder="Search markets..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-usdt focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white focus:border-usdt focus:outline-none"
                  >
                    <option value="volume24h">Volume</option>
                    <option value="change24h">24h Change</option>
                    <option value="openInterest">Open Interest</option>
                    <option value="fundingRate">Funding Rate</option>
                  </select>
                  
                  <button
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    className="p-2 bg-gray-800/50 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                  >
                    <FaFilter size={14} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Market</th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">24h Change</th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">24h High/Low</th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Volume</th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Open Interest</th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Funding Rate</th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">L/S Ratio</th>
                    <th className="px-6 py-4 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredMarkets.map((market) => (
                    <tr key={market.symbol} className="hover:bg-gray-800/30 transition-colors duration-200 group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-usdt to-usdt-dark rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                            <span className="text-black font-bold text-sm">
                              {market.symbol.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{market.symbol}</div>
                            <div className="text-xs text-gray-400">Perpetual</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="text-sm font-medium text-white">{formatPrice(market.price)}</div>
                        <div className="text-xs text-gray-400">{formatTime(market.lastUpdate)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className={`flex items-center justify-end text-sm font-medium ${
                          market.change24h >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {market.change24h >= 0 ? <FaLongArrowAltUp className="mr-1" /> : <FaLongArrowAltDown className="mr-1" />}
                          {formatPercentage(market.change24h)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="text-sm text-white">{formatPrice(market.high24h)}</div>
                        <div className="text-xs text-gray-400">{formatPrice(market.low24h)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="text-sm text-white">${formatNumber(market.volume24h)}</div>
                        <div className="text-xs text-gray-400">{formatNumber(market.trades24h)} trades</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="text-sm text-white">${formatNumber(market.openInterest)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className={`text-sm font-medium ${
                          market.fundingRate >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {formatPercentage(market.fundingRate * 100)}
                        </div>
                        <div className="text-xs text-gray-400">8h rate</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="text-sm text-white">{market.longShortRatio.toFixed(2)}</div>
                        <div className="text-xs text-gray-400">
                          {market.longShortRatio > 1 ? 'Long bias' : 'Short bias'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <button className="inline-flex items-center px-4 py-2 bg-usdt/20 hover:bg-usdt/30 text-usdt text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 group">
                          <FaEye className="mr-2" size={12} />
                          Trade
                          <FaChevronRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Enhanced Footer */}
          <footer className="mt-12 text-center">
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
      </div>
    </div>
  )
}

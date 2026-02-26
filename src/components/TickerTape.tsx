import React, { useEffect, useRef, memo } from 'react';

interface TickerTapeProps {
  symbols?: Array<{
    proName: string;
    title: string;
  }>;
  colorTheme?: 'light' | 'dark';
  locale?: string;
  isTransparent?: boolean;
  showSymbolLogo?: boolean;
  displayMode?: 'adaptive' | 'compact' | 'regular';
}

function TickerTape({ 
  symbols = [
    {
      "proName": "BINANCE:BTCUSDT",
      "title": "Bitcoin"
    },
    {
      "proName": "BINANCE:ETHUSDT", 
      "title": "Ethereum"
    },
    {
      "proName": "BINANCE:SOLUSDT",
      "title": "Solana"
    },
    {
      "proName": "BINANCE:BNBUSDT",
      "title": "BNB"
    },
    {
      "proName": "BINANCE:XRPUSDT",
      "title": "XRP"
    },
    {
      "proName": "BINANCE:DOGEUSDT",
      "title": "Dogecoin"
    },
    {
      "proName": "MEXC:HYPEUSDT",
      "title": "Hype"
    }
  ],
  colorTheme = 'dark',
  locale = 'en',
  isTransparent = true,
  showSymbolLogo = true,
  displayMode = 'adaptive'
}: TickerTapeProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = container.current;
    if (!currentContainer) return;

    // Clear previous widget
    currentContainer.innerHTML = '';

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols,
      colorTheme,
      locale,
      largeChartUrl: "",
      isTransparent,
      showSymbolLogo,
      displayMode
    });
    
    currentContainer.appendChild(script);

    // Cleanup function
    return () => {
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
    };
  }, [symbols, colorTheme, locale, isTransparent, showSymbolLogo, displayMode]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a 
          href="https://www.tradingview.com/markets/" 
          rel="noopener nofollow" 
          target="_blank"
        >
          <span className="blue-text">Ticker tape</span>
        </a>
        <span className="trademark"> by TradingView</span>
      </div>
    </div>
  );
}

export default memo(TickerTape);

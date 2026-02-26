import React, { useEffect, useRef, memo } from 'react';

interface TradingViewWidgetProps {
  symbol?: string;
}

function TradingViewWidget({ 
  symbol = "BINANCE:BTCUSDT"
}: TradingViewWidgetProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = container.current;
    if (!currentContainer) return;

    // Clear previous widget
    currentContainer.innerHTML = '';

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "allow_symbol_change": false,
        "calendar": false,
        "details": false,
        "hide_side_toolbar": false,
        "hide_top_toolbar": false,
        "hide_legend": false,
        "hide_volume": false,
        "hotlist": false,
        "interval": "15",
        "locale": "en",
        "save_image": false,
        "style": "1",
        "symbol": "${symbol}",
        "theme": "dark",
        "timezone": "Etc/UTC",
        "backgroundColor": "#0F0F0F",
        "gridColor": "rgba(242, 242, 242, 0.06)",
        "withdateranges": false,
        "compareSymbols": [],
        "studies": [
          "STD;TEMA"
        ],
        "width": "100%",
        "height": "100%",
        "autosize": true
      }`;
    
    currentContainer.appendChild(script);

    // Cleanup function
    return () => {
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
    };
  }, [symbol]);

  return (
    <div className="tradingview-widget-container w-full h-full" ref={container}>
      <div className="tradingview-widget-container__widget w-full h-full"></div>
      <div className="tradingview-widget-copyright">
        <a 
          href={`https://www.tradingview.com/symbols/${symbol.split(':')[1]}/?exchange=${symbol.split(':')[0]}`} 
          rel="noopener nofollow" 
          target="_blank"
        >
          <span className="blue-text">Crypto price</span>
        </a>
        <span className="trademark"> by TradingView</span>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);

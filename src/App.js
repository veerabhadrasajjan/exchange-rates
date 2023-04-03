import React, { useState, useEffect } from "react";

import "./ExchangeRateWidget.css";
import FromCurrency from "./FromCurrency";
import ToCurrency from "./ToCurrency";
import ExchangeRate from "./ExchangeRate";

function ExchangeRateWidget() {
  const [baseCurrency, setBaseCurrency] = useState("ETH");
  const [quoteCurrency, setQuoteCurrency] = useState("USDT");
  const [baseValue, setBaseValue] = useState(1);
  const [quoteValue, setQuoteValue] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    async function fetchExchangeRate() {
      const response = await fetch(
        `https://api.coinbase.com/v2/exchange-rates?currency=${baseCurrency}`
      );
      const data = await response.json();
      const rate = data.data.rates[quoteCurrency];
      setExchangeRate(rate);
    }

    fetchExchangeRate();
  }, [baseCurrency, quoteCurrency]);

  useEffect(() => {
    if (exchangeRate) {
      setQuoteValue(baseValue * exchangeRate);
    }
  }, [baseValue, exchangeRate]);



  return (

    <div className="App">
      <div className="ExchangeRateWidget">
        <h2 className="ExchangeRateWidget__title">Exchange Rate Widget</h2>


        <FromCurrency
          baseCurrency={baseCurrency}
          setBaseCurrency={setBaseCurrency}
          baseValue={baseValue}
          setBaseValue={setBaseValue} />


        <ToCurrency
          quoteCurrency={quoteCurrency}
          setQuoteCurrency={setQuoteCurrency}
          quoteValue={quoteValue}
          setQuoteValue={setQuoteValue} />


        <ExchangeRate
          exchangeRate={exchangeRate}
          baseCurrency={baseCurrency}
          quoteCurrency={quoteCurrency} />

      </div>
    </div>
  );
}

export default ExchangeRateWidget;

import React from 'react';

const ToCurrency = ({ quoteCurrency, setQuoteCurrency, quoteValue, setQuoteValue }) => {
  const handleCurrencyChange = (event) => {
    setQuoteCurrency(event.target.value);
  };

  const handleValueChange = (event) => {
    setQuoteValue(event.target.value);
  };

  return (
    <div className="ExchangeRateWidget__input-group">
      <label className="ExchangeRateWidget__label" htmlFor="quote-currency-select">Quote Currency:</label>
      <select
        className="ExchangeRateWidget__select ExchangeRateWidget__select--quote form-select"
        id="quote-currency-select"
        value={quoteCurrency}
        onChange={handleCurrencyChange}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <input
        className="ExchangeRateWidget__readonly-input form-control"
        type="number"
        value={quoteValue}
        data-dqa="quote_value"
        data-testid="quote-value-input"
        onChange={handleValueChange}
        readOnly
      />
    </div>
  );
};

export default ToCurrency;

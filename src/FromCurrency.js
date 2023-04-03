import React from 'react';

const FromCurrency = ({ baseCurrency, setBaseCurrency, baseValue, setBaseValue }) => {
  const handleCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleValueChange = (event) => {
    setBaseValue(event.target.value);
  };

  return (
    <div className="ExchangeRateWidget__input-group">
      <label className="ExchangeRateWidget__label" htmlFor="base-currency-select">Base Currency:</label>
      <select
        className="ExchangeRateWidget__select ExchangeRateWidget__select--base form-select"
        id="base-currency-select"
        value={baseCurrency}
        onChange={handleCurrencyChange}
      >
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="LTC">LTC</option>
      </select>
      <input
        className="ExchangeRateWidget__input form-control"
        type="number"
        value={baseValue}
        data-dqa="base_value"
        data-testid="base-value-input"
        onChange={handleValueChange}
      />
    </div>
  );
};

export default FromCurrency;

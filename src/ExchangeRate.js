import React from 'react';

const ExchangeRate = ({ exchangeRate, baseCurrency, quoteCurrency }) => {

    return (
        <div className="ExchangeRateWidget__exchange-rate">
            {exchangeRate && (
                <p className="ExchangeRateWidget__exchange-rate-text" data-testid="exchange-rate">
                    1 {baseCurrency} = {exchangeRate} {quoteCurrency}
                </p>
            )}
        </div>
    );
};

export default ExchangeRate;

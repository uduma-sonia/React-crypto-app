import React from "react";

const Coin = ({ image, title, symbol, price, priceChange, marketcap }) => {
  return (
    <div className="coin-container">
      <div>
        <div className="coin-name">
          <img src={image} alt="crypto-coin" />
          <h3>
            {title}
            {/* <span> {symbol} </span> */}
          </h3>

          <p className="symbol">{symbol}</p>
        </div>

        <div className="coin-data">
          <p className="coin-price">${price.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}

          <p className="coin-marketcap">${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;

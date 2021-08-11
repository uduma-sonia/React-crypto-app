import React from "react";
import "../Coin.css";

const Coin = ({ image, title, symbol, price, priceChange, marketcap }) => {
  return (
    <div className="coin-container">
      {/* ACTUAL COIN */}
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto-coin" />
          <h1>
            {title}
            <span> {symbol} </span>{" "}
          </h1>
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

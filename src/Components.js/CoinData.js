import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import Header from "./TitleBar";

import "../Styles.css";

const CoinData = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );

      setCoins(res.data);
    } catch (error) {
      alert(error);
    }
  };

  // FUNCTION TO FILTER COINS SEARCHED
  const filteredCoins = coins.filter((coin) =>
    coin.name.toUpperCase().includes(search.toUpperCase())
  );

  // FUNCTION TO REFRESH PAGE
  const refreshPage = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="coin-app">
      <section className="navbar">
        <h1 className="logo">CoinPerk</h1>

        <form>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            className="coin-input"
            placeholder="search"
          />
        </form>

        <div>
          <button className="btn-mode">
            <i className="fas fa-moon"></i>
          </button>

          <button className="btn-refresh" onClick={refreshPage}>
            <i class="fas fa-sync-alt"></i>
          </button>

          <button>
            <p>usd</p>
          </button>
        </div>
      </section>

      <Header />

      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            title={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
};

export default CoinData;

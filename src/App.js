import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./Coin";
import logo from "./logo.png";
import Header from "./Header";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => alert("Error"));
  }, []);

  // FUNCTION FOR SEARCH
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // FUNCTION TO FILTER COINS SEARCHED
  const filteredCoins = coins.filter((coin) =>
    coin.name.toUpperCase().includes(search.toUpperCase())
  );

  // FUNCTION TO REFRESH PAGE
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="coin-app">
      <div className="search-coin">
        <h1 className="coin-text">
          <span>
            <img className="logo" src={logo} alt="logo" />
          </span>
          Crypto Trackers
        </h1>

        <form>
          <input
            onChange={handleChange}
            type="text"
            className="coin-input"
            placeholder="search"
          />
        </form>
      </div>

      <div>
        <button className="btn-refresh" onClick={refreshPage}>
          Refresh
        </button>
      </div>

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
}

export default App;

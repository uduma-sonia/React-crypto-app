import React from "react";
import "../Header.css";

const Header = () => {
  return (
    <div className="coin-header">
      <div className="coin-header-row">
        <div className="coin-name">
          <h4>Name</h4>
        </div>

        <div className="coin-data-row">
          <h4 className="price">Price</h4>
          <h4 className="percent">24h %</h4>
          <h4 className="marketcap">Market cap</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;

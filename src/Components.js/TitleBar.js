import React from "react";

const Header = () => {
  return (
    <div className="coin-title">
      <div>
        <div className="title-name">
          <h4>Name</h4>
        </div>

        <div className="title-data">
          <h4 className="price">Price</h4>
          <h4 className="percent">24h %</h4>
          <h4 className="marketcap">Market cap</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;

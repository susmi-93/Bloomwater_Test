//Component that renders ticker name and price values
import React from "react";
import TickerItem from "./TickerItem";
const TickerHeader = props => {
  let { name } = props;
  return (
    <div className="tv-ticker-item-change__head">
      <span
        className="tv-ticker-item-change__title tv-ticker-item-change__title--uppercase apply-overflow-tooltip"
        dir="ltr"
      >
        {name}
      </span>
      <TickerItem name={name} type="price"></TickerItem>
    </div>
  );
};

export default TickerHeader;

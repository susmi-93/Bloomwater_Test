//Outer container which renders header and ticker items
import React, { Component } from "react";
import TickerHeader from "./TickerHeader";
import TickerItem from "./TickerItem";
class Ticker extends Component {
  state = {};
  render() {
    let name = this.props.name;
    return (
      <a
        className="tv-ticker-item-change tv-widget-ticker__item quote-ticker-inited"
        href="/"
      >
        <TickerHeader name={name} />
        <TickerItem name={name} type="percentage" />
      </a>
    );
  }
}

export default Ticker;

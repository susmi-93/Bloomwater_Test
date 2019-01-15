import React, { Component } from 'react';
import {items} from './api/variable';
import Ticker from './components/TickerContainer';
import './App.css';

class App extends Component {
  renderItems = () => {
    var tickers = []
    let i =0;
    for(var key in items){ 
      if(items.hasOwnProperty(key)){
        tickers.push(
          <Ticker key = {i++} name={key}/>
        );
      }
    }
    return tickers;
  }
  render() {
    return (
          <div className="tv-widget-ticker tv-widget-ticker--fixed-width tv-widget-ticker--header">
            <div className="tv-widget-ticker__row">
              {this.renderItems()}
            </div>
          </div>
    );
  }
}

export default App;

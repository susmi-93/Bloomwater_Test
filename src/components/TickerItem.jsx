// Component that renders percentage, volume and price values in a ticker
import React,{Component} from "react";
import Facade from '../api/Facade';
class TickerItem extends Component {
  dataFacade= new Facade(this.props.name);;
  values;
  constructor(props) {
    super(props);
    this.state = { 
        percentage: 0,
        volume:0,
        change: '',
        price: 0,
        isPercent: props.type === "percentage"
     }
}

interval;
loadData = (i, interval)=>{
  if (i >= 5) {
    if (interval) {
      clearInterval(interval);
    }
    return;
  }
  let newState = {};
  if (this.state.isPercent) {
    newState.percentage = this.dataFacade.nextVal("percentage", i);
    newState.volume = this.dataFacade.nextVal("volume", i);
    if (newState.percentage > 0) {
      newState.change = "increment";
    } else if (newState.percentage < 0) {
      newState.change = "decrement";
    } else {
      newState.change = "equal";
    }
  } else {
    let previousPrice = this.state.price;
    newState.price = this.dataFacade.nextVal("price", i);
    if (previousPrice > newState.price) {
      newState.change = "decrement";
    } else if (previousPrice < newState.price){
      newState.change = "increment";
    } else {
      newState.change = "equal";
    }
  }
  this.setState(newState);
};

componentDidMount = () => {
  let i=-1;
    let interval=setInterval(()=>{this.loadData(++i, interval)}, 5000);
    this.loadData(++i, interval);
};

elementClasses = {
    'price': {
        'increment': 'tv-ticker-item-change__last--growing',
        'decrement': 'tv-ticker-item-change__last--falling',
        'equal' : ''
    },
    'percentage': {
        'increment': 'tv-ticker-item-change__body--up',
        'decrement': 'tv-ticker-item-change__body--down',
        'equal' : ''
    }
}
  render() { 
    let {percentage, volume,change,price,isPercent} = this.state;
    let {type} = this.props;
    let className = `tv-ticker-item-change__body js-symbol-change-direction ${this.elementClasses[type][change]}`;
    if (!isPercent) {
      className = `tv-ticker-item-change__last js-symbol-last apply-overflow-tooltip ${this.elementClasses[type][change]}`;
    }
    return isPercent?( 
      <div className={className}>
      <span className="tv-ticker-item-change__change-direction">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8">
          <path
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeWidth="2"
            d="m1 6 5-4 5 4"
          />
        </svg>
      </span>
      <span className="tv-ticker-item-change__change-percent js-symbol-change-pt">
        {percentage}%
      </span>
      <span className="tv-ticker-item-change__change js-symbol-change">
        {volume}
      </span>
    </div>
    ):(<span className={className}>
    {price}
  </span>);
  }
}
 
export default TickerItem;

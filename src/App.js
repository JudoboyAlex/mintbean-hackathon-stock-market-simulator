import React from 'react';
import Header from './components/Header';
import MarketTime from './components/MarketTime';
import Balance from './components/Balance';
import stockData from './util/stockData';
import 'normalize.css';
import './App.css';
import StockQuotes from './components/StockQuotes';


function App() {
  return (
    <div>
      <Header />
      <MarketTime />
      <Balance />
      {stockData.map((stock,index) =>
      <StockQuotes 
      key = {index}
      name = {stock.name}
      price = {stock.price}
      />
      )}
    </div>
  );
}

export default App;

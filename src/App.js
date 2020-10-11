import React from 'react';
import Header from './components/Header';
import MarketTime from './components/MarketTime';
import Balance from './components/Balance';
import StockQuotes from './components/StockQuotes';
import StockQuotesContainer from './components/StockQuotesContainer';
import StockOwnedContainer from './components/StockOwnedContainer';
import stockData from './util/stockData';
import 'normalize.css';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <MarketTime />
        </Grid>
        <Grid item xs={12}>
          <Balance />
        </Grid>
        <Grid item xs={6}>
          <StockQuotesContainer />
        </Grid>
        <Grid item xs={6}>
          <StockOwnedContainer />
        </Grid>
      </Grid>
  </div>

  );
}

export default App;
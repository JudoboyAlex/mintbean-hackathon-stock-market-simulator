import React,  { useState }  from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import BuyStocksContainer from './components/BuyStocksContainer';
import SellStocksContainer from './components/SellStocksContainer';
import 'normalize.css';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function App() {

  const [availableFunds, setAvailableFunds] = useState(100000)

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
          <Balance availableFunds={availableFunds} />
        </Grid>
        <Grid item xs={6}>
          <BuyStocksContainer availableFunds={availableFunds} setAvailableFunds={setAvailableFunds} />
        </Grid>
        <Grid item xs={6}>
          <SellStocksContainer availableFunds={availableFunds} setAvailableFunds={setAvailableFunds} />
        </Grid>
      </Grid>
  </div>

  );
}

export default App;
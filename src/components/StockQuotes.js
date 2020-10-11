import React, { useState, useEffect } from 'react';
import './StockQuotes.css'; 
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StockQuotes = ({name, price}) => {

    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(1),
        },
      }));
    const classes = useStyles();
    const theme = createMuiTheme({
        palette: {
          primary: {main: '#00e676'},
        },
      });
    // useEffect(() => {
    //     fetchStocks()
    // },[])

    // const fetchStocks = async() => {
    //     const res = await(stockData)
    //     const data = await res.json()
    // }

   

    return(
        <div>
            <ul>
                <li>{name}</li>
                <li>${price}</li>
                <li>
                    <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary" className={classes.margin}>
                    BUY
                    </Button>
                </ThemeProvider>
                </li>
            </ul>
        </div>
    )
}

export default StockQuotes;
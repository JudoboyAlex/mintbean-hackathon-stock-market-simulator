import React, { useState, useEffect } from 'react';
import './BuyStocks.css'; 
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import stockData from '../../util/stockData';
import { useDispatch } from 'react-redux';
import { getStocksOwned } from '../../slices/stocksOwnedSlice';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#28df99',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const BuyStocks = ({ availableFunds, setAvailableFunds }) => {

    const [sharesToBuy, setSharesToBuy] = useState(stockData);

    const dispatch = useDispatch();
    
    const updateOwnedValue = (index, owned) => {
        setSharesToBuy((sharesToBuy) =>
            sharesToBuy.map((share, i) =>
            i === index
                ? {
                    ...share,
                    owned
                }
                : share
            )
        );
    };

    const updateChangingStockPrice = () => {
        let randomPriceMultiplier = Math.random() * 1 + 1;
        let randomMathOperator = ["*", "/"][Math.floor(Math.random()*2)]
        setSharesToBuy((sharesToBuy) =>
            sharesToBuy.map((p) => {
                return { ... p,
                    price: eval(p.price + randomMathOperator + randomPriceMultiplier).toFixed(2)
                }
            })
        )
    }

    useEffect(()=> {
        setInterval(function(){updateChangingStockPrice()},3000);
    },[])

    console.log(sharesToBuy)

    const handleChange = (event, index) => {
        updateOwnedValue(index, parseInt(event.target.value));
    }
   
    const handleClick = (event, index) => {
        event.preventDefault();
        updateAvailableFunds();
        updateOwnedValue(index, 0);
    }

    const updateAvailableFunds = () => {
        let stockBought = sharesToBuy.filter((stock) => 
            stock.owned
        )
        let availableFundsCalculated = availableFunds - stockBought[0].price * stockBought[0].owned
        
        if(availableFundsCalculated < 0){
            alert("Available Funds Cannot Be Negative Balance")  
        } else {
            dispatch(getStocksOwned(sharesToBuy));
            setAvailableFunds(availableFundsCalculated);
        }
    }

    const formattedShareOwnedValue = sharesToBuy.owned == 0 ? sharesToBuy.owned == "" : sharesToBuy.owned

    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
        table: {
            minWidth: 700,
            },
    }));

    const classes = useStyles();

    const theme = createMuiTheme({
            palette: {
                primary: {main: '#00e676'},
            },
        });

    return( 
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow className="tableHeader">
                        <StyledTableCell >Stock Name</StyledTableCell>
                        <StyledTableCell align="right">Current Price</StyledTableCell>
                        <StyledTableCell align="right">Shares</StyledTableCell>
                        <StyledTableCell align="right">Order</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {sharesToBuy.map((stock, index) => (
                    <StyledTableRow key = {index} >
                        <StyledTableCell component="th" scope="row">
                            {stock.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">${stock.price}</StyledTableCell>
                        <StyledTableCell align="right"><input type="number" value ={formattedShareOwnedValue} onChange={event => handleChange(event, index)}></input></StyledTableCell>
                        <StyledTableCell align="right">
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary" className={classes.margin} 
                                disabled={stock.owned === 0 || !stock.owned}
                                onClick={event => handleClick(event, index)}>
                                    BUY
                                </Button>
                            </ThemeProvider>
                        </StyledTableCell>
                    </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BuyStocks;
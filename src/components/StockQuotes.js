import React, { useState } from 'react';
import './StockQuotes.css'; 
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import stockData from '../util/stockData';
import { useDispatch } from 'react-redux';
import { getStocksOwned } from '../slices/stocksOwnedSlice';

const StockQuotes = () => {

    const [sharesToBuy, setSharesToBuy] = useState(stockData);
    const dispatch = useDispatch();
    let values = stockData;
    
    const handleChange = (event, index) => {
        values[index].owned = parseInt(event.target.value);
        setSharesToBuy(stockData);
    }
    
    const handleClick = (event, index) => {
        event.preventDefault();
        dispatch(getStocksOwned(sharesToBuy));
        // values[index].owned = 0;
    }

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
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
                    <TableRow>
                        <StyledTableCell>Stock Name</StyledTableCell>
                        <StyledTableCell align="right">Current Price</StyledTableCell>
                        <StyledTableCell align="right">Shares</StyledTableCell>
                        <StyledTableCell align="right">Order</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {stockData.map((stock, index) => (
                    <StyledTableRow key = {index} >
                        <StyledTableCell component="th" scope="row">
                            {stock.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">${stock.price}</StyledTableCell>
                        <StyledTableCell align="right"><input type="number" onChange={event => handleChange(event, index)}></input></StyledTableCell>
                        <StyledTableCell align="right">
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary" className={classes.margin} onClick={event => handleClick(event, index)}>
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

export default StockQuotes;
import React, { useState, useEffect } from 'react';
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
import { green } from '@material-ui/core/colors';

const StockQuotes = () => {

    const [shares, setShares] = useState(stockData);
    const [sharesBought, setSharesBought] = useState("");

    const handleChange =(event, index) => {
        let values = stockData;
        values[index].owned = parseInt(event.target.value);
        setShares(values);
      }
    
    const handleClick = (event) => {
        event.preventDefault();
        setSharesBought(shares.filter((data) => data.owned))
    }

    console.log(sharesBought)

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
                                <Button variant="contained" color="primary" className={classes.margin} onClick={handleClick}>
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
import React, { useState, useEffect } from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StocksOwned = ({stockInfo, availableFunds, setAvailableFunds}) => {
    const [ownedStock, setOwnedStock] = useState([]);
    console.log(stockInfo)

    const newStock = stock => {
        const newStocks = [ ...ownedStock, {stock}];
        setOwnedStock(newStocks)
    }

    const sellStock = index => {
        const newStocks = [...ownedStock];

        let soldStock =
        newStocks.map((stockList, i) => {
            return stockList.stock.filter(() =>{
                return index == i;
            })
        })

        let soldAmount = availableFunds + soldStock[0][0].price * soldStock[0][0].owned
        
        let deletedStock = 
        newStocks.map((stockList, i) => {
            return stockList.stock.filter(() =>{
                return index != i;
            })
        })

        let formattedDeletedStock = Object
        .keys(deletedStock)
        .map(index => ({
            'stock': deletedStock[index]
        }));

        setAvailableFunds(soldAmount)
        setOwnedStock(formattedDeletedStock)
    }
    
    useEffect(() => {
        if(stockInfo[0]){
        newStock(stockInfo)
        } else {
            setOwnedStock([]);
        }
    },[stockInfo])

    console.log(ownedStock)

    const handleClick = (event, index) => {
        event.preventDefault();
        sellStock(index);
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
                    secondary: {main: '#f50057'},
                },
            });
    
    return  (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Stock Name</StyledTableCell>
                            <StyledTableCell align="right">Book Cost</StyledTableCell>
                            <StyledTableCell align="right">Shares</StyledTableCell>
                            <StyledTableCell align="right">Order</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    { {ownedStock} ? 
                    <TableBody>
                    {ownedStock.map((myStocks,index)=>{
                        return myStocks.stock.map((myStock)=>{
                            return (
                                <StyledTableRow key = {index} >
                                    <StyledTableCell component="th" scope="row">
                                        {myStock.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">${myStock.price}</StyledTableCell>
                                    <StyledTableCell align="right">{myStock.owned}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <ThemeProvider theme={theme}>
                                            <Button variant="contained" color="secondary" className={classes.margin} onClick={event => handleClick(event, index)}>
                                                SELL
                                            </Button>
                                        </ThemeProvider>
                                    </StyledTableCell>
                                </StyledTableRow>       
                                )
                        })
                    })}
                    </TableBody>
                    :
                    <TableBody> </TableBody>                
                    }
                </Table>
            </TableContainer>
        ) 
}   

export default StocksOwned;
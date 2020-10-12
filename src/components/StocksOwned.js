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

const StocksOwned = ({stockInfo}) => {
    console.log(stockInfo)
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
                    { {stockInfo} ? 
                    <TableBody>
                    {stockInfo.map((stock, index) => (
                        <StyledTableRow key = {index} >
                            <StyledTableCell component="th" scope="row">
                                {stock.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">${stock.price}</StyledTableCell>
                            <StyledTableCell align="right">{stock.owned}</StyledTableCell>
                            <StyledTableCell align="right">
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" color="secondary" className={classes.margin}>
                                        SELL
                                    </Button>
                                </ThemeProvider>
                            </StyledTableCell>
                        </StyledTableRow>
                        ))}
                    </TableBody>
                    :
                    <TableBody> </TableBody>                
                    }
                </Table>
            </TableContainer>
        ) 
}   

export default StocksOwned;
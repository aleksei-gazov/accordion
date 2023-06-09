import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {styled} from '@mui/material/styles';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,

    },
}));
const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export const THead = () => {
    return (
        <TableHead>
            <TableRow>
                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                <StyledTableCell align="right">Calories</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
        </TableHead>
    );
};

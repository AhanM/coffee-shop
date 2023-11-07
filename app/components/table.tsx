"use client";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  neighborhood: string,
  tableSize: string,
  wifi: string,
  outlets: string,
  hours: string,
) {
  return { name, neighborhood, tableSize, wifi, outlets, hours };
}

/*
Data: Name, table size, wifi, outlets, rating, hours
*/

const rows = [
  createData('Atlas Cafe', 'Mission', 'Large', 'Yes', 'Yes', '9am - 5pm'),
  createData('Four Barrel', 'Mission', 'Small', 'No', 'No', '10am - 3pm'),
  createData('The Social Study', 'NOPA', 'Small', 'Yes', 'No', '9am - 4pm'),
  createData('The Mill', 'NOPA', 'Large', 'Yes', 'No', '8am - 6pm'),
  createData('Matching Half', 'NOPA', 'Small',  'No', 'Yes', 'N/A'),
  createData('Cafe International', 'Lower Haight', 'Large', 'No', 'No', '7am-5pm'),
];

export default function CoffeeShopTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Coffee Shop ☕️</StyledTableCell>
            <StyledTableCell align="right">Neighborhood 🌎</StyledTableCell>
            <StyledTableCell align="right">Table Size 📚</StyledTableCell>
            <StyledTableCell align="right">Wifi 📡</StyledTableCell>
            <StyledTableCell align="right">Outlets 🔌</StyledTableCell>
            <StyledTableCell align="right">Hours ⏳</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.neighborhood}</StyledTableCell>
              <StyledTableCell align="right">{row.tableSize}</StyledTableCell>
              <StyledTableCell align="right">{row.wifi}</StyledTableCell>
              <StyledTableCell align="right">{row.outlets}</StyledTableCell>
              <StyledTableCell align="right">{row.hours}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

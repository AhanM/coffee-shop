"use client";

import * as React from 'react'
import { Container } from '@/node_modules/@mui/material/index';
import Paper from '@mui/material/Paper';

// components
import MainTable from './components/table';
import ResponsiveAppBar from './components/appbar';

// theme
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Paper elevation={0}>
        <ResponsiveAppBar />

        <Container>
          <MainTable />
        </Container>
      </Paper>
  </ThemeProvider>
  )
}

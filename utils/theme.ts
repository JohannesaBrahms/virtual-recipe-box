'use client';

import { Inter } from 'next/font/google';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = extendTheme({
  cssVarPrefix: 'mui-poc',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#fcba03',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#eeeeee',
        },
      },
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;

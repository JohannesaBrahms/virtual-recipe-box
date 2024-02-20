import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#fcba03',
    },
    mode: 'light',
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;

import type { Metadata } from 'next';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Experimental_CssVarsProvider as CssvarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/utils/theme';
import Header from './components/Header';
import Copyright from './components/Copyright';
import ModeSwitcher from './components/ModeSwitcher';

export const metadata: Metadata = {
  title: 'Virtual Recipe Box',
  description: 'Recipe Management and Sharing Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: 'mui', enableCssLayer: true }}>
          <CssvarsProvider theme={theme} defaultMode="light">
            {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Header />
            {children}
            <Copyright />
          </CssvarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

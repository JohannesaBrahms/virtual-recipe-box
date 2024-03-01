import type { Metadata } from 'next';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Experimental_CssVarsProvider as CssvarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/utils/theme';
import Header from '@/components/header/header';
import Copyright from '@/components/copyright';
import { Container } from '@mui/material';

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
            <Container>
              {/* <Header /> */}
              {children}
              <Copyright />
            </Container>
          </CssvarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

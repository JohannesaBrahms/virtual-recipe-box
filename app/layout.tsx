import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from '@/utils/ThemeRegistry';

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
        <ThemeRegistry options={{ key: 'mui-theme', prepend: true }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}

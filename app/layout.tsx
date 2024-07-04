import type { Metadata } from 'next';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard for custom applications',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Theme accentColor='teal' radius='none' appearance='dark'>
          <main className=''>{children}</main>
        </Theme>
      </body>
    </html>
  );
}

/* eslint-disable camelcase */
import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter, Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import '../styles/prism.css';
import { ThemeProvider } from '@/context/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk',
});

export const metadata: Metadata = {
  title: 'DevFlow',
  description:
    'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and build your own community. Explore topics in web development, mobile app development, data science, and more.',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
  openGraph: {
    images: '/assets/images/demo.jpg',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: 'primary-gradient',
              footerActionLink:
                'primary-text-gradient hover hover:text-primary-500',
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sujal Arora - Portfolio',
  description: 'Personal portfolio of Sujal Arora - CSE Undergrad, Web Developer, and AI Enthusiast',
  keywords: 'Sujal Arora, Portfolio, Web Developer, AI, CSE, SRM University',
  authors: [{ name: 'Sujal Arora' }],
  openGraph: {
    title: 'Sujal Arora - Portfolio',
    description: 'Personal portfolio of Sujal Arora - CSE Undergrad, Web Developer, and AI Enthusiast',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sujal Arora - Portfolio',
    description: 'Personal portfolio of Sujal Arora - CSE Undergrad, Web Developer, and AI Enthusiast',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'U.E.N. Complejo Educativo Stella Cechini',
    template: '%s | Stella Cechini',
  },
  description:
    'Sitio web oficial de la U.E.N. Complejo Educativo Stella Cechini — Barquisimeto, Estado Lara. Biblioteca virtual, banco de recursos educativos y más.',
  keywords: ['Stella Cechini', 'colegio Barquisimeto', 'Lara', 'biblioteca virtual', 'recursos educativos'],
  openGraph: {
    type: 'website',
    locale: 'es_VE',
    siteName: 'Complejo Educativo Stella Cechini',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable} dark`}>
      <body className="bg-school-bg text-school-text font-body min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

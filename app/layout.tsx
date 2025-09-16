import type { Metadata } from 'next'
import { Inter, Playfair_Display, Lato, Roboto_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
})

const robotoMono = Roboto_Mono({ 
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Saphalata - Systematic, Evidence-Driven Investing for Families Who Value Legacy',
  description: 'SEBI-regulated AIF delivering superior systematic investing outcomes for HNIs, UHNI, and family offices through evidence-based factor-driven strategies.',
  keywords: 'SEBI AIF, systematic investing, factor investing, HNI, UHNI, family office, wealth management, India',
  authors: [{ name: 'Saphalata' }],
  openGraph: {
    title: 'Saphalata - Systematic Investing Excellence',
    description: 'SEBI-regulated AIF delivering superior systematic investing outcomes for families who value legacy.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saphalata - Systematic Investing Excellence',
    description: 'SEBI-regulated AIF delivering superior systematic investing outcomes for families who value legacy.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${lato.variable} ${robotoMono.variable}`}>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}

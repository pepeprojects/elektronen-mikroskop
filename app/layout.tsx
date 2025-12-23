import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'elektronen-mikroskop.com - Präparationstechnik für Elektronenmikroskopie',
  description: 'Ihr Partner für Präparationstechnik und Zubehör für die Elektronenmikroskopie. Probenbeschichtung, Probenreinigung, Werkzeuge und mehr.',
  keywords: ['Elektronenmikroskopie', 'REM', 'SEM', 'Probenpräparation', 'Beschichtung', 'Probenbeschichtung'],
  icons: {
    icon: [
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicons/safari-pinned-tab.svg' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#b900f3',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'elektronen-mikroskop.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <meta name="msapplication-TileColor" content="#00aba9" />
      </head>
      <body className={sourceSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

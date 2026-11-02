import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const pageTitle = '80 Cafés da Manhã Saudáveis para Substituir o Pão'
const pageDescription =
  'Varie seu café da manhã com 80 receitas práticas, saudáveis e rápidas para substituir o pão sem cair na mesmice.'
const socialImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social-1780358555181-878787878-c10PpbzV9KcrV1XP24lcYfYXbVHe1E.webp'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  authors: [{ name: 'Chef Mônica Maciel' }],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: socialImage, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [socialImage],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fffaf5',
  userScalable: true,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

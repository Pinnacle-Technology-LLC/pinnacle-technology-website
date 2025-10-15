import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header, Footer } from '@/components/layout'
import { generateSEOMeta, StructuredData } from '@/components/seo'
import { ParticlesBackground } from '@/components/ui'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = generateSEOMeta({
  title: 'Pinnacle Technology LLC',
  description:
    'We partner with organizations to help extend and modernize their data platforms, integrating automation, AI, and secure engineering practices that scale.',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <StructuredData
          type="organization"
          data={{
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              availableLanguage: ['English'],
            },
          }}
        />
        <StructuredData type="website" data={{}} />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <ParticlesBackground />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

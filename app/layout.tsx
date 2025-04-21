import { twMerge } from 'tailwind-merge'
import { Open_Sans } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'

import type React from 'react'
import type { ReactNode } from 'react'

import './globals.css'

import Favicon from '@/public/favicon.png'

const inter = Open_Sans({
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Hoomo - Мобильные приложения и e-commerce платформы',
  description: 'Создаем современные решения под ключ для вашего бизнеса',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning className={twMerge('scroll-smooth', inter.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-sans antialiased bg-gray-950 text-gray-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

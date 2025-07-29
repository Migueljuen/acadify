import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from './AuthProvider'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Acadify',
    default: 'Tutor Booking Platform',
  },
  description: 'Acadify | Tutor Booking Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </head>

        <body className='bg-[#fcfaf4] dark:bg-black/30 transition-all duration-300 flex-1 '>
          <ThemeProvider attribute="class" enableSystem defaultTheme='system'>
            {children}
          </ThemeProvider>

        </body>
      </html>
    </AuthProvider>
  )
}
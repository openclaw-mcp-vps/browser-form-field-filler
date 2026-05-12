import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FormFiller — Auto-fill forms across any website',
  description: 'Browser extension that learns form patterns and auto-fills personal and business info across websites. Perfect for developers, QA testers, and sales teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a70ffcde-aeea-41b9-9afa-99c315bb04bf"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

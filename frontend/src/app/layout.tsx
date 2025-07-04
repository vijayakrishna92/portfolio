// src/app/layout.tsx
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-800 text-gray-100">
        <Header />
        <main className="flex-1 container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

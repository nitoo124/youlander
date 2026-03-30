import "./globals.css"
import { Inter, Space_Grotesk } from "next/font/google"
import { cn } from "@/lib/utils"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(inter.variable, spaceGrotesk.variable)}>

      <body className="bg-primary">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
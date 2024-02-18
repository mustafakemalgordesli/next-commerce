import "./globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import Header from "@/components/header";
import NextAuthProvider from "@/contexts/NextAuthProvider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children, session }: Readonly<{
  children: React.ReactNode;
  session: any;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextAuthProvider session={session}>
          <Header />
          {children}
        </NextAuthProvider>

      </body>
    </html>
  )
}

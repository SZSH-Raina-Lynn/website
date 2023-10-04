import React from 'react'
import { Inter } from 'next/font/google'
import Header from '../../components/frames/Header'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

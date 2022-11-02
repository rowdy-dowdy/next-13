import AuthLayoutContext from "./authContext";
import { Roboto } from "@next/font/google";
import Head from "next/head";
import './globals.css'

const roboto = Roboto({
  weight: '400'
})

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <title>Next 13</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <AuthLayoutContext>{children}</AuthLayoutContext>
      </body>
    </html>
  )
}
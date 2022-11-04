import AuthLayoutContext from './authContext';
// import { Roboto } from "@next/font/google";
import Head from 'next/head';
import '@/styles/dist.css';
import { use } from 'react';

// const roboto = Roboto({
//   weight: '400'
// })

async function logger() {
  try {
    const res = await fetch('/api/auth/me')

    return res.json()
  } catch (error) {
    return null
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = use(logger())
  // console.log(user)

  return (
    // <html className={roboto.className}>
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <AuthLayoutContext data={user}>{children}</AuthLayoutContext>
      </body>
    </html>
  );
}

import AuthLayoutContext from './authContext';
// import { Roboto } from "@next/font/google";
import Head from 'next/head';
import '@/styles/dist.css';

// const roboto = Roboto({
//   weight: '400'
// })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html className={roboto.className}>
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <AuthLayoutContext>{children}</AuthLayoutContext>
      </body>
    </html>
  );
}

import { Roboto } from "@next/font/google";
import '../globals.css'

const roboto = Roboto({
  weight: '400'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='table w-full min-h-screen h-0'>
      <div className="table-cell w-full h-full">
        {children}
      </div>
    </div>
  )
}

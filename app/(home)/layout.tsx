import Menu from '../../components/layout/header'
import { Roboto } from "@next/font/google";
import '../globals.css'
import style from "./page.module.css";

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
        <div className="flex w-full h-full">
          <Menu />
          <div className="flex-grow min-w-0">
            <div className={`w-full h-full shadow ${style.rootLayout}`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Menu () {
  const pathname = usePathname()

  return (
    <div className="bg-gray-50 px-4">
      <div className="py-12 flex space-x-4">
        <div className="w-12 h-12 rounded-full bg-rose-600">
          {/* <img src="" alt="" /> */}
        </div>
        <div>
          <h3 className="text-xl font-semibold">Việt Hùng</h3>
          <p className="text-sm">Sr. Web developer</p>
        </div>
      </div>

      <div>
        <p className="mb-4">Menu</p>
        <div className="flex flex-col space-y-4 text-gray-600">
          <Link href={"/"} className={`flex items-center space-x-3 -mx-4 px-4 py-2 border-l-4 border-y border-transparent ${pathname == '/' ? "border-l-rose-500 text-rose-500" : ""}`}>
            <span className="icon w-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 22h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2zM5 5h2v2h10V5h2v15H5V5z"></path><path d="m11 13.586-1.793-1.793-1.414 1.414L11 16.414l5.207-5.207-1.414-1.414z"></path></svg>
            </span>
            <span>My Tasks</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
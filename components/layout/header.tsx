'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Menu () {
  const pathname = usePathname()
  const links = [
    {path: '/', name: 'My Tasks', svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 22h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2zM5 5h2v2h10V5h2v15H5V5z"></path><path d="m11 13.586-1.793-1.793-1.414 1.414L11 16.414l5.207-5.207-1.414-1.414z"></path></svg>`},
    {path: '/inbox', name: 'Inbox', svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M16 2H8C4.691 2 2 4.691 2 8v12a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 13c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v7z"></path><circle cx="9.5" cy="11.5" r="1.5"></circle><circle cx="14.5" cy="11.5" r="1.5"></circle></svg>`},
    {path: '/projects', name: 'Projects', svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="m8 16 5.991-2L16 8l-6 2z"></path></svg>`},
    {path: '/standups', name: 'Standups', svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path></svg>`},
    {path: '/mettings', name: 'Mettings', svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 7h14v2H5V7z"></path></svg>`, notification: 2},
    {path: '/settings', name: 'Settings', svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M13 5h9v2h-9zM2 7h7v2h2V3H9v2H2zm7 10h13v2H9zm10-6h3v2h-3zm-2 4V9.012h-2V11H2v2h13v2zM7 21v-6H5v2H2v2h3v2z"></path></svg>`},
  ]

  return (
    <div className="bg-gray-50 px-4 w-64 flex flex-col">
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
        <div className="flex flex-col text-gray-500">
          {links.map((link,index) => (
            <Link href={link.path} key={index} className={`flex items-center space-x-3 -mx-4 px-4 py-3 border-l-4 border-y-2 border-transparent hover:text-rose-500 ${pathname == link.path ? "border-l-rose-500 text-rose-500" : ""}`}>
              <span className="icon w-6 flex-none" dangerouslySetInnerHTML={{ __html: link.svg }}></span>
              <span className="flex-grow min-w-0">{link.name}</span>
              {
                link.notification ? (
                  <span className="block px-2 py-0.5 rounded bg-rose-500 text-white text-xs">{link.notification}</span>
                ) : null
              }
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-6">
        <p className="mb-4">Favorites</p>
        <div className="flex flex-col text-gray-500">
          <Link href="/" className="flex items-center space-x-3 py-3">
            <span className="block w-4 h-4 border-2 border-blue-500 rounded-full"></span>
            <span className="flex-grow min-w-0 truncate">Readwhale Design</span>
          </Link>
          <Link href="/" className="flex items-center space-x-3 py-3">
            <span className="block w-4 h-4 border-2 border-red-500 rounded-full"></span>
            <span className="flex-grow min-w-0 truncate">Mobile App</span>
          </Link>
          <Link href="/" className="flex items-center space-x-3 py-3">
            <span className="block w-4 h-4 border-2 border-green-500 rounded-full"></span>
            <span className="flex-grow min-w-0 truncate">UI Design</span>
          </Link>
        </div>

        <button className="icon w-10 h-10 p-2 bg-rose-500 text-white rounded-full mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
        </button>
      </div>

      <p className="mt-auto text-sm text-gray-500 py-6">{new Date().getFullYear()} Việt Hùng Dev</p>
    </div>
  )
}
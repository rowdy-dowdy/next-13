// https://dribbble.com/shots/17171504-Project-Management-Dashboard-UI-Concept
// https://cdn.dribbble.com/userupload/2808504/file/original-8510c515cb64554ca1936d17d88fea25.jpg?compress=1&resize=1024x768
// "use client";
import React, { useRef, useEffect, useContext } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { AuthContext } from "../authContext";

// function useOutsideAlerter(ref: any) {
//   useEffect(() => {
//     /**
//      * Alert if clicked on outside of element
//      */
//     function handleClickOutside(event: Event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         alert("You clicked outside of me!");
//       }
//     }
//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref]);
// }

export default function Page() {
  // const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef);
  // const router = useRouter()


  const data = useContext(AuthContext);

  console.log(data)
  // if (!data?.user) {
  //   // window.location.href = "/auth/login"
  //   // router.push('/auth/login')
  // }

  return (
    <div className="flex w-full h-full">
      <div className='flex-grow min-w-0 px-12 py-8'>
        <div className="flex items-center">
          <h2 className="text-xl font-semibold">Hi !</h2>
          <div className="ml-auto pl-4 text-sm text-gray-500">15% task completed</div>
          <div className="ml-4 w-32 h-2 rounded-full bg-gray-200 overflow-hidden">
            <div className="h-full bg-rose-500 rounded-full" style={{width: "15%"}}></div>
          </div>
        </div>

        <div className="flex flex-wrap items-stretch -mx-4 mt-8">
          <div className="w-1/3 px-4" >
            <div className="relative h-full bg-rose-500 rounded-lg p-6">
              <div className="absolute w-2/3 top-0 right-0">
                <div className="icon w-full h-full opacity-30 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 6">
                    <path d="M 0 0 L 7 0 L 7 6 C 6 6 6 5 4 3 C 3 2 1 1 0 0"/>
                  </svg>
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between items-center">
                  <span className="icon rounded-lg w-16 p-2 bg-black/20 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2zm6 7.5H5v-2h6v2zm8 0h-6v-2h6v2z"></path></svg>
                  </span>
                  <span className="text-sm text-white">Pambayum</span>
                </div>

                <h5 className="pt-6 text-3xl text-white font-semibold">$280.420</h5>
                <p className="pt-4 text-gray-200">Remaining money <span className="text-white">Việt Hùng IT</span></p>
                <p className="pt-4 text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et harum neque!</p>
              </div>
            </div>
          </div>

          <div className="w-2/3 px-4">
            <div className="relative h-full bg-blue-500 rounded-lg p-6">
              <div className="absolute w-2/3 bottom-0 left-0">
                <div className="icon w-full h-full opacity-30 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 6">
                    <path d="M 0 0 L 0 6 L 14 6 C 14 5 9 5 6 4 C 1 2 2 1 0 0"/>
                  </svg>
                </div>
              </div>

              <div className="relative text-white">
                <p className="text-sm">Running Event</p>

                <h5 className="pt-6 text-3xl text-white font-semibold">Việt Hùng IT</h5>

                <p className="text-sm pt-4">From 03 April to 02 May, 2022</p>

                <div className="flex space-x-4 mt-4">
                  <div className="w-1/3 p-4 bg-purple-300/60 rounded-lg">
                    <h5 className="text-3xl">$42.200</h5>
                    <p className="text-sm pt-2">Disbursed Budget</p>
                  </div>
                  <div className="w-1/3 p-4 bg-green-300/60 rounded-lg">
                    <h5 className="text-3xl">$32.820</h5>
                    <p className="text-sm pt-2 flex items-center space-x-2">
                      <span>Planned</span>
                      <span className="w-1 h-1 rounded-full bg-white"></span>
                      <span className="text-green-900">Dvetennted 34%</span>
                    </p>
                  </div>
                  <div className="w-1/3 p-4 bg-orange-300/60 rounded-lg">
                    <h5 className="text-3xl">$42.200</h5>
                    <p className="text-sm pt-2">Disbursed Budget</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* left sidebar home */}
      <div className="w-96 px-6 border-l">left</div>
    </div>
  )
}

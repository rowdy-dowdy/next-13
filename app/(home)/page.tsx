export default function Page() {
  return (
    <div className="flex w-full h-full">
      <div className='flex-grow min-w-0 px-12 py-8'>
        <div className="flex items-center">
          <h2 className="text-xl font-semibold">Hi Việt Hùng!</h2>
          <div className="ml-auto pl-4 text-sm text-gray-500">15% task completed</div>
          <div className="ml-4 w-32 h-2 rounded-full bg-gray-200 overflow-hidden">
            <div className="h-full bg-rose-500 rounded-full" style={{width: "15%"}}></div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4 mt-8">
          <div className="w-1/3 px-4">
            <div className="relative bg-rose-500 rounded-lg p-6">
              <div className="absolute w-2/3 top-0 right-0">
                <div className="icon w-full h-full opacity-30 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 6">
                    <path d="M 0 0 L 7 0 L 7 6 C 6 6 6 5 4 3 C 3 2 1 1 0 0"/>
                  </svg>
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between items-center">
                  <span className="icon rounded w-10 h-10 p-2 bg-black/20 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2zm6 7.5H5v-2h6v2zm8 0h-6v-2h6v2z"></path></svg>
                  </span>
                  <span className="text-sm text-white">Pambayum</span>
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

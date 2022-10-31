import Image from "next/image";
// https://dribbble.com/shots/19426789-Login-sign-up-screens

export default function Login () {
  return (
    <div className="flex items-stretch w-full h-full text-gray-600">
      <div className="w-5/12 bg-gray-50 px-8 py-8 flex items-center justify-center">
        <img src="/bg-auth.png" alt="Image auth" className="h-[80vh] w-auto"/>
      </div>

      <div className="w-7/12 px-20 py-8">
        <div className="w-full h-full flex flex-col space-y-8 justify-between">
          <div className="flex items-center justify-end space-x-4">
            <p>Already have an account?</p>
            <a href="#" className="block px-4 py-2 border rounded font-semibold hover:bg-gray-100">Sign Up</a>
          </div>

          <div>
            <h3 className="text-2xl uppercase">LOGIN</h3>
            <h5 className="mt-4 text-4xl font-semibold text-gray-800">Welcome Back</h5>
            <p className="mt-4">Please enter your account details</p>

            <form action="" className="mt-10 max-w-xl flex flex-col space-y-6">
              <div className="flex flex-row-reverse bg-gray-100 rounded-md border border-gray-200 px-4 py-2.5 focus-within:border-blue-500 focus-within:bg-white">
                <input id="email" type="text" className="flex-grow min-w-0 bg-0 peer focus:text-gray-800" placeholder="Email" />
                <label htmlFor="email" className="icon w-6 mr-3 flex-none text-gray-400 peer-focus:text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg>
                </label>
              </div>

              <div className="flex flex-row-reverse bg-gray-100 rounded-md border border-gray-200 px-4 py-2.5 focus-within:border-blue-500 focus-within:bg-white">
                <input id="password" type="text" className="flex-grow min-w-0 bg-0 peer focus:text-gray-800" placeholder="Password" />
                <label htmlFor="password" className="icon w-6 mr-3 flex-none text-gray-400 peer-focus:text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.433 17.325 3.079 19.8a1 1 0 0 0 1.131 1.131l2.475-.354C7.06 20.524 8 18 8 18s.472.405.665.466c.412.13.813-.274.948-.684L10 16.01s.577.292.786.335c.266.055.524-.109.707-.293a.988.988 0 0 0 .241-.391L12 14.01s.675.187.906.214c.263.03.519-.104.707-.293l1.138-1.137a5.502 5.502 0 0 0 5.581-1.338 5.507 5.507 0 0 0 0-7.778 5.507 5.507 0 0 0-7.778 0 5.5 5.5 0 0 0-1.338 5.581l-7.501 7.5a.994.994 0 0 0-.282.566zM18.504 5.506a2.919 2.919 0 0 1 0 4.122l-4.122-4.122a2.919 2.919 0 0 1 4.122 0z"></path></svg>
                </label>
              </div>

              <button className="px-4 py-2.5 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white">Continue</button>

              <div className="flex items-center">
                <div className="flex-1 h-[1px] bg-gray-300"></div>
                <span className="mx-2 uppercase">Or with login</span>
                <div className="flex-1 h-[1px] bg-gray-300"></div>
              </div>

              <div className="flex space-x-4">
                <button className="w-1/2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-gray-300 text-white flex items-center space-x-2 justify-center rounded-md">
                  <span className="icon w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                  </span>
                  <span>GitHub</span>
                </button>

                <button className="w-1/2 px-4 py-2 bg-white hover:bg-gray-100 border border-gray-300 text-gray-800 flex items-center space-x-2 justify-center rounded-md">
                  <span className="icon w-8 text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path></svg>
                  </span>
                  <span>Google</span>
                </button>
              </div>

              <p className="!mt-12 text-gray-500">This site is protected by reCaptcha v3 and the Google</p>
              <p className="!mt-2 text-gray-500">
                <a href="#" className="underline">Privacy Policy</a>
                <span> and </span>
                <a href="#" className="underline">Teams of Use</a> apply
              </p>
            </form>
          </div>

          <div className="flex items-center space-x-8">
            <a href="#" className="hover:underline">Teams Of Use</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
            <a href="#" className="hover:underline">Status Page</a>
            <a href="#" className="hover:underline">Contact us</a>
          </div>
        </div>
      </div>
    </div>
  )
}
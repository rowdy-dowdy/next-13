import Image from "next/image";
import FormLogin from "./formLogin";
// import { redirect } from "next/navigation";
// import { cookies } from "next/headers";
// https://dribbble.com/shots/19426789-Login-sign-up-screens

export default function Login () {
  // const token = cookies().get('next-auth.session-token')
  // const csrfToken = cookies().get('next-auth.csrf-token')
  
  // if (token?.value) redirect('/') // already logged-in
  // if (!csrfToken?.value) redirect('/') // no csrf available

  return (
    <div className="flex items-stretch w-full h-full text-gray-600">
      <div className="w-5/12 bg-gray-50 px-8 py-8 flex items-center justify-center">
        <img src="/bg-auth.png" alt="Image auth" className="w-full"/>
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

            <FormLogin />

            <p className="!mt-12 text-gray-500">This site is protected by reCaptcha v3 and the Google</p>
            <p className="!mt-2 text-gray-500">
              <a href="#" className="underline">Privacy Policy</a>
              <span> and </span>
              <a href="#" className="underline">Teams of Use</a> apply
            </p>
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
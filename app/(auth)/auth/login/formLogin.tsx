// "use client";
'use client';

// import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function FormLogin() {
  const [error, setError] = useState<string>();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // const { username, password } = Object.fromEntries(
    //   new FormData(e.target as HTMLFormElement),
    // );
    // const { ok, error } =
    //   (await signIn('credentials', { username, password, redirect: false })) ??
    //   {};

    // if (ok) {
    //   console.log(ok);
    //   // redirect('/')
    //   window.location.href = '/';
    // } else if (error) setError(error);
  };

  const onClose = () => setError(undefined);

  return (
    <form
      className="mt-10 flex max-w-xl flex-col space-y-6"
      method="post"
      action="/api/auth/callback/credentials"
      onSubmit={onSubmit}
    >
      {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
      <div className="flex flex-row-reverse rounded-md border border-gray-200 bg-gray-100 px-4 py-2.5 focus-within:border-blue-500 focus-within:bg-white">
        <input
          id="email"
          type="text"
          className="bg-0 peer min-w-0 flex-grow focus:text-gray-800"
          placeholder="Email"
        />
        <label
          htmlFor="email"
          className="icon mr-3 w-6 flex-none text-gray-400 peer-focus:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
          </svg>
        </label>
      </div>

      <div className="flex flex-row-reverse rounded-md border border-gray-200 bg-gray-100 px-4 py-2.5 focus-within:border-blue-500 focus-within:bg-white">
        <input
          id="password"
          type="text"
          className="bg-0 peer min-w-0 flex-grow focus:text-gray-800"
          placeholder="Password"
        />
        <label
          htmlFor="password"
          className="icon mr-3 w-6 flex-none text-gray-400 peer-focus:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3.433 17.325 3.079 19.8a1 1 0 0 0 1.131 1.131l2.475-.354C7.06 20.524 8 18 8 18s.472.405.665.466c.412.13.813-.274.948-.684L10 16.01s.577.292.786.335c.266.055.524-.109.707-.293a.988.988 0 0 0 .241-.391L12 14.01s.675.187.906.214c.263.03.519-.104.707-.293l1.138-1.137a5.502 5.502 0 0 0 5.581-1.338 5.507 5.507 0 0 0 0-7.778 5.507 5.507 0 0 0-7.778 0 5.5 5.5 0 0 0-1.338 5.581l-7.501 7.5a.994.994 0 0 0-.282.566zM18.504 5.506a2.919 2.919 0 0 1 0 4.122l-4.122-4.122a2.919 2.919 0 0 1 4.122 0z"></path>
          </svg>
        </label>
      </div>

      <button className="rounded-md bg-indigo-500 px-4 py-2.5 text-white hover:bg-indigo-400">
        Continue
      </button>

      <div className="flex items-center">
        <div className="h-[1px] flex-1 bg-gray-300"></div>
        <span className="mx-2 uppercase">Or with login</span>
        <div className="h-[1px] flex-1 bg-gray-300"></div>
      </div>

      <div className="flex space-x-4">
        <button className="flex w-1/2 items-center justify-center space-x-2 rounded-md border border-gray-300 bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800">
          <span className="icon w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
              ></path>
            </svg>
          </span>
          <span>GitHub</span>
        </button>

        <button className="flex w-1/2 items-center justify-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-800 hover:bg-gray-100">
          <span className="icon w-8 text-rose-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
            </svg>
          </span>
          <span>Google</span>
        </button>
      </div>
    </form>
  );
}

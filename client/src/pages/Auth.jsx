import React from "react";

function Auth() {
  return (
    <main className="mx-4">
      <header>
        <p className="text-xl font-bold text-gray-800 mt-4">
          ganya
          <span className="text-zinc-400">.</span>
        </p>{" "}
      </header>

      <section className="mt-8 ">
        <p className="text-xl font-bold">Welcome Back!</p>
        <p className="text-gray-400">
          enter your email and password to create an account or log in
        </p>

        <form className="mt-8 gap-2 flex flex-col w-1/2">
          <label className="" htmlFor="email">
            email
          </label>
          <input
            className="border border-gray-300 rounded-lg -mt-1 px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="email"
            placeholder="enter your email"
            required
          />
          <label htmlFor="password">password</label>
          <input
            className="border border-gray-300 rounded-lg -mt-1 px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="password"
            placeholder="******"
            required
          />
          <button className="bg-blue-400 font-semibold text-white px-8 py-1 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out">
            continue
          </button>
        </form>

        <button className="bg-gray-200 font-semibold text-gray-600 px-8 py-1 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out mt-3">
          Continue with Google
        </button>
      </section>
    </main>
  );
}

export default Auth;

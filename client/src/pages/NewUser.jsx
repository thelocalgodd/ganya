import React from "react";

function NewUser() {
  return (
    <main className="mx-4 md:mx-auto md:w-[800px]">
      <header>
        <p className="text-xl font-bold text-gray-800 mt-4">
          ganya
          <span className="text-zinc-400">.</span>
        </p>{" "}
      </header>

      <section className="mt-8 ">
        <p className="text-xl font-bold">New User!</p>
        <p className="text-gray-400">
          since you are a new user, please enter your details below
        </p>

        <form className="mt-8 gap-2 flex flex-col w-2/3">
          <label className="" htmlFor="name">
            name
          </label>
          <input
            className="border border-gray-300 rounded-lg -mt-1 px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="name"
            placeholder="John Doe"
            required
          />
          <label htmlFor="email">phone</label>
          <input
            className="border border-gray-300 rounded-lg -mt-1 px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="tel"
            placeholder="+233 24 567 890"
            required
          />

          <button className="bg-blue-400 font-semibold text-white px-8 py-1 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out">
            continue
          </button>
        </form>
      </section>
    </main>
  );
}

export default NewUser;

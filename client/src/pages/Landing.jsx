import React from "react";

function Landing() {
  return (
    <main className="flex flex-col items-center h-screen bg-gray-100">
      <marquee
        className="bg-red-200 p-1 mt-2 rotate-2 z-10"
        behavior=""
        direction=""
      >
        moneey is not the goal, but a byproduct of doing what you love.
      </marquee>

      <p className="text-2xl font-bold text-gray-800 mt-4">
        ganya
        <span className="text-zinc-400">.</span>
      </p>

      <p className="text-lg font-semibold text-gray-600 mt-2 mx-4 text-center">
        track your expenses with ease.
      </p>

      <button
        onClick={() => {
          window.location.href = "/auth";
        }}
        className="mt-8 bg-blue-400 font-semibold text-white px-8 py-1 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out"
      >
        get started
      </button>
    </main>
  );
}

export default Landing;

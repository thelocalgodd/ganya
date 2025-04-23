import React, { useState } from "react";

const baseURL = "http://localhost:5000/api/v1/auth";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        window.location.href = "/dashboard";
      } else {
        console.error("Login failed:", data);

        if (data.userExists === false) {
          sessionStorage.setItem("pending_email", email);
          sessionStorage.setItem("pending_password", password);
          window.location.href = "/newuser";
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <main className="mx-4 md:mx-auto md:w-[800px]">
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

        <div className="mt-8 gap-2 flex flex-col w-2/3">
          <label className="" htmlFor="email">
            email
          </label>
          <input
            className="border border-gray-300 rounded-lg -mt-1 px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">password</label>
          <input
            className="border border-gray-300 rounded-lg -mt-1 px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-400 font-semibold text-white px-8 py-1 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out"
          >
            continue
          </button>
        </div>

        <div className="mt-2 gap-2 flex flex-col w-2/3">
          <button className="bg-gray-200 border border-gray-300 font-semibold text-gray-600 px-8 py-1 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out mt-8">
            Continue with Google
          </button>
        </div>
      </section>
    </main>
  );
}

export default Auth;

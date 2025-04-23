import React from "react";

const baseURL = "http://localhost:5000/api/v1/auth";

function NewUser() {
  const [email, setEmail] = React.useState(
    sessionStorage.getItem("pending_email") || ""
  );
  const [password, setPassword] = React.useState(
    sessionStorage.getItem("pending_password") || ""
  );
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseURL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Registration successful:", data);
        window.location.href = "/dashboard";

        sessionStorage.removeItem("pending_email");
        sessionStorage.removeItem("pending_password");
      } else {
        console.error("Registration failed:", data);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  React.useEffect(() => {
    if (
      !sessionStorage.getItem("pending_email") ||
      !sessionStorage.getItem("pending_password")
    ) {
      window.location.href = "/auth";
    }
  }, []);

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

        <div className="mt-8 gap-2 flex flex-col w-2/3">
          <label className="" htmlFor="name">
            name
          </label>
          <input
            className="border border-gray-300 rounded-lg -mt-1 px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">phone</label>
          <input
            className="border border-gray-300 rounded-lg -mt-1 px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            type="tel"
            placeholder="+233 24 567 890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-400 font-semibold text-white px-8 py-1 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out"
          >
            continue
          </button>
        </div>
      </section>
    </main>
  );
}

export default NewUser;

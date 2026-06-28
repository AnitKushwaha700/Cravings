import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import deliveryboy from "../assets/deliberyboy.png";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [validateError, setValidateError] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., send loginData to the server
    //Validate loginData

    console.log("Login data submitted:", loginData);

    const payload = {
      email: loginData.email.toLowerCase(),
      password: loginData.password,
    };
  };

  const inputClass =
    "border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)";

return (
  <div className="h-100vh bg-[var(--background)] flex items-center justify-center px-6 py-10">
    <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

      {/* Left Section */}
      <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] p-10 text-white">

        <img
          src={deliveryboy}
          alt="Delivery Boy"
          className="w-80 mb-8 scale-x-[-1]"
        />

        <h2 className="text-3xl font-bold">
          Orbit Food Delivery
        </h2>

        <p className="mt-3 text-center text-white/90 max-w-sm">
          Fast delivery, delicious food, and your favourite restaurants
          delivered right to your doorstep.
        </p>

      </div>

      {/* Right Section */}

      <div className="p-10 flex flex-col justify-center">

        <h1 className="text-4xl font-bold text-[var(--primary)] text-center">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Login to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          {validateError && (
            <p className="text-red-500 text-sm">
              {validateError}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[var(--primary)] hover:bg-[var(--secondary)] text-white py-3 rounded-xl font-semibold duration-300"
          >
            Login
          </button>

        </form>

        <div className="mt-8 border-t pt-6 text-center space-y-3">

          <p>
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-[var(--primary)] font-semibold hover:underline"
            >
              Register
            </button>
          </p>

          <p>
            Forgot your password?{" "}
            <button
              className="text-[var(--primary)] font-semibold hover:underline"
            >
              Reset Password
            </button>
          </p>

          <p>
            Need Help?{" "}
            <button
              onClick={() => navigate("/contact")}
              className="text-[var(--primary)] font-semibold hover:underline"
            >
              Contact Us
            </button>
          </p>

        </div>

      </div>

    </div>
  </div>
);
};

export default Login;
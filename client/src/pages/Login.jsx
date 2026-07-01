import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import foodTable from "../assets/foodTable.webp";
import api from "../config/api.config.js";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const { setUser, setIslogin } = useAuth();
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
    // Validate loginData

    console.log("Login data submitted:", loginData);

    const payload = {
      email: loginData.email.toLowerCase(),
      password: loginData.password,
    };

    try {
      const res = await api.post("/auth/login", payload);
      console.log("Login successful:", res.data);
      toast.success(res.data.message);
      sessionStorage.setItem("userData", JSON.stringify(res.data.data));
      setUser(res.data.data);
      setIslogin(true);

      navigate("/user/dashboard");
    } catch (error) {
      // console.error("Login failed:", error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const inputClass =
    "border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)";

  return (
    <>
      <div
        className="min-h-[90vh] grid grid-cols-2 items-center p-10 "
        style={{ backgroundImage: `url(${foodTable})` }}
      >
        {/* Card */}
        <div className="w-full max-w-md bg-(--background) rounded-xl shadow-2xl p-10">
          <div className="text-3xl font-bold mb-2 text-center text-[var(--primary)]">
            Welcome Back
          </div>
          <div className="text-md text-gray-500 mb-4 text-center ">
            Login to your Cravings account
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {/* Email */}
            <div className="col-span-2 flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Password */}
            <div className="col-span-2 flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {validateError && (
              <p className="text-red-500 text-sm col-span-2">{validateError}</p>
            )}

            <button
              type="submit"
              className="col-span-2 mt-2 bg-(--primary) text-white py-2 px-4 rounded hover:bg-(--accent)"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-sm">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-(--primary) hover:underline font-semibold"
              >
                Register here
              </button>
            </p>
            <p className="text-sm">
              Having Trouble?{" "}
              <button
                onClick={() => navigate("/contact")}
                className="text-(--primary) hover:underline font-semibold"
              >
                Contact Us
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

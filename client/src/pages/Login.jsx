import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import foodTable from "../assets/foodTable.webp";
import api from "../config/api.config.js";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, setIsLogin, setRole } = useAuth();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.email.trim()) newErrors.email = "Email is required";
    if (!data.password) newErrors.password = "Password is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    console.log("Login data submitted:", formData);

    try {
      const res = await api.post("/auth/login", {
        email: formData.email.toLowerCase(),
        password: formData.password,
      });
      toast.success(res.data.message);
      sessionStorage.setItem("cravingUser", JSON.stringify(res.data.data));
      setUser(res.data.data);
      setIsLogin(true);
      //console.log(res.data.data.userType);
      setRole(res.data.data.userType);
      
      res.data.data.userType === "restaurant" &&
        navigate("/restaurant-dashboard");

      res.data.data.userType === "rider" && navigate("/rider-dashboard");

      res.data.data.userType === "admin" && navigate("/admin-dashboard");

      res.data.data.userType === "customer" && navigate("/customer-dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unknown error occurred during registration. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "border p-2 rounded focus:outline-none focus:ring-2";

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
              className="col-span-2 mt-2 rounded py-2 px-4 text-white"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-sm">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="font-semibold hover:underline"
                style={{ color: "var(--primary)" }}
              >
                Register here
              </button>
            </p>
            <p className="text-sm">
              Having Trouble?{" "}
              <button
                onClick={() => navigate("/contact")}
                className="font-semibold hover:underline"
                style={{ color: "var(--primary)" }}
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

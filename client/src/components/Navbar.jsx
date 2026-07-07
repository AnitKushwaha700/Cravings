import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/transparentLogoLight-De2Z7I01.png";
import { useAuth } from "../context/AuthContext.jsx";
import { AiOutlineLogout } from "react-icons/ai";
import { FiMoon, FiSun } from "react-icons/fi";
import { FaPowerOff } from "react-icons/fa";
import api from "../config/api.config.js";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, isLogin, role, setUser, setIsLogin, setRole } = useAuth();
  const navigate = useNavigate();

  const [theme, setTheme] = useState("theme-red");
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleNavigate = () => {
    //console.log("Handle Navigate", role);

    if (role === "restaurant") {
      navigate("/restaurant-dashboard");
    } else if (role === "rider") {
      navigate("/rider-dashboard");
    } else if (role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/customer-dashboard");
    }
  };

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      toast.success(res.data.message);

      sessionStorage.removeItem("cravingUser");
      setUser(null);
      setIsLogin(false);
      setRole(null);
      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unknown error occurred during registration. Please try again.",
      );
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[var(--primary)] text-[var(--text-white)] shadow-lg">
      <div className="mx-auto flex max-full items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Cravings logo" className="h-11 w-auto" />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          {isLogin ? (
            <div className="flex items-center gap-2">
              <button
                className="flex gap-2 items-center text-(--color-primary-content) border border-transparent hover:border-(--color-primary-content)  px-3 py-1 rounded"
                title="Go to Dashboard"
                onClick={handleNavigate}
              >
                <img
                  src={user?.photo.url}
                  alt={user?.fullName}
                  className="w-12 h-12 rounded-full object-cover object-top"
                />
                <div className="flex flex-col items-start">
                  <span className="text-base">{user?.fullName}</span>
                  <span className="text-xs text-(--color-primary-content)/80">
                    Customer
                  </span>
                </div>
              </button>
              <button
                onClick={handleLogout}
                className="text-(--color-primary-content) border border-transparent hover:border-(--color-primary-content) hover:bg-(--color-error) px-3 py-3 rounded"
                title="Logout"
              >
                <FaPowerOff />
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/"
                className="rounded-md px-3 py-1.5 text-sm font-medium transition hover:border"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="rounded-md px-3 py-1.5 text-sm font-medium transition hover:border"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-md px-3 py-1.5 text-sm font-medium transition hover:border"
              >
                Register
              </Link>
              <Link
                to="/contactUs"
                className="rounded-md px-3 py-1.5 text-sm font-medium transition hover:hover:border"
              >
                Contact Us
              </Link>
              <button
                onClick={() =>
                  setTheme(theme === "theme-red" ? "theme-dark" : "theme-red")
                }
                className="rounded-full border border-white/20 p-2 transition hover:hover:border"
                aria-label="Toggle theme"
              >
                {theme === "theme-red" ? <FiMoon /> : <FiSun />}
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

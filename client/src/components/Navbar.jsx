import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/transparentLogoLight-De2Z7I01.png";
import { useAuth } from "../context/AuthContext.jsx";
import { AiOutlineLogout } from "react-icons/ai";
import { FiMoon, FiSun } from "react-icons/fi";
import api from "../config/api.config.js";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, isLogin, role, setUser, setIsLogin, setRole } = useAuth();
  const navigate = useNavigate();

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
            <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
              <div className="h-8 w-8 overflow-hidden rounded-full">
                <img
                  src={user.photo}
                  alt="User"
                  className="h-full w-full object-cover"
                />
              </div>
              <Link
                to="/customer-dashboard"
                className="text-sm font-medium hover:text-[var(--accent)]"
              >
                {user.fullName}
              </Link>
              <button
                onClick={handleNavigate}
                className="rounded-full p-2 text-lg transition hover:bg-white/10"
              >
                <AiOutlineLogout />
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
                className="rounded-full px-3 py-1.5 text-sm font-medium transition hover:bg-white/10"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-full px-3 py-1.5 text-sm font-medium transition hover:bg-white/10"
              >
                Register
              </Link>
              <Link
                to="/contactUs"
                className="rounded-full px-3 py-1.5 text-sm font-medium transition hover:bg-white/10"
              >
                Contact Us
              </Link>
              <button
                onClick={() =>
                  setTheme(theme === "theme-red" ? "theme-dark" : "theme-red")
                }
                className="rounded-full border border-white/20 p-2 transition hover:bg-white/10"
                aria-label="Toggle theme"
              >
                {/* {theme === "theme-red" ? <FiMoon /> : <FiSun />} */}
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

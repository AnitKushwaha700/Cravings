import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/transparentLogoLight-De2Z7I01.png";
import { useAuth } from "../context/AuthContext.jsx";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  const { user, setUser, isLogin, setIsLogin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("useData");
    setIsLogin(false);
    setUser(false);
    navigate("/");
  };

  return (
    <>
      <nav className="bg-[var(--primary)] text-[var(--primary-text)] px-10 py-1 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="px-3 py-1 rounded border border-transparent hover:border-white transition"
          >
            Home
          </Link>

          {isLogin ? (
            <div className="border-s-2 flex justify-center items-center gap-4 px-4">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={user.photo}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <Link
                to={"/user/dashboard"}
                className="hover:underline hover:text-(--accent)"
              >
                {user.fullName}
              </Link>
              <button
                onClick={handleLogout}
                className="hover:bg-white hover:text-[var(--primary)]  rounded-2xl p-2 text-xl"
              >
                <AiOutlineLogout />
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-3 py-1 rounded border border-transparent hover:border-white transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-3 py-1 rounded border border-transparent hover:border-white transition"
              >
                Register
              </Link>

              <Link
                to="/contactUs"
                className="px-3 py-1 rounded border border-transparent hover:border-white transition"
              >
                Contact Us
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

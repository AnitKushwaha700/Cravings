import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/transparentLogoLight-De2Z7I01.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[var(--color-primary)] text-[var(--color-primary-content)] p-3 flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-12 w-auto" />

        <div className="flex gap-3">
          <Link
            to="/login"
            className="px-4 py-2 border rounded-lg hover:bg-white hover:text-[var(--color-primary)] transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 border rounded-lg hover:bg-white hover:text-[var(--color-primary)] transition"
          >
            Register
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
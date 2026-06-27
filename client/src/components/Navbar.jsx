import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/transparentLogoLight-De2Z7I01.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[var(--color-primary)] text-[var(--color-primary-content)] px-10 py-1 flex justify-between items-center">
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

          <Link
            to="/login"
            className="px-3 py-1 border rounded bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:border-white hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-3 py-1 border rounded bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:border-white hover:text-white transition"
          >
            Register
          </Link>

          <Link
            to="/contact"
            className="px-3 py-1 border rounded bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:border-white hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import logo from "../assets/transparentLogoLight-De2Z7I01.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[var(--color-primary)] text-[var(--color-primary-content)] p-3 flex justify-between">
        <img src={logo} alt="Logo" className="h-12 w-auto" />

        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-lg hover:bg-white hover:text-[var(--color-primary)] transition">
            Login
          </button>
          <button className="px-4 py-2 border rounded-lg hover:bg-white hover:text-[var(--color-primary)] transition">
            Register
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

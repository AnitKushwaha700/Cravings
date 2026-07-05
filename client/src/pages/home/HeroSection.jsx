import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import heroImage from "../../assets/home.jpeg";

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-[86vh] overflow-hidden">
      <img
        src={heroImage}
        alt="Food delivery hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.8),rgba(0,0,0,0.35))]" />

      <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center text-[var(--text-white)] lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Food delivered with care
          </p>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Your favorite food, delivered fast
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
            Order from neighborhood gems and favorite restaurants, then track every bite from kitchen to doorstep.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/register"
              className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--text-white)] transition hover:bg-[var(--primary-hover)]"
            >
              Sign Up
            </Link>
            <Link
              to="/order-now"
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-[var(--text-white)] backdrop-blur transition hover:bg-white/20"
            >
              Order Now
            </Link>
          </div>

          <div className="mx-auto mt-8 flex max-w-2xl items-center gap-3 rounded-full border border-white/20 bg-[var(--surface)]/95 px-4 py-3 text-left shadow-2xl">
            <FiSearch className="text-xl text-[var(--primary)]" />
            <input
              type="text"
              placeholder="Search restaurants or dishes"
              className="w-full border-none bg-transparent text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-light)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

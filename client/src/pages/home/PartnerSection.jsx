import React from "react";
import { Link } from "react-router-dom";

const PartnerSection = () => {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-[linear-gradient(135deg,var(--primary),var(--secondary))] px-8 py-16 text-center text-[var(--text-white)] shadow-[0_30px_60px_-25px_var(--shadow)] sm:px-12 lg:px-16">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Become a restaurant partner
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          Grow your business with Cravings and reach thousands of hungry customers every day.
        </p>
        <Link
          to="/register"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:scale-[1.02]"
        >
          Partner With Us
        </Link>
      </div>
    </section>
  );
};

export default PartnerSection;

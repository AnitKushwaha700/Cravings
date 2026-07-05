import React from "react";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Arun J.",
    role: "Verified Buyer",
    quote:
      "The food arrived hot and fresh, and the delivery was incredibly fast. Highly impressed with Cravings.",
  },
  {
    name: "Sneha P.",
    role: "Verified Buyer",
    quote:
      "Easy to use, packed with restaurant choices, and always quick. I order from Cravings every week.",
  },
  {
    name: "Raj Kumar",
    role: "Verified Buyer",
    quote:
      "Love the variety of restaurants available. I found my new favorite spot through Cravings.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[var(--surface-2)] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            What our customers say
          </p>
          <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">
            Real feedback from real food lovers
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_45px_-25px_var(--shadow)]"
            >
              <div className="mb-4 flex gap-1 text-[var(--accent)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FiStar key={index} />
                ))}
              </div>
              <p className="mb-6 text-sm leading-7 text-[var(--text-light)]">“{item.quote}”</p>
              <div>
                <p className="font-semibold text-[var(--text)]">{item.name}</p>
                <p className="text-sm text-[var(--text-light)]">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

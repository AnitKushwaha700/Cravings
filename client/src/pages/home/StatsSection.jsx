import React from "react";

const stats = [
  { value: "2.5M+", title: "Successful Deliveries", text: "Orders delivered with care and precision." },
  { value: "500K+", title: "Happy Customers", text: "Satisfied users enjoying delicious food." },
  { value: "5K+", title: "Partner Restaurants", text: "Restaurants serving amazing cuisine." },
  { value: "1K+", title: "Active Riders", text: "Fast and dependable delivery partners." },
];

const StatsSection = () => {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
          Cravings by the Numbers
        </p>
        <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">
          Trusted by millions every day
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-light)]">
          From quick lunches to late-night cravings, our platform keeps the food coming with speed and care.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_45px_-25px_var(--shadow)]"
            >
              <h3 className="text-4xl font-bold text-[var(--primary)]">{item.value}</h3>
              <p className="mt-3 text-lg font-semibold text-[var(--text)]">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-light)]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

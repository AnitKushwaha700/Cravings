import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiStar } from "react-icons/fi";
import restaurant1 from "../../assets/restaurant1.avif";
import restaurant2 from "../../assets/restaurant2.webp";
import restaurant3 from "../../assets/restaurant3.webp";

const restaurants = [
  {
    name: "Under The Mango Tree",
    image: restaurant1,
    rating: "4.8",
    description:
      "Enjoy smoky grills and aromatic Indian favorites in a warm, celebratory setting.",
    tags: ["Indian", "Chinese", "Italian"],
  },
  {
    name: "Raj Darbar",
    image: restaurant2,
    rating: "4.7",
    description:
      "A vibrant dhaba-inspired menu with comfort food and bold flavors for every craving.",
    tags: ["Indian", "Biryani", "Snacks"],
  },
  {
    name: "Countryside Culture",
    image: restaurant3,
    rating: "4.9",
    description:
      "Fresh farm-style dishes and cozy vibes make this a favorite for relaxed dinners.",
    tags: ["Veg", "Desserts", "Coffee"],
  },
];

const FeaturedRestaurants = () => {
  return (
    <section className="bg-[var(--surface-2)] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              Featured Restaurants
            </p>
            <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">
              Discover the best food around you
            </h2>
          </div>
          <Link
            to="/order-now"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-hover)]"
          >
            View all menus <FiArrowRight />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {restaurants.map((restaurant) => (
            <article
              key={restaurant.name}
              className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_45px_-25px_var(--shadow)]"
            >
              <div className="relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="h-56 w-full object-cover"
                />
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[var(--primary)] px-3 py-1 text-sm font-semibold text-[var(--text-white)]">
                  <FiStar /> {restaurant.rating}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-[var(--text)]">
                  {restaurant.name}
                </h3>
                <p className="mb-4 text-sm leading-6 text-[var(--text-light)]">
                  {restaurant.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {restaurant.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1 text-xs font-medium text-[var(--text)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to="/order-now"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[var(--text-white)] transition hover:bg-[var(--primary-hover)]"
                >
                  Explore Menu
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;

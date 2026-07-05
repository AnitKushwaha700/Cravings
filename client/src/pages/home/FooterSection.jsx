import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/circleLogo-DpCri5UD.png";

const FooterSection = () => {
  return (
    <footer className="bg-[var(--text)] px-6 py-16 text-[var(--text-white)] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 rounded-[24px] border border-white/10 bg-white/5 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Your favorite food delivery platform
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              Connecting restaurants, riders, and food lovers every day.
            </h3>
          </div>
          <img src={logo} alt="Cravings logo" className="h-20 w-auto" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Link to="/" className="transition hover:text-[var(--accent)]">Home</Link>
              <Link to="/about" className="transition hover:text-[var(--accent)]">About</Link>
              <Link to="/order-now" className="transition hover:text-[var(--accent)]">Order Now</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">For Restaurants</h4>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Link to="/register" className="transition hover:text-[var(--accent)]">Partner With Us</Link>
              <Link to="/login" className="transition hover:text-[var(--accent)]">Restaurant Dashboard</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Support</h4>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Link to="/feedback" className="transition hover:text-[var(--accent)]">Feedback</Link>
              <Link to="/help-center" className="transition hover:text-[var(--accent)]">Help Center</Link>
              <Link to="/contactUs" className="transition hover:text-[var(--accent)]">Contact Us</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Link to="/about" className="transition hover:text-[var(--accent)]">Our Story</Link>
              <Link to="/privacy-policy" className="transition hover:text-[var(--accent)]">Privacy Policy</Link>
              <Link to="/terms-of-service" className="transition hover:text-[var(--accent)]">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Cravings. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy-policy" className="transition hover:text-[var(--accent)]">Privacy Policy</Link>
            <Link to="/terms-of-service" className="transition hover:text-[var(--accent)]">Terms of Service</Link>
            <Link to="/sitemap" className="transition hover:text-[var(--accent)]">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

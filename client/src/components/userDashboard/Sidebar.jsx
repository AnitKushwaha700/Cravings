import React from "react";
import { MdOutlineDashboard, MdOutlineFastfood } from "react-icons/md";
import { BsCalendar2HeartFill } from "react-icons/bs";
import { TbSettingsBolt } from "react-icons/tb";

const MenuItems = [
  { name: "Overview", icon: <MdOutlineDashboard /> },
  { name: "Orders", icon: <MdOutlineFastfood /> },
  { name: "Wishlist", icon: <BsCalendar2HeartFill /> },
  { name: "Settings", icon: <TbSettingsBolt /> },
];

const Sidebar = ({ active, setActive }) => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
        <div className="mb-6 text-center text-xl font-bold tracking-tight text-[var(--text)]">
          User Dashboard
        </div>
        <div className="space-y-3">
          {MenuItems.map((item, idx) => (
            <button
              key={idx}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                active === item.name
                  ? "bg-[var(--primary)] text-[var(--text-white)]"
                  : "border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)] hover:bg-[var(--surface)]"
              }`}
              onClick={() => setActive(item.name)}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

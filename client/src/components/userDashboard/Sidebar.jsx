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

const sidebar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-3">
        <div className="text-cnenter text-xl">
          <div className="border-b-2 p-2 text-center font-bold ">
            User Dashboard
          </div>
          <div className="space-y-3 p-2 mt-4 ">
            {MenuItems.map((item, idx) => (
              <button
                key={idx}
                className={`flex gap-3 font-semibold p-2 items-center border-2 border-(--primary) hover:border-(--primary) w-full rounded-lg ${active === item.name && "bg-(--secondary) text-(--primary-text)"}`}
                onClick={() => setActive(item.name)}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default sidebar;

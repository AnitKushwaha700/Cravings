import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "../../components/userDashboard/Sidebar.jsx";
import Overview from "../../components/userDashboard/Overview.jsx";
import Orders from "../../components/userDashboard/Orders.jsx";
import Wishlist from "../../components/userDashboard/Wishlist.jsx";
import Settings from "../../components/userDashboard/CustomerSettings.jsx";

const UserDashboard = () => {
  const [active, setActive] = useState("Overview");
  return (
    <div className="flex min-h-[92vh] bg-[var(--background)]">
      <aside className="w-1/6 border-r border-gray-200 bg-[var(--surface)] px-4 pt-7">
        <Sidebar active={active} setActive={setActive} />
      </aside>
      <main className="w-5/6 p-6">
        {active === "Overview" && <Overview />}
        {active === "Orders" && <Orders />}
        {active === "Wishlist" && <Wishlist />}
        {active === "Settings" && <Settings />}
      </main>
    </div>
  );
};

export default UserDashboard;

import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "../../components/userDashboard/Sidebar.jsx";
import Overview from "../../components/userDashboard/Overview.jsx";
import Orders from "../../components/userDashboard/Orders.jsx";
import Wishlist from "../../components/userDashboard/Wishlist.jsx";
import Settings from "../../components/userDashboard/Settings.jsx";

const UserDashboard = () => {
  const [active, setActive] = useState("Overview");
  return (
    <>
      <div className="flex h-[92vh]">
        <div className="w-1/6 border-e-2 border-gray-500 h-full">
          <Sidebar active={active} setActive={setActive} />
        </div>
        <div className="5/6 p-4 h-full">
          {active === "Overview" && <Overview />}
          {active === "Orders" && <Orders />}
          {active === "Wishlist" && <Wishlist />}
          {active === "Settings" && <Settings />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;

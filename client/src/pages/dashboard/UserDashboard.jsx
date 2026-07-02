import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const UserDashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="flex gap-3 text-2xl ">
        <div>Sidebar</div>
        <div>Contact</div>
      </div>
    </>
  );
};

export default UserDashboard;

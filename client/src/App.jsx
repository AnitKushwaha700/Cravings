import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/ContactUs";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import HelpCenter from "./pages/HelpCenter";
import OrderNow from "./pages/OrderNow";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import CustomerDashboard from "./pages/dashboard/CustomerDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import RestaurantDashboard from "./pages/dashboard/RestaurantDashboard";
import RiderDashboard from "./pages/dashboard/RiderDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/:userType" element={<Register />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/order-now" element={<OrderNow />} />

          {/* Dashboard Routes */}
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/restaurant-dashboard" element={<RestaurantDashboard />} />
        <Route path="/rider-dashboard" element={<RiderDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

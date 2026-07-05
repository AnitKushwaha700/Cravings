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
import UserDashboard from "./pages/dashboard/UserDashboard";

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
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/order-now" element={<OrderNow />} />

          {/* Dashboard Routes */}
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

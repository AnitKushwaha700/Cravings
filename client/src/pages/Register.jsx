import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import deliveryboy from "../assets/deliberyboy.png";

const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    gender: "",
    dob: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [validateError, setValidateError] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      setValidateError("Passwords do not match");
      return;
    }

    setValidateError("");
    console.log("Register data submitted:", registerData);

    const payload = {
      fullName: registerData.fullName,
      email: registerData.email.toLowerCase(),
      gender: registerData.gender,
      dob: registerData.dob,
      phone: registerData.phone,
      password: registerData.password,
    };
  };

  const inputClass =
    "border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)";

return (
  <div className="h-100vh bg-[var(--background)] flex items-center justify-center px-6 py-10">
    <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

      {/* Left Section */}
      <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] p-10 text-white">

        <img
          src={deliveryboy}
          alt="Delivery Boy"
          className="w-80 mb-8 scale-x-[-1]"
        />

        <h2 className="text-3xl font-bold">
          Join Orbit Today
        </h2>

        <p className="text-center mt-3 text-white/90 max-w-sm">
          Create your account and enjoy fast food delivery from your favourite
          restaurants.
        </p>

      </div>

      {/* Right Section */}

      <div className="p-10">

        <h1 className="text-4xl font-bold text-center text-[var(--primary)]">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign up to start ordering delicious food.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >

          {/* Full Name */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={registerData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          {/* Email */}

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          {/* Phone */}

          <div>
            <label className="block mb-2 font-medium">
              Phone
            </label>

            <input
              type="tel"
              name="phone"
              value={registerData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          {/* Gender */}

          <div>
            <label className="block mb-2 font-medium">
              Gender
            </label>

            <select
              name="gender"
              value={registerData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* DOB */}

          <div>
            <label className="block mb-2 font-medium">
              Date of Birth
            </label>

            <input
              type="date"
              name="dob"
              value={registerData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          {/* Password */}

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          {/* Confirm Password */}

          <div>
            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          {validateError && (
            <p className="md:col-span-2 text-red-500">
              {validateError}
            </p>
          )}

          <button
            type="submit"
            className="md:col-span-2 bg-[var(--primary)] hover:bg-[var(--secondary)] text-white py-3 rounded-xl font-semibold duration-300"
          >
            Create Account
          </button>

        </form>

        <div className="border-t mt-8 pt-6 text-center space-y-2">

          <p>
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-[var(--primary)] font-semibold hover:underline"
            >
              Login
            </button>
          </p>

          <p>
            Need Help?{" "}
            <button
              onClick={() => navigate("/contact")}
              className="text-[var(--primary)] font-semibold hover:underline"
            >
              Contact Us
            </button>
          </p>

        </div>

      </div>

    </div>
  </div>
);
};

export default Register;
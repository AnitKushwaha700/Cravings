import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import foodTable from "../assets/foodTable.webp";
import api from "../config/api.config.js";
import toast from "react-hot-toast";

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

    try {
      const res = await api.post("/auth/register", payload);
      console.log("Registration Successfull :", res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(res?.data?.message || error.message);
    }
  };

  const inputClass =
    "border p-2 rounded focus:outline-none focus:ring-2";
  return (
    <>
      <div
        className="min-h-[90vh] grid grid-cols-2 items-center p-10 "
        style={{ backgroundImage: `url(${foodTable})` }}
      >
        {/* Card */}
        <div className="col-start-3 w-full max-w-xl bg-[var(--background)] rounded-xl shadow-2xl p-10">
          <div className="text-2xl font-bold mb-1 text-center text-[var(--primary)]">
            Create an Account
          </div>

          <div className="text-md text-gray-500 mb-4 text-center ">
            Join us as a Customer, Restaurant, or Rider
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
            {/* Full Name */}
            <div className="col-span-2 flex flex-col gap-2">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={registerData.fullName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={registerData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={registerData.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-2">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={registerData.gender}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col gap-2">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={registerData.dob}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={registerData.password}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {validateError && (
              <p className="text-red-500 text-sm col-span-2">{validateError}</p>
            )}

            <button
              type="submit"
              className="col-span-2 mt-2 rounded py-2 px-4 text-white"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-sm">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="font-semibold hover:underline"
                style={{ color: "var(--primary)" }}
              >
                Login here
              </button>
            </p>
            <p className="text-sm">
              Having Trouble?{" "}
              <button
                onClick={() => navigate("/contactUs")}
                className="font-semibold hover:underline"
                style={{ color: "var(--primary)" }}
              >
                Contact Us
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

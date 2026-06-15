import React from "react";

const Register = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">Register</h1>

      <input
        type="text"
        placeholder="Name"
        className="border p-2 m-2"
      />

      <br />

      <input
        type="email"
        placeholder="Email"
        className="border p-2 m-2"
      />

      <br />

      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </div>
  );
};

export default Register;
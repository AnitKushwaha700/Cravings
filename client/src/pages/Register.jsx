import React from "react";

const Register = () => {
  return (
    <div className="p-10">

      <div className="mb-4">
        <label>Name</label>
        <input
          type="text"
          className="border w-full p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label>Email</label>
        <input
          type="email"
          className="border w-full p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label>Password</label>
        <input
          type="password "
          className="border w-full p-2 rounded"
        />
      </div>

      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </div>
  );
};

export default Register;
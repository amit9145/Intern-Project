import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleprofile = () => {
    navigate("/profile")
  }

  const FloatingInput = ({ label, required, type = "text", defaultValue }) => {
    return (
      <div className="relative mb-6">
        <label className="absolute -top-3 left-4 bg-gray-100 px-2 text-sm font-medium text-purple-600">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>

        <input
          type={type}
          defaultValue={defaultValue}
          className="
          w-full
          rounded-xl
          border
          border-gray-300
          bg-gray-100
          px-4
          py-3
          text-sm
          text-gray-900
          focus:outline-none
          focus:border-purple-600
        "
        />
      </div>
    );
  };

  return (
    <div className="h-full bg-gray-100 px-6 pt-12">
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">
        Signin to your <br /> PopX account
      </h1>

      <p className="text-gray-500 font-medium text-sm mb-8">
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit,
      </p>

      <div className="flex-1">
        <FloatingInput label="Email address" required type="email" defaultValue="Marry Doe" />
        <FloatingInput label="Password" required type="password" defaultValue="Marry Doe" />
      </div>

      <button
        className="w-full bg-gray-300 text-white py-2 rounded-md text-sm font-medium" onClick={handleprofile} >
        Login
      </button>
    </div>
  );
};

export default Login;

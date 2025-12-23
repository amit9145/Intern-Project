import React from "react";
import { useNavigate } from "react-router-dom";

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


const CreateAccount = () => {
  const navigate = useNavigate();

  const handleprofile = () => {
    navigate("/profile");
  };

  return (
    <div className="h-full flex flex-col px-6 pt-10 pb-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Create your <br /> PopX account
      </h1>

      <div className="flex-1">
        <FloatingInput label="Full Name" required defaultValue="Marry Doe" />
        <FloatingInput label="Phone number" required defaultValue="Marry Doe" />
        <FloatingInput label="Email address" required type="email" defaultValue="Marry Doe" />
        <FloatingInput label="Password" required type="password" defaultValue="Marry Doe" />
        <FloatingInput label="Company name" defaultValue="Marry Doe" />

        <div className="mt-6">
          <p className="text-sm text-gray-800 font-medium mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="agency"
                defaultChecked
                className="accent-purple-600"
              />
              Yes
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="agency"
                className="accent-purple-600"
              />
              No
            </label>
          </div>
        </div>
      </div>

      <button
        onClick={handleprofile}
        className="w-full bg-purple-700 text-white py-3 rounded-md font-medium mt-6 hover:bg-purple-800 transition"
      >
        Create Account
      </button>
    </div>
  );
};

export default CreateAccount;

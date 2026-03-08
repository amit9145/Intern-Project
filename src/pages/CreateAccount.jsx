/**
 * PopX Mobile App - Create Account/Signup Page Component
 * 
 * This is the registration screen of PopX Mobile App that provides:
 * - Comprehensive signup form with multiple input fields
 * - Floating label design for enhanced user experience
 * - Required field indicators with red asterisks
 * - Agency selection radio buttons
 * - Navigation to profile page after successful registration
 * - Mobile-optimized layout with purple accent colors
 * 
 * @author PopX Development Team
 * @version 1.0.0
 */

import React from "react";
import { useNavigate } from "react-router-dom";

const FloatingInput = ({ label, required, type = "text", defaultValue }) => {
  return (
    <div className="relative mb-7">
      <label className="absolute -top-3 left-4 bg-[#f7f8f9] px-2 text-sm text-purple-600">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        defaultValue={defaultValue}
        className="w-full rounded-md border border-gray-300 bg-[#f7f8f9] px-4 py-2 text-sm text-gray-800 focus:outline-none focus:border-purple-600"
      />
    </div>
  );
};

const CreateAccount = () => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="h-full flex flex-col bg-[#f7f8f9] px-6 pt-10 pb-6">
      <h1 className="text-2xl font-medium text-gray-900 mb-6">
        Create your <br /> PopX account
      </h1>

      <div className="flex-1 mt-3">
        <FloatingInput label="Full Name" required defaultValue="Marry Doe" />
        <FloatingInput label="Phone number" required type="tel" defaultValue="1234567890" />
        <FloatingInput label="Email address" required type="email" defaultValue="marry@example.com" />
        <FloatingInput label="Password" required type="password" defaultValue="password123" />
        <FloatingInput label="Company name" defaultValue="PopX Inc" />

        <div className="mt-6">
          <p className="text-sm text-gray-800 mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="agency" defaultChecked className="accent-purple-600" />
              Yes
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="agency" className="accent-purple-600" />
              No
            </label>
          </div>
        </div>
      </div>

      <button
        onClick={handleProfile}
        className="w-full bg-[#6C25FF] text-white py-3 rounded-md mt-6"
      >
        Create Account
      </button>
    </div>
  );
};

export default CreateAccount;

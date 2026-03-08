/**
 * PopX Mobile App - Login Page Component
 * 
 * This is the authentication screen of PopX Mobile App that includes:
 * - Signin form with email and password fields
 * - Floating label input design for better UX
 * - Disabled inputs for demonstration purposes
 * - Navigation to profile page after login
 * - Consistent purple theme and mobile layout
 * 
 * @author PopX Development Team
 * @version 1.0.0
 */

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/Intern-Project/profile");
  };

  const FloatingInput = ({ label, type = "text", placeholder, className, disabled }) => {
    return (
      <div className="relative bg-[#f7f8f9] mb-6">
        <label className="absolute -top-3 left-4 bg-[#f7f8f9] px-2 text-sm text-purple-600">
          {label}
        </label>

        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full rounded-md border border-gray-300 bg-[#f7f8f9] px-4 py-2 text-sm text-gray-800 focus:outline-none focus:border-purple-600 disabled:cursor-not-allowed ${className}`}
        />
      </div>
    );
  };

  return (
    <div className="h-full bg-[#f7f8f9] px-6 pt-8">
      <h1 className="text-[26px] font-medium text-[#1D2226] mb-1">
        Signin to your <br /> PopX account
      </h1>

      <p className="text-gray-400 text-[18px] leading-6 mt-3 mb-8">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>

      <div className="flex-1">
        <FloatingInput label="Email address" type="email" placeholder="Enter email address" disabled />
        <FloatingInput label="Password" type="password" placeholder="Enter password" disabled />
      </div>

      <button
        onClick={handleProfile}
        className="w-full bg-gray-300 h-[46px] text-white py-2 text-[16px] rounded-md"
      >
        Login
      </button>
    </div>
  );
};

export default Login;

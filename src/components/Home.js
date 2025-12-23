import React from "react";
import {useNavigate} from "react-router-dom" ;
 
const Home = () => {
  
  const navigate = useNavigate();

  const handleSignUp = ()=> {
    navigate("/signup")
  }

  const handleLogin = ()=>{
    navigate("/login")
  }

  return (
    <div className="h-full flex bg-gray-100 flex-col justify-end px-6 pb-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Welcome to PopX
      </h1>

      <p className="text-gray-500 text-xl mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <button className="w-full bg-purple-700 text-white py-3 rounded-md font-medium mb-4 hover:bg-purple-700 transition" onClick={handleSignUp} >
        Create Account
      </button>

      <button className="w-full bg-gray-300 text-black-900 py-3 rounded-md font-medium hover:bg-purple-300 transition" onClick={handleLogin} >
        Already Registered? Login
      </button>
    </div>
  );
};

export default Home;

import React from "react";
import camericon from "../assets/camericon.png"

const Profile = () => {
  return (

    <div className="h-full bg-gray-100 ">

      <div className="bg-white px-4 py-4 shadow-md">
        <h1 className="text-base font-medium text-gray-800">
          Account Settings
        </h1>
      </div>

      <div className="bg-gray-100 px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />

            <div className="absolute bottom-0 right-0 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
              <img
                src={camericon}
                alt="icon"
              />
            </div>

          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-900">
              Marry Doe
            </h2>
            <p className="text-xs text-gray-600">
              Marry@gmail.com
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      <div className="border-t border-dashed border-gray-300  mt-6" />
    </div>
  );
};

export default Profile;

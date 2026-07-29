import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">

      {/* Header */}
      <div className="bg-gray-900 px-6 py-6 text-center">
        <div className="w-20 h-20 mx-auto bg-white text-gray-900 rounded-full flex items-center justify-center text-3xl font-bold uppercase">
          {user?.name?.firstname?.charAt(0)}
          {user?.name?.lastname?.charAt(0)}
        </div>

        <h2 className="mt-3 text-xl font-bold text-white capitalize">
          {user?.name?.firstname} {user?.name?.lastname}
        </h2>

        <p className="text-gray-400 text-sm">
          @{user?.username}
        </p>
      </div>

      {/* User Details */}
      <div className="p-6 space-y-4">

        <div>
          <p className="text-xs text-gray-400 uppercase">Email</p>
          <p className="text-gray-800 font-medium">
            {user?.email}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400 uppercase">Phone</p>
          <p className="text-gray-800 font-medium">
            {user?.phone}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400 uppercase">Address</p>
          <p className="text-gray-800 font-medium capitalize">
            {user?.address?.number} {user?.address?.street},
            {" "}{user?.address?.city}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400 uppercase">Zip Code</p>
          <p className="text-gray-800 font-medium">
            {user?.address?.zipcode}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          <button className="flex-1 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition">
            View Profile
          </button>

          <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
            Edit
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserCard;
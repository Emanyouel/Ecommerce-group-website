import React from "react";
import { Link } from "react-router-dom";

const AddressDisplay = ({ address }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900 capitalize">
          SHIPPING ADDRESS
        </h2>
        {address && (
          <Link to="/address">
            <button className="px-4 py-2 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
              Change
            </button>
          </Link>
        )}
      </div>
      {address ? (
        <div className="space-y-2 text-gray-700">
          <p className="font-medium text-lg text-gray-900">
            {address.fullName}
          </p>
          <p>{address.street}</p>
          <p>
            {address.city}, {address.state} {address.zipCode}
          </p>
          <p>{address.country}</p>
          <div className="pt-2 border-t mt-3">
            <p className="text-sm">Email: {address.email}</p>
            <p className="text-sm">Phone: {address.phone}</p>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No shipping address added yet</p>
          <Link to="/address">
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Change
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AddressDisplay;

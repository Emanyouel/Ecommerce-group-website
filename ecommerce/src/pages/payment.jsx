import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Payment = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <FaCheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>

          <p className="text-lg text-gray-600 mb-2">
            Thank you for your purchase
          </p>

          <p className="text-gray-500 mb-8">
            Your order has been confirmed and will be shipped soon.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-semibold text-gray-900">
                  #{Math.floor(Math.random() * 1000000)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-semibold text-gray-900">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-semibold text-green-600">Confirmed</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition font-medium"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => navigate("/Bag")}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-medium"
            >
              View Cart
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            A confirmation email has been sent to your email address
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;

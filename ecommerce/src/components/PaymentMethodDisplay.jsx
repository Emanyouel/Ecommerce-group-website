import React from "react";
import { Link } from "react-router-dom";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

const PaymentMethodDisplay = ({
  selectedCard,
  useSameAddress,
  onUseSameAddressChange,
}) => {
  const maskCardNumber = (cardNumber) => {
    const cleaned = cardNumber.replace(/\s/g, "");
    return "•••• •••• •••• " + cleaned.slice(-4);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900 capitalize">
          PAYMENT METHOD
        </h2>
        <Link to="/payment-methods">
          <button className="px-4 py-2 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
            Change
          </button>
        </Link>
      </div>

      {selectedCard ? (
        <div className="space-y-4">
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center gap-2">
              {selectedCard.cardType?.toLowerCase() === "visa" && (
                <FaCcVisa className="w-10 h-10 text-blue-600" />
              )}
              {selectedCard.cardType?.toLowerCase() === "mastercard" && (
                <FaCcMastercard className="w-10 h-10 text-red-600" />
              )}

              {selectedCard.cardType && (
                <span className="px-2 py-1 font-medium text-lg text-gray-900 rounded ">
                  {selectedCard.cardType}
                </span>
              )}
            </div>
            <p className="text-gray-600">
              {maskCardNumber(selectedCard.cardNumber)}
            </p>
            <p className="text-sm text-gray-500">
              Expires: {selectedCard.expiryDate}
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="billingAddress"
                checked={useSameAddress}
                onChange={(e) => onUseSameAddressChange(e.target.checked)}
                className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
              />
              <label
                htmlFor="billingAddress"
                className="ml-2 text-sm text-gray-700"
              >
                Billing address same as shipping address
              </label>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-4 text-gray-500">
          <p>No payment method selected</p>
          <p className="text-sm mt-2">
            Click "Change Card Details" to add a card
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentMethodDisplay;

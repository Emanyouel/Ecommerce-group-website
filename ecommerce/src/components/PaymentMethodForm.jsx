import React, { useState } from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

const PaymentMethodForm = ({
  savedCards,
  defaultCardId,
  onSave,
  onCancel,
  onRemoveCard,
  onSetDefault,
}) => {
  const [cardData, setCardData] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardType: "visa",
    isDefault: false,
  });

  const maskCardNumber = (cardNumber) => {
    const cleaned = cardNumber.replace(/\s/g, "");
    return "•••• •••• •••• " + cleaned.slice(-4);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === "cardNumber") {
      formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();
      if (formattedValue.length > 19) return; // Max 16 digits + 3 spaces
    }

    // Format expiry date as MM/YY
    if (name === "expiryDate") {
      formattedValue = value.replace(/\D/g, "");
      if (formattedValue.length >= 2) {
        formattedValue =
          formattedValue.slice(0, 2) + "/" + formattedValue.slice(2, 4);
      }
      if (formattedValue.length > 5) return;
    }

    // Limit CVC to 3 digits
    if (name === "cvc") {
      formattedValue = value.replace(/\D/g, "").slice(0, 3);
    }

    setCardData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : formattedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      cardData.cardHolder &&
      cardData.cardNumber &&
      cardData.expiryDate &&
      cardData.cvc
    ) {
      onSave(cardData);
      setCardData({
        cardHolder: "",
        cardNumber: "",
        expiryDate: "",
        cvc: "",
        cardType: "visa",
        isDefault: false,
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Payment Methods
      </h2>

      {/* List of Saved Cards */}
      {savedCards.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Saved Cards
          </h3>
          <div className="space-y-3">
            {savedCards.map((card) => (
              <div
                key={card.id}
                className={`p-4 border-2 rounded-lg transition ${
                  card.id === defaultCardId
                    ? "border-black bg-gray-50"
                    : "border-gray-200"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-medium text-gray-900">
                        {card.cardHolder}
                      </p>
                      {card.id === defaultCardId && (
                        <span className="px-2 py-1 text-xs bg-black text-white rounded">
                          Default
                        </span>
                      )}
                      {card.cardType && (
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded capitalize">
                          {card.cardType}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      {maskCardNumber(card.cardNumber)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Expires: {card.expiryDate}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {card.id !== defaultCardId && (
                      <button
                        type="button"
                        onClick={() => onSetDefault(card.id)}
                        className="text-xs px-3 py-1 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition"
                      >
                        Set Default
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => onRemoveCard(card.id)}
                      className="text-xs px-3 py-1 text-red-600 border border-red-300 rounded hover:bg-red-50 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t mt-6 mb-6"></div>
        </div>
      )}

      {/* Add New Card Form */}
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Add New Card</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Holder Name
          </label>
          <input
            type="text"
            name="cardHolder"
            value={cardData.cardHolder}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            value={cardData.cardNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card Type
          </label>
          <div className="flex gap-4">
            <label className="flex items-center cursor-pointer p-3 border-2 rounded-lg transition hover:border-gray-400">
              <input
                type="radio"
                name="cardType"
                value="visa"
                checked={cardData.cardType === "visa"}
                onChange={handleInputChange}
                className="w-4 h-4 text-black border-gray-300 focus:ring-black"
              />
              <FaCcVisa className="ml-2 text-2xl text-blue-600" />
              <span className="ml-2 text-sm text-gray-700 font-medium">
                Visa
              </span>
            </label>
            <label className="flex items-center cursor-pointer p-3 border-2 rounded-lg transition hover:border-gray-400">
              <input
                type="radio"
                name="cardType"
                value="mastercard"
                checked={cardData.cardType === "mastercard"}
                onChange={handleInputChange}
                className="w-4 h-4 text-black border-gray-300 focus:ring-black"
              />
              <FaCcMastercard className="ml-2 text-2xl text-red-600" />
              <span className="ml-2 text-sm text-gray-700 font-medium">
                Mastercard
              </span>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <input
              type="text"
              name="expiryDate"
              value={cardData.expiryDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="MM/YY"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVC
            </label>
            <input
              type="text"
              name="cvc"
              value={cardData.cvc}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="123"
              required
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="isDefault"
            checked={cardData.isDefault}
            onChange={handleInputChange}
            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
            id="defaultCard"
          />
          <label htmlFor="defaultCard" className="ml-2 text-sm text-gray-700">
            Save this as my default payment method
          </label>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Add Card
          </button>
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PaymentMethodForm;

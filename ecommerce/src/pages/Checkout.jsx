import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  saveAddress,
  addCard,
  removeCard,
  setDefaultCard,
  setUseSameAddress,
  saveBillingAddress,
} from "../store/checkoutSlice";
import AddressForm from "../components/AddressForm";
import AddressDisplay from "../components/AddressDisplay";
import PaymentMethodForm from "../components/PaymentMethodForm";
import PaymentMethodDisplay from "../components/PaymentMethodDisplay";

// Sample cart data - you can replace this with Redux state

const Checkout = () => {
  const cartItems = useSelector((state) => state.bag.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const savedAddress = useSelector((state) => state.checkout.address);
  const savedCards = useSelector((state) => state.checkout.savedCards);
  const defaultCardId = useSelector((state) => state.checkout.defaultCardId);
  const useSameAddress = useSelector((state) => state.checkout.useSameAddress);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 15.0;
  const tax = subtotal * 0.15;
  const total = subtotal + shipping + tax;

  const handleUseSameAddressChange = (checked) => {
    dispatch(setUseSameAddress(checked));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <AddressDisplay address={savedAddress} />

            <PaymentMethodDisplay
              selectedCard={savedCards.find(
                (card) => card.id === defaultCardId,
              )}
              useSameAddress={useSameAddress}
              onUseSameAddressChange={handleUseSameAddressChange}
            />

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                REVIEW YOUR BAG
              </h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 pb-4 border-b border-gray-200 last:border-b-0"
                  >
                    <img
                      src={item.ProductImage}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link to="/Payment">
                <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition font-medium">
                  Proceed to Payment
                </button>
              </Link>

              <div className="mt-4 text-center">
                <Link
                  to="/Bag"
                  className="text-sm text-gray-600 hover:text-gray-900 underline"
                >
                  Return to Bag
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  We Accept:
                </h3>
                <div className="flex gap-2 text-gray-500 text-xs">
                  <span className="border px-2 py-1 rounded">Visa</span>
                  <span className="border px-2 py-1 rounded">Mastercard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

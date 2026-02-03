import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard, setDefaultCard } from "../store/checkoutSlice";
import PaymentMethodForm from "../components/PaymentMethodForm";

const PaymentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const savedCards = useSelector((state) => state.checkout.savedCards);
  const defaultCardId = useSelector((state) => state.checkout.defaultCardId);

  const handleAddCard = (cardData) => {
    dispatch(addCard(cardData));
  };

  const handleRemoveCard = (cardId) => {
    dispatch(removeCard(cardId));
  };

  const handleSetDefaultCard = (cardId) => {
    dispatch(setDefaultCard(cardId));
  };

  const handleCancel = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <button
            onClick={() => navigate("/checkout")}
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            <span>←</span> Back to Checkout
          </button>
        </div>

        <PaymentMethodForm
          savedCards={savedCards}
          defaultCardId={defaultCardId}
          onSave={handleAddCard}
          onCancel={handleCancel}
          onRemoveCard={handleRemoveCard}
          onSetDefault={handleSetDefaultCard}
        />
      </div>
    </div>
  );
};

export default PaymentPage;

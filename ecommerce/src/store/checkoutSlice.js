import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: null,
  billingAddress: null,
  useSameAddress: true,
  paymentInfo: null,
  paymentMethod: null,
  savedCards: [],
  defaultCardId: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    saveAddress: (state, action) => {
      state.address = action.payload;
    },
    saveBillingAddress: (state, action) => {
      state.billingAddress = action.payload;
    },
    setUseSameAddress: (state, action) => {
      state.useSameAddress = action.payload;
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    savePaymentInfo: (state, action) => {
      state.paymentInfo = action.payload;
    },
    addCard: (state, action) => {
      const newCard = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.savedCards.push(newCard);
      if (action.payload.isDefault || state.savedCards.length === 1) {
        state.defaultCardId = newCard.id;
      }
    },
    removeCard: (state, action) => {
      state.savedCards = state.savedCards.filter(card => card.id !== action.payload);
      if (state.defaultCardId === action.payload) {
        state.defaultCardId = state.savedCards.length > 0 ? state.savedCards[0].id : null;
      }
    },
    setDefaultCard: (state, action) => {
      state.defaultCardId = action.payload;
    },
    clearCheckout: (state) => {
      state.address = null;
      state.paymentInfo = null;
    },
  },
});

export const { saveAddress, saveBillingAddress, setUseSameAddress, savePaymentMethod, savePaymentInfo, addCard, removeCard, setDefaultCard, clearCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
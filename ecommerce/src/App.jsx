import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ItemView from "./pages/ItemView.jsx";
import Bag from "./pages/Bag.jsx";
import Checkout from "./pages/Checkout.jsx";
import Payment from "./pages/payment.jsx";
import AddressPage from "./pages/AddressPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<ItemView />} />
      <Route path="/Bag" element={<Bag />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/address" element={<AddressPage />} />
      <Route path="/payment-methods" element={<PaymentPage />} />
    </Routes>
  );
}

export default App;

import Watch from "../assets/Watch-img.png";
import Iphone11b from "../assets/Iphone-11-black.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBag, decreaseQuantity, addToBag } from "../store/bagSlice";

export default function RightCartBar() {
  return (
    <aside className="w-80 bg-gray-100 h-screen p-6 border-l sticky top-0">
      {/* Header */}
      <h2 className="text-xl font-bold mb-6">Bag (2)</h2>

      {/* Cart items */}
      <ul className="space-y-4">
        {/* Item 1 */}
        <li className="flex gap-4 bg-white p-4 rounded-xl shadow">
          <img
            src={Watch}
            alt="Apple Watch"
            className="w-16 h-16 object-contain"
          />

          <div className="flex-1">
            <p className="font-semibold">Apple Watch</p>
            <p className="text-sm text-gray-500">Series 5 SE</p>
            <p className="font-bold mt-1">R529.99</p>
          </div>
        </li>

        {/* Item 2 */}
        <li className="flex gap-4 bg-white p-4 rounded-xl shadow">
          <img
            src={Iphone11b}
            alt="iPhone 11"
            className="w-16 h-16 object-contain"
          />

          <div className="flex-1">
            <p className="font-semibold">iPhone 11</p>
            <p className="text-sm text-gray-500">Serious Black</p>
            <p className="font-bold mt-1">R619.99</p>
          </div>
        </li>
      </ul>

      {/* Footer */}
      <div className="mt-8 border-t pt-4">
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>R1,149.98</span>
        </div>
        <Link to="/Checkout">
          <button className="mt-4 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

import Watch from "../assets/Watch-img.png";
import Iphone11b from "../assets/Iphone-11-black.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBag, decreaseQuantity, addToBag } from "../store/bagSlice";

export default function BagArea() {
  const bagItems = useSelector((state) => state.bag.items);
  const dispatch = useDispatch();

  const total = bagItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (bagItems.length === 0) {
    return <p className="text-gray-500">Your bag is empty</p>;
  }

  return (
    <div className="space-y-4 border-l sticky top-0 mt-10 mb-10 pl-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Bag</h2>
      <div className="grid grid-cols-3 gap-3">
        {bagItems.map((item) => (
          <div key={item.id} className="flex rounded-lg  ">
            <div>
              <ul className="space-y-2 ">
                {/* Item 1 */}
                <li className="flex gap-4 bg-white p-4 rounded-xl shadow">
                  <img
                    src={item.ProductImage}
                    alt={item.name}
                    className="w-14 h-10 object-contain"
                  />
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="font-bold text-center">Total: ${total.toFixed(2)}</div>

      <Link to="/Checkout">
        <button className="mt-4 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
          Checkout
        </button>
      </Link>
    </div>
  );
}

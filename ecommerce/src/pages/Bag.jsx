import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import RightCartBar from "../components/BagArea";
import { useSelector, useDispatch } from "react-redux";
import { decreaseQuantity, addToBag } from "../store/bagSlice";
import { FaStar } from "react-icons/fa";

const Bag = () => {
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
    <div className="flex min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-1 p-6">
        <h1 className="text-4xl mb-6 ml-8">Check Your Bag Items</h1>
        <div className="mt-10 w-230">
          <ul className="space-y-4 ">
            {bagItems.map((item, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-white h-60 rounded-xl shadow"
              >
                <div>
                  <div className="grid-rows-1 flex items-center gap-2">
                    <img
                      src={item.ProductImage}
                      alt={item.name}
                      className="w-42 h-50"
                    />
                    <div>
                      {" "}
                      <p className="text-3xl m-5">{item.name}</p>
                      <p className="text-gray-500 m-5">{item.model}</p>
                      <p className="text-sm m-5">{item.ShortDescription}</p>
                      <div className="flex items-center gap-3 m-5">
                        <div className="flex text-green-500 text-lg">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                        <span className="text-sm text-green-500">
                          {item.rating} / 5
                        </span>
                      </div>
                      <p className="font-semibold m-5">
                        ${item.price} x {item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="px-2 "
                  >
                    −
                  </button>
                  <p className="inline-block ml-4">Qty: {item.quantity}</p>

                  <button
                    onClick={() => dispatch(addToBag(item))}
                    className="px-2"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <RightCartBar />
    </div>
  );
};

export default Bag;

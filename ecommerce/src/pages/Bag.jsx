import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import RightCartBar from "../components/BagArea";
import Watch from "../assets/Watch-img.png";
import headphones from "../assets/Headphones-img.png";
import Iphone11b from "../assets/Iphone-11-black.png";
import Iphone11w from "../assets/Iphone-white.png";
import Iphoner from "../assets/Iphone-red.png";
import Iphonebl from "../assets/Iphone-blue.png";

const cartlist = [
  {
    name: "Apple Watch",
    price: "529.99",
    model: "Series 5 SE",
    ProductImage: Watch,
    ShortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  },
  {
    name: "Sony ZX330BT",
    price: "30.99",
    model: "Light Grey",
    ProductImage: headphones,
    ShortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  },
  {
    name: "Iphone 11",
    price: "619.99",
    model: "Serious Black",
    ProductImage: Iphone11b,
    ShortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  },
  {
    name: "Iphone 11",
    price: "619.99",
    model: "Subway Blue",
    ProductImage: Iphonebl,
    ShortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  },
  {
    name: "Iphone 11",
    price: "619.99",
    model: "Subway Blue",
    ProductImage: Iphoner,
    ShortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  },
  {
    name: "Iphone 11",
    price: "619.99",
    model: "Subway Blue",
    ProductImage: Iphone11w,
    ShortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  },
  {
    name: "Iphone 13",
    price: "619.99",
    model: "Subway Blue",
    ProductImage: Iphoner,
    ShortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  },
  {
    name: "Iphone 14",
    price: "619.99",
    model: "Subway Blue",
    ProductImage: Iphoner,
    ShortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  },
];

const Bag = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Your Bag</h1>
        <div className="mt-10 w-230">
          <ul className="space-y-4">
            {cartlist.map((cart, i) => (
              <li key={i} className="flex justify-between items-center">
                <div>
                  <div className="grid-rows-1 flex items-center gap-2">
                    <img
                      src={cart.ProductImage}
                      alt={cart.name}
                      className="w-8 h-8"
                    />
                    <div>
                      {" "}
                      <p className="font-medium">{cart.name}</p>
                      <p className="text-sm text-gray-500">{cart.model}</p>
                      <p className="font-semibold">${cart.price}</p>
                      <p className="text-sm text-gray-500">
                        {cart.ShortDescription}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
                    Remove
                  </button>
                  <p className="inline-block ml-4">Qty: 1</p>
                  <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition ml-2">
                    add
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

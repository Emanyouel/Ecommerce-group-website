import Watch from "../assets/Watch-img.png";
import headphones from "../assets/Headphones-img.png";
import Iphone11b from "../assets/Iphone-11-black.png";
import Iphone11w from "../assets/Iphone-white.png";
import Iphoner from "../assets/Iphone-red.png";
import Iphonebl from "../assets/Iphone-blue.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBag } from "../store/bagSlice";

const data = [
  {
    name: "Apple Watch",
    price: "529.99",
    model: "Series 5 SE",
    ProductImage: Watch,
  },
  {
    name: "Sony ZX330BT",
    price: "30.99",
    model: "Light Grey",
    ProductImage: headphones,
  },
  {
    name: "Iphone 11",
    price: "619.99",
    model: "Serious Black",
    ProductImage: Iphone11b,
  },
  {
    name: "Iphone 11",
    price: "619.99",
    model: "Subway Blue",
    ProductImage: Iphonebl,
  },
  {
    name: "Iphone 11",
    price: "619.99",
    model: "Subway Blue",
    ProductImage: Iphoner,
  },
  {
    name: "Iphone 11",
    price: "619.99",
    model: "Subway Blue",
    ProductImage: Iphone11w,
  },
  {
    name: "Iphone 13",
    price: "619.99",
    model: "Subway Blue",
    ProductImage: Iphoner,
  },
  {
    name: "Iphone 14",
    price: "619.99",
    model: "Subway Blue",
    ProductImage: Iphoner,
  },
];

export default function ProductGrid() {
  const dispatch = useDispatch();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((product, i) => (
        <li key={i}>
          <div className="bg-white w-50 h-70 p-5 rounded-2xl shadow ">
            <Link to="/ItemView">
              <img
                src={product.ProductImage}
                alt={product.name}
                className="w-35 h-35"
              />
            </Link>
            <h3 className=" text-lg font-bold mt-2">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.model}</p>
            <div className=" grid-rows-1 flex items-center space-x-10">
              <p className="text-lg font-semibold mt-2">R{product.price}</p>
              <button
                onClick={() => dispatch(addToBag(product))}
                className="mt-4 w-15 bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
              >
                Add
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

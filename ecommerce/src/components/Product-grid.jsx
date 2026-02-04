import Watch from "../assets/Watch-img.png";
import headphones from "../assets/Headphones-img.png";
import Iphone11b from "../assets/Iphone-11-black.png";
import Iphone11w from "../assets/Iphone-white.png";
import Iphoner from "../assets/Iphone-red.png";
import Iphonebl from "../assets/Iphone-blue.png";
import addcarticon from "../assets/add-cart-icon.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBag } from "../store/bagSlice";

const data = [
  {
    id: 1,
    name: "Apple Watch",
    model: "Series 5 SE",
    price: 529.99,
    rating: 4.5,
    description:
      "A POWERFUL FITNESS PARTNER — With advanced metrics for all your workouts, plus features like Pacer, Heart Rate Zones, training load, Workout Buddy powered by Apple Intelligence from your nearby iPhone,* and more. Series 11 also comes with three months of Apple Fitness+ free.",
    ShortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet.",
    image1: Watch,
    image2: Watch,
    image3: Watch,
    ProductImage: Watch,
  },
  {
    id: 2,
    name: "Sony ZX330BT",
    model: "Light Grey",
    price: 30.99,
    rating: 4.5,
    description:
      "A POWERFUL FITNESS PARTNER — With advanced metrics for all your workouts, plus features like Pacer, Heart Rate Zones, training load, Workout Buddy powered by Apple Intelligence from your nearby iPhone,* and more. Series 11 also comes with three months of Apple Fitness+ free.",
    ShortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet.",
    image1: headphones,
    image2: headphones,
    image3: headphones,
    ProductImage: headphones,
  },
  {
    id: 3,
    name: "Iphone 11",
    model: "Serious Black",
    price: 619.99,
    rating: 4.5,
    description:
      "A POWERFUL FITNESS PARTNER — With advanced metrics for all your workouts, plus features like Pacer, Heart Rate Zones, training load, Workout Buddy powered by Apple Intelligence from your nearby iPhone,* and more. Series 11 also comes with three months of Apple Fitness+ free.",
    ShortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet.",
    image1: Iphone11b,
    image2: Iphone11b,
    image3: Iphone11b,
    ProductImage: Iphone11b,
  },
  {
    id: 4,
    name: "Iphone 11",
    model: "Subway Blue",
    price: 619.99,
    rating: 4.5,
    description:
      "A POWERFUL FITNESS PARTNER — With advanced metrics for all your workouts, plus features like Pacer, Heart Rate Zones, training load, Workout Buddy powered by Apple Intelligence from your nearby iPhone,* and more. Series 11 also comes with three months of Apple Fitness+ free.",
    ShortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet.",
    image1: Iphonebl,
    image2: Iphonebl,
    image3: Iphonebl,
    ProductImage: Iphonebl,
  },
  {
    id: 5,
    name: "Iphone 11",
    model: "Product Red",
    price: 619.99,
    rating: 4.5,
    description:
      "A POWERFUL FITNESS PARTNER — With advanced metrics for all your workouts, plus features like Pacer, Heart Rate Zones, training load, Workout Buddy powered by Apple Intelligence from your nearby iPhone,* and more. Series 11 also comes with three months of Apple Fitness+ free.",
    ShortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet.",
    image1: Iphoner,
    image2: Iphoner,
    image3: Iphoner,
    ProductImage: Iphoner,
  },
  {
    id: 6,
    name: "Iphone 11",
    model: "Milky White",
    price: 619.99,
    rating: 4.5,
    description:
      "A POWERFUL FITNESS PARTNER — With advanced metrics for all your workouts, plus features like Pacer, Heart Rate Zones, training load, Workout Buddy powered by Apple Intelligence from your nearby iPhone,* and more. Series 11 also comes with three months of Apple Fitness+ free.",
    ShortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet.",
    image1: Iphone11w,
    image2: Iphone11w,
    image3: Iphone11w,
    ProductImage: Iphone11w,
  },
  {
    id: 7,
    name: "Iphone 13",
    model: "Product Red",
    price: 619.99,
    rating: 4.5,
    description:
      "A POWERFUL FITNESS PARTNER — With advanced metrics for all your workouts, plus features like Pacer, Heart Rate Zones, training load, Workout Buddy powered by Apple Intelligence from your nearby iPhone,* and more. Series 11 also comes with three months of Apple Fitness+ free.",
    ShortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet.",
    image1: Iphoner,
    image2: Iphoner,
    image3: Iphoner,
    ProductImage: Iphoner,
  },
  {
    id: 8,
    name: "Iphone 14",
    model: "Product Red",
    price: 529.99,
    rating: 4.5,
    description:
      "A POWERFUL FITNESS PARTNER — With advanced metrics for all your workouts, plus features like Pacer, Heart Rate Zones, training load, Workout Buddy powered by Apple Intelligence from your nearby iPhone,* and more. Series 11 also comes with three months of Apple Fitness+ free.",
    ShortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet.",
    image1: Iphoner,
    image2: Iphoner,
    image3: Iphoner,
    ProductImage: Iphoner,
  },
];

export default function ProductGrid() {
  const dispatch = useDispatch();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {data.map((product) => (
        <li key={product.id}>
          <div className="w-50 h-70 p-8 mb-12 ">
            <Link to={`/item/${product.id}`}>
              <div className="bg-white w-40 h-45 rounded-2xl shadow items-center text-center">
                <img
                  src={product.ProductImage}
                  alt={product.name}
                  className="w-35 h-35 pl-5 pt-5 cursor-pointer object-contain"
                />
              </div>
            </Link>
            <h3 className=" text-lg mt-2">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.model}</p>
            <div className=" grid-rows-1 flex items-center space-x-10">
              <p className="text-lg">${product.price}</p>
              <button
                onClick={() => dispatch(addToBag(product))}
                className=" rounded-xl hover:bg-gray-800 cursor-pointer"
              >
                <img src={addcarticon} />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

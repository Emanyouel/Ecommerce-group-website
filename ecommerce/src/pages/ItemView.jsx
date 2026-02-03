import Watch from "../assets/Watch-img.png";
import Navbar from "../components/Navbar.jsx";
import RightCartBar from "../components/BagArea.jsx";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const items = [
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
  },
];

function ItemView() {
  return items.map((item) => (
    <div key={item.id} className="flex min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-1 p-6">
        <div className="mt-10 w-230">
          <div className="max-w-6xl mx-auto p-8">
            <Link to="/">
              <button className="text-sm text-gray-600 mb-6 flex items-center gap-2 cursor-pointer">
                ← Back
              </button>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex gap-6">
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="w-16 h-16 mb-5 bg-white rounded-xl flex items-center justify-center cursor-pointer">
                      <img
                        src={item.image1}
                        alt="Thumbnail"
                        className="w-12 h-12 object-contain"
                      />
                    </div>

                    <div className="w-16 h-16 mb-5 bg-white rounded-xl flex items-center justify-center cursor-pointer">
                      <img
                        src={item.image2}
                        alt="Thumbnail"
                        className="w-12 h-12 object-contain"
                      />
                    </div>

                    <div className="w-16 h-16 bg-white mb-5 rounded-xl flex items-center justify-center cursor-pointer">
                      <img
                        src={item.image3}
                        alt="Thumbnail"
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow p-10 flex items-center justify-center">
                  <img
                    key={item.id}
                    src={item.image1}
                    alt={item.name}
                    className="w-75 h-75 object-contain"
                  />
                </div>
              </div>

              <div>
                <h1 className="text-3xl font-bold">{item.name}</h1>
                <p className="text-gray-500 mt-1">{item.model}</p>

                <div className="flex items-center gap-3 mt-3">
                  <div className="flex text-green-500 text-lg">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {item.rating} / 5
                  </span>
                </div>

                <p className="text-2xl font-bold mt-6">${item.price}</p>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {item.ShortDescription}
                </p>

                <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition">
                  Add to Bag
                </button>
              </div>
            </div>

            <hr className="my-12" />

            <div>
              <h2 className="text-xl font-semibold mb-4">Description</h2>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </main>
      <RightCartBar />
    </div>
  ));
}

export default ItemView;

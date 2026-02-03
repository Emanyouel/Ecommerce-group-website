import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveAddress } from "../store/checkoutSlice";

const Address = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveAddress(address));
    navigate("/payment");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Delivery Address</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="street"
          placeholder="Street Address"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="city"
          placeholder="City"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="province"
          placeholder="Province"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="postalCode"
          placeholder="Postal Code"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <button className="w-full bg-black text-white p-2 rounded">
          Continue to Payment
        </button>
      </form>
    </div>
  );
};

export default Address;

// import React from 'react'
// import { Link } from "react-router-dom";

// const Address = () => {
//   return (
//     <div>
//        <h1>Address page</h1>
//       <Link to="/"><button className="mt-4 w-30 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
//             Go to Home page
//         </button></Link>
//     </div>
//   )
// }

// export default Address

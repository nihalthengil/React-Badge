import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [formData, SetFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  const [ShowProduct, SetShowProduct] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const Product = async () => {
      try {
        const Response = await axios.get("http://localhost:3000/products");
        const TakeProduct = Response.data;
        SetShowProduct(TakeProduct);
      } catch {
        console.log(error);
      }
    };
    Product();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-10 text-white">
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Product Form */}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
  
          const response = await axios.post(
            "http://localhost:3000/products",
            formData
          );
  
          if (response.ok) {
            alert("Product added");
            e.target.reset();
          }
        }}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-cyan-400 tracking-wider text-center">Add New Product</h2>
  
        <div className="space-y-4">
          <label className="block">
            <span className="block text-sm mb-1">Name:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </label>
  
          <label className="block">
            <span className="block text-sm mb-1">Price:</span>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </label>
  
          <label className="block">
            <span className="block text-sm mb-1">Description:</span>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </label>
        </div>
  
        <button
          type="submit"
          className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition shadow-md shadow-cyan-500/30 hover:shadow-cyan-500/50"
        >
          Add Product
        </button>
      </form>
  
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ShowProduct.map((data, index) => (
          <div
            key={index}
            className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-md hover:shadow-cyan-400/40 transition-all"
          >
            <p className="text-xl font-bold text-cyan-300">{data.name}</p>
            <p className="text-white/80 mt-1">{data.description}</p>
            <p className="text-green-400 font-semibold mt-2">${data.price}</p>
          </div>
        ))}
      </div>
  
      {/* Back to Dashboard Link */}
      <div className="text-center">
        <Link
          to="/dashboard"
          className="text-cyan-400 hover:text-cyan-300 underline tracking-wide transition"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  </div>
  
  );
};

export default Product;

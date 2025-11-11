import React from "react";
import { useParams } from "react-router-dom";
import { BrandsData } from "../data/Brands";

const BrandList = () => {
  const { productName } = useParams();
  // productName in url might be lowercase — try to match keys ignoring case
  const findKey = (name) => {
    if (!name) return null;
    const keys = Object.keys(BrandsData);
    const lower = name.toLowerCase();
    const matched = keys.find(k => k.toLowerCase() === lower || encodeURIComponent(k).toLowerCase() === lower);
    return matched || null;
  };

  const key = findKey(productName);
  const brands = key ? BrandsData[key] : [];

  return (
    <div className="pt-28 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">{key || productName} Brands</h1>

      {brands.length > 0 ? (
        <div className="flex flex-wrap gap-8 justify-center">
          {brands.map((brand, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center w-44 hover:scale-105 transition-all">
              <img src={brand.image} alt={brand.name} className="h-52 w-44 object-cover rounded-lg mb-2"/>
              <h2 className="text-lg font-semibold">{brand.name}</h2>
              <p className="text-gray-700 font-bold mt-1">₹{brand.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No brands found for this product.</p>
      )}
    </div>
  );
};

export default BrandList;


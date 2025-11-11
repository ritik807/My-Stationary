// import React from "react";
// import { useParams } from "react-router-dom";
// import { BrandsData } from "../data/Brands";

// const ProductList = () => {
//   const { productName } = useParams();

//   // Lowercase input for case-insensitive exact match
//   const query = productName?.toLowerCase().trim();

//   const filtered = BrandsData.filter(
//     (item) => item.name.toLowerCase().trim() === query
//   );

//   return (
//     <div className="pt-24 px-10">
//       <h1 className="text-2xl font-bold mb-4">
//         Search Results for "{productName}"
//       </h1>

//       {filtered.length === 0 ? (
//         <p className="text-gray-600">No matching products found.</p>
//       ) : (
//         <div className="grid grid-cols-3 gap-6">
//           {filtered.map((item) => (
//             <div key={item.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
//               <img src={item.image} alt={item.name} className="h-40 w-full object-cover rounded mb-3" />
//               <h2 className="font-semibold text-lg">{item.name}</h2>
//               <p className="text-gray-500">{item.brand}</p>
//               <p className="font-bold mt-1">₹{item.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductList;

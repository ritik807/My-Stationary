import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Navbar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
   const allItems = Object.values(data).flat();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/brands/${searchTerm.toLowerCase()}`);
      setSearchTerm("");
    }
  };

  const filteredData = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-[9999] flex items-center justify-between px-10 py-4">
        <ul className="flex gap-10 font-bold text-gray-900">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <CiSearch className="text-2xl" />
          <input
            className="border rounded-2xl h-10 w-72 pl-4 focus:outline-none"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Accessories Here..."
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-2xl hover:bg-gray-800"
          >
            Search
          </button>
        </form>
      </nav>

      {searchTerm && (
        <div className="pt-24 px-10">
          <h3 className="text-xl font-semibold mb-4">Search Results:</h3>
          {filteredData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-medium text-gray-800">
                    {item.name}
                  </h4>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;

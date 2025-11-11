import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/products/${query.toLowerCase()}`);
      setQuery("");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-[9999] flex items-center justify-between px-10 py-4">
      {/* LINKS */}
      <ul className="flex gap-10 font-bold text-gray-900">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* SEARCH BAR */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3"
      >
        <CiSearch className="text-2xl" />
        <input
          className="border rounded-2xl h-10 w-72 pl-4 focus:outline-none"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
  );
};

export default Navbar;

import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import Contact from "./pages/Contact"
import BrandList from "./pages/BrandList";
import Navbar from "./components/Navbar";
import BrandsData from './data/Brands';



const App = () => {

  return (
    <Router>
      
      <Navbar data={BrandsData}/>

      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/Product" element ={<Product/>}/>
        <Route path="/About" element ={<About/>}/>
        <Route path="/Contact" element ={<Contact/>}/>
        <Route path="/brands/:productName" element={<BrandList />} />
      </Routes>

    </Router>

  )
}

export default App

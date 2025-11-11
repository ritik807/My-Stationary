import React from "react";
import CustomSlider from "../components/CustomSlider";
import Category from "../components/Category";
import Category2 from "../components/Category2";
import Footer from "../components/Footer";
import image from "../assets/image.gif";

const Home = () => {
  return (
    <div>
      <div className="pt-8"> 
        <CustomSlider/>

        <div>
          <h1 className="text-3xl font-bold text-center mt-12">Elevate Your Workspace With Premium Stationery</h1>
          <Category />
        </div>

        <div className="mx-16 mt-16">
          <img src={image} className="h-96 w-full object-cover rounded-lg" alt="banner"/>
        </div>

        <div className="my-12">
          <h1 className="text-3xl font-bold text-center mt-8">Office Essentials</h1>
          <Category2 />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;

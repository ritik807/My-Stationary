import React from 'react'
import { Link } from "react-router-dom"
import image1 from '../assets/categoryImages/image1.png'
import image2 from '../assets/categoryImages/image2.png'
import image3 from '../assets/categoryImages/image3.png'
import image4 from '../assets/categoryImages/image4.png'
import image5 from '../assets/categoryImages/image5.png'
import image6 from '../assets/categoryImages/image6.png'
import image7 from '../assets/categoryImages/image7.png'
import image8 from '../assets/categoryImages/image8.png'
import image9 from '../assets/categoryImages/image9.png'
import image10 from '../assets/categoryImages/image10.png'
import image11 from '../assets/categoryImages/image11.png'

const images = [
  { src: image1, name: 'Pens' },
  { src: image2, name: 'Pencils' },
  { src: image3, name: 'Notebooks' },
  { src: image4, name: 'Notepad' },
  { src: image5, name: 'Highlighters' },
  { src: image6, name: 'Sticky Notes' },
  { src: image7, name: 'Eraser Sharpner' },
  { src: image8, name: 'Colour Pencils' },
  { src: image9, name: 'Water Colour' },
  { src: image10, name: 'Graph Notebook' },
  { src: image11, name: 'Ball Pens' },
]

const Category = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-8 mt-12">
      {images.map((item, index) => (
        <Link to={`/brands/${item.name}`} key={index}>
          <div className="flex-col flex items-center hover:bg-amber-100 rounded-xl p-2 transition">
            <img
              src={item.src}
              alt={item.name}
              className="h-52 w-44 object-cover bg-amber-50 rounded-xl"
            />
            <p className="text-center font-bold text-xl p-2">{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;

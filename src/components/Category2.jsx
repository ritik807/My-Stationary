import React from 'react'
import { Link } from "react-router-dom"
import img1 from '../assets/categoryImages2/img1.png'
import img2 from '../assets/categoryImages2/img2.png'
import img3 from '../assets/categoryImages2/img3.png'
import img4 from '../assets/categoryImages2/img4.png'
import img5 from '../assets/categoryImages2/img5.png'
import img6 from '../assets/categoryImages2/img6.png'
import img7 from '../assets/categoryImages2/img7.png'
import img8 from '../assets/categoryImages2/img8.png'
import img9 from '../assets/categoryImages2/img9.png'
import img10 from '../assets/categoryImages2/img10.png'
import img11 from '../assets/categoryImages2/img11.png'

const images = [
  { src: img1, name: 'Staplers & Pins' },
  { src: img2, name: 'Scissors' },
  { src: img3, name: 'Calculator' },
  { src: img4, name: 'Folder & Fillings' },
  { src: img5, name: 'Organizers' },
  { src: img6, name: 'Magnifiers' },
  { src: img7, name: 'Cutters' },
  { src: img8, name: 'Paperclips' },
  { src: img9, name: 'Board & Markers' },
  { src: img10, name: 'Glue' },
  { src: img11, name: 'Punches' },
]

const Category2 = () => {
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

export default Category2;

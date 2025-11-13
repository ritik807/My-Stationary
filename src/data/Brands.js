// ✅ Import all brand images
import threeM from "../assets/Brands/3M.png";
import apsara from "../assets/Brands/Apsara.png";
import apsara2 from "../assets/Brands/Apsara2.png";
import camel3 from "../assets/Brands/Camel3.png";
import camlin from "../assets/Brands/Camlin.png";
import camlin1 from "../assets/Brands/Camlin1.png";
import camlin3 from "../assets/Brands/Camlin3.png";
import cello from "../assets/Brands/Cello.png";
import cello1 from "../assets/Brands/Cello1.png";
import classmate from "../assets/Brands/Classmate.png";
import classmate1 from "../assets/Brands/Classmate1.png";
import classmate4 from "../assets/Brands/Classmate4.png";
import doms from "../assets/Brands/Doms.png";
import faberCastell from "../assets/Brands/Faber-Castell.png";
import luxor from "../assets/Brands/Luxor.png";
import luxor1 from "../assets/Brands/Luxor1.png";
import natraj from "../assets/Brands/Natraj.png";
import navneet from "../assets/Brands/Navneet.png";
import navneet4 from "../assets/Brands/Navneet4.png";
import paperkraft from "../assets/Brands/Paperkraft.png";
import pilot from "../assets/Brands/Pilot.png";
import postIt from "../assets/Brands/Post-it.png";
import reynolds from "../assets/Brands/Reynolds.png";
import reynolds4 from "../assets/Brands/Reynolds4.png";
import stabilo from "../assets/Brands/Stabilo.png";

// ✅ Correct Data Object
const BrandsData = {
  Pens: [
    { name: "Pilot", image: pilot, price: 50 },
    { name: "Reynolds", image: reynolds, price: 40 },
    { name: "Cello", image: cello, price: 45 },
    { name: "Luxor", image: luxor, price: 60 },
  ],

  Pencils: [
    { name: "Camlin", image: camlin, price: 25 },
    { name: "Apsara", image: apsara, price: 20 },
  ],

  Notebooks: [
    { name: "Classmate", image: classmate, price: 70 },
    { name: "Navneet", image: navneet, price: 60 },
    { name: "Paperkraft", image: paperkraft, price: 65 },
  ],

  Notepad: [
    { name: "Camlin", image: camlin1, price: 50 },
    { name: "Classmate", image: classmate1, price: 55 },
  ],

  Highlighters: [
    { name: "Stabilo", image: stabilo, price: 90 },
    { name: "Luxor", image: luxor1, price: 85 },
  ],

  "Sticky Notes": [
    { name: "3M", image: threeM, price: 40 },
    { name: "Post-it", image: postIt, price: 45 },
  ],

  "Eraser Sharpner": [
    { name: "Apsara", image: apsara2, price: 25 },
    { name: "Doms", image: doms, price: 30 },
  ],

  "Colour Pencils": [
    { name: "Faber-Castell", image: faberCastell, price: 120 },
    { name: "Natraj", image: natraj, price: 100 },
  ],

  "Water Colour": [
    { name: "Camlin", image: camlin3, price: 150 },
    { name: "Camel", image: camel3, price: 140 },
  ],

  "Graph Notebook": [
    { name: "Classmate", image: classmate4, price: 80 },
    { name: "Navneet", image: navneet4, price: 75 },
  ],

  "Ball Pens": [
    { name: "Reynolds", image: reynolds4, price: 50 },
    { name: "Cello", image: cello1, price: 55 },
  ],



  // Category2


  "Staplers & Pins": [
    { name: "Arrow", image: "Arrow.png", price: 150 },
    { name: "Kangaro", image: "Kangaro.png", price: 140 }
  ],
  Scissors: [
    { name: "Fiskars", image: "Fiskars.png", price: 200 },
    { name: "Camlin", image: "Camlin.png", price: 180 }
  ],
  Calculator: [
    { name: "Casio", image: "Casio.png", price: 450 },
    { name: "Sharp", image: "Sharp.png", price: 400 }
  ],
  "Folder & Fillings": [
    { name: "Classmate", image: "Classmate.png", price: 90 },
    { name: "Navneet", image: "Navneet.png", price: 85 }
  ],
  Organizers: [
    { name: "Staples", image: "Staples.png", price: 350 },
    { name: "Amazon Basics", image: "Amazon Basics.png", price: 300 }
  ],
  Magnifiers: [
    { name: "Celestron", image: "Celestron.png", price: 400 },
    { name: "Amazon Basics", image: "Amazon Basics.png", price: 350 }
  ],
  Cutters: [
    { name: "Stanley", image: "Stanley.png", price: 200 },
    { name: "Arrow", image: "Arrow.png", price: 180 }
  ],
  Paperclips: [
    { name: "OfficeMate", image: "OfficeMate.png", price: 50 },
    { name: "Amazon Basics", image: "Amazon Basics.png", price: 55 }
  ],
  "Board & Markers": [
    { name: "Faber-Castell", image: "Faber-Castell.png", price: 120 },
    { name: "Luxor", image: "Luxor.png", price: 110 }
  ],
  Glue: [
    { name: "Fevicol", image: "Fevicol.png", price: 60 },
    { name: "Camel", image: "Camel.png", price: 50 }
  ],
  Punches: [
    { name: "Kangaro", image: "Kangaro.png", price: 180 },
    { name: "Arrow", image: "Arrow.png", price: 170 }
  ],
};


export default BrandsData;
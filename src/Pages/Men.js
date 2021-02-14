import React from "react";
import Cart from "../Components/Cart";
import image1 from "../image1.jfif";
import image2 from "../image2.jfif";
import image3 from "../image3.jfif";
import image4 from "../image4.jfif";
import image5 from "../image5.jfif";
import image6 from "../image7.jfif";

let clothes = [
  {
    name: "shirt",
    description: "sdfsdf",
    img: image1,
  },
  {
    name: "boots",
    description: "dfgdfgdfgdfgcvbcv",
    img: image2,
  },
  {
    name: "trousers",
    description: "sdfsdf  sdfsd sdf sd",
    img: image3,
  },
  {
    name: "hat",
    description: "sdfsdf sdfsd sdf",
    img: image4,
  },
  {
    name: "belt",
    description: "azeza azezg rtru y",
    img: image5,
  },
  {
    name: "coat",
    description: "erter tret erg",
    img: image6,
  },
];

function Men() {
  return (
    <div>
        <div style={{display:"flex",justifyContent:"center",marginTop:50,marginBottom:50}}>
            <h1>Men Clothing</h1>
        </div>
        <div style={{display:"flex",justifyContent:"center",marginTop:50,marginBottom:50 ,textAlign:"center"}}>
        <img src={image2} style={{width:"500px"}}></img>
        </div>
      <div className="grid">
        <Cart {...clothes[0]} />
        <Cart {...clothes[1]} />
        <Cart {...clothes[2]} />
        <Cart {...clothes[3]} />
        <Cart {...clothes[4]} />
        <Cart {...clothes[5]} />
      </div>
    </div>
  );
}

export default Men;

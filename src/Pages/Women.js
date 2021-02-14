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
    description: "dfsgdf  gfdg",
    img: image2,
  },
  {
    name: "belt",
    description: "dfg dfgd fg",
    img: image3,
  },
  {
    name: "har",
    description: "daze aze ytu",
    img: image4,
  },
  {
    name: "coat",
    description: "azezt yj jjjj klg",
    img: image5,
  },
  {
    name: "jeans",
    description: "ldsjf osdifhj oidfj oio ioi i",
    img: image6,
  },
];

function Women() {
  return (
    <div>
        <div style={{display:"flex",justifyContent:"center",marginTop:50,marginBottom:50}}>
            <h1>Women Clothing</h1>
        </div>
        <div style={{display:"flex",justifyContent:"center",marginTop:50,marginBottom:50 ,textAlign:"center"}}>
        <img src={image4} style={{width:"500px"}}></img>
        </div>
      <div className="grid">
        <Cart {...clothes[5]} />
        <Cart {...clothes[2]} />
        <Cart {...clothes[4]} />
        <Cart {...clothes[0]} />
        <Cart {...clothes[3]} />
        <Cart {...clothes[1]} />
      </div>
    </div>
  );
}

export default Women;

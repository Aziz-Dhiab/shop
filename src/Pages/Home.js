import React from "react";
import { Carousel, Jumbotron, Button, Container, Card } from "react-bootstrap";
import Cart from "../Components/Cart";
import image1 from "../image1.jfif";
import image2 from "../image2.jfif";
import image3 from "../image3.jfif";

let clothes = [
  {
    name: "shirt",
    description: "sdfsdf",
    img: image1,
  },
  {
    name: "shirt",
    description: "dfsgdfgfdg",
    img: image2,
  },
  {
    name: "shirt",
    description: "dfgdfgdfg",
    img: image3,
  },
];

function Homepage() {
  return (
    <div>
      <Jumbotron fluid style={{width:"75%",margin:"auto"}}>
        <Container style={{textAlign:"center"}}>
          <h1>Clothes Store</h1>
          <p>
            Welcome To the the <b>#N°1 Selling</b> Clothes store in Tunisia.
          </p>
        </Container>
      </Jumbotron>
      <div style={{display:"flex",justifyContent:"center",marginTop:50,marginBottom:50}}>
      <Carousel style={{ width: "75%"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First Slide"
            height={500}
          />
          <Carousel.Caption className="bg-dark">
            <h3 className="black">Welcome To Our Clothes Store</h3>
            <p>We provide have the top clothing quality out there</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second Slide"
            heigh={500}
          />
          <Carousel.Caption className="bg-dark">
            <h3>Here we Have clothes for Men</h3>
            <p>
              All Men wear are available in our store and you can shippable them
              everywhere
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third Slide"
            height={500}
          />
          <Carousel.Caption className="bg-dark">
            <h3>As well for Women</h3>
            <p>Find your unique style </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div className="grid">
        <Cart {...clothes[0]} />
        <Cart {...clothes[1]} />
        <Cart {...clothes[2]} />
      </div>
    </div>
  );
}
export default Homepage;

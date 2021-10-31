import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item style={{ height: "800px" }}>
          <img
            className=" w-100  bannerImg"
            src="https://images.unsplash.com/photo-1619120238346-978e07731e77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>A Destination For The New Millennium.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100 bannerImg"
            src="https://media.istockphoto.com/photos/group-of-hikers-walks-in-mountains-at-sunset-picture-id1189969126?b=1&k=20&m=1189969126&s=170667a&w=0&h=dWy10OGBQCoA_K8ckTsmznhcjt-0-gxVIMfKYJAgU4c="
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>A Different Light.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100 bannerImg"
            src="https://media.istockphoto.com/photos/group-of-adventurers-exploring-the-rainforest-picture-id1157057834?b=1&k=20&m=1157057834&s=170667a&w=0&h=kmWfWfxohg3yyZwJN6buS6pJUBspesFQa3X1mqBTaDo="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>A New Point Of View.</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

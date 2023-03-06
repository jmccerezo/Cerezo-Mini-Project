import React from "react";
import Carousel from "react-bootstrap/Carousel";

function ImageCarousel() {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/188035/pexels-photo-188035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>First slide</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption className="carousel-caption">
          <h3>Second slide</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption className="carousel-caption">
          <h3>Third slide</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;

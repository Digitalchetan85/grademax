import React from "react";
import { Carousel, Image } from "react-bootstrap";
import Slide1 from "../../Images/slider/image-1.png";
// import Slide2 from "../../Images/slider/image-1.png";

const MainSlider = () => {
  const slides = [
    {
      id: 1,
      imgURL: Slide1,
      alt: "Image"
    },
    // {
    //   id: 2,
    //   imgURL: Slide2,
    //   alt: "Image"
    // },
  ];
  return (
    <div>
      <Carousel>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id} interval={3500}>
            <Image
              className="d-block w-100"
              src={slide.imgURL}
              alt={slide.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MainSlider;

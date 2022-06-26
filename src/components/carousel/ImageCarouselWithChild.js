import React from "react";
// import "./ImageCarouselWithChild.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require("react-responsive-carousel").Carousel;

const ImageCarouselWithChild = () => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      infiniteLoop
      autoPlay
      useKeyboardArrows
      transitionTime={1000}
    >
      <div className="slide-holder">
        <img
          alt=""
          src="https://im.indiatimes.in/content/2017/Nov/in6_1509613195.jpg"
        />
      </div>
      <div className="slide-holder">
        <img
          alt=""
          src="https://cdn.motor1.com/images/mgl/pqbN0/s4/2020-ssc-tuatara.jpg"
        />
      </div>
    </Carousel>
  );
};

export default ImageCarouselWithChild;

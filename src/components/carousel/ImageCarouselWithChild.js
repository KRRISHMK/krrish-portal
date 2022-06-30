import React from "react";
import "./ImageCarouselWithChild.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require("react-responsive-carousel").Carousel;

const ImageCarouselWithChild = (props) => {
  const { images } = props;
  return (
    <Carousel
      className="h-50"
      showArrows={true}
      showStatus={false}
      infiniteLoop
      autoPlay
      useKeyboardArrows
      getVariableItemHeight={"100px"}
      transitionTime={1000}
    >
      {images &&
        images.length > 0 &&
        images.map((image) => (
          <div className="slide-holder">
            <img alt="" src={image} />
          </div>
        ))}
    </Carousel>
  );
};

export default ImageCarouselWithChild;

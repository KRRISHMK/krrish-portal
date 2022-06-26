import React from "react";
import { Carousel } from "rsuite";

const ImageCarousel = (props) => {
  const { placement, shape, list } = props;
  return (
    <Carousel
      placement={placement ? placement : "bottom"}
      shape={shape ? shape : "dot"}
      autoplay
      className="custom-slider"
    >
      {list &&
        list.length > 0 &&
        list.map((data) => (
          <img
            src={data.img}
            height={data.height ? data.height : "250"}
            alt="carousel"
          />
        ))}
    </Carousel>
  );
};

export default ImageCarousel;

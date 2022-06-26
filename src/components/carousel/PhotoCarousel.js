import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import "./PhotoCarousel.module.scss";
import { ChevronLeft, ChevronRight } from "../../assets/icons";
import DefaultContent from "../base/DefaultContent";

const PhotoCarousel = (props) => {
  const { photos } = props;
  console.log(photos);

  return (
    <DefaultContent>
      <div className="d-block photo-media">
        <div className="d-block ">
          <Carousel
            className="photo-gallery-corousel cursor-pointer d-flex align-items-center"
            show={5}
            slide={2}
            swiping={true}
            transition={0.5}
            responsive={true}
            // width={600}
            autoSwipe={true}
            rightArrow={<ChevronRight />}
            leftArrow={<ChevronLeft />}
          >
            {photos &&
              photos.length &&
              photos.map((photo) => (
                <img
                  className="ps-2"
                  src={photo.imageUrl}
                  style={{
                    height: "114px",
                    maxHeight: "150px",
                    maxWidth: "112px",
                  }}
                  alt="img"
                />
              ))}
          </Carousel>
        </div>
      </div>
    </DefaultContent>
  );
};

export default PhotoCarousel;

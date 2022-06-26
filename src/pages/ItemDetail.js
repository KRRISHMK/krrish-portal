import React from "react";
import ContainerStart from "../components/base/ContainerStart";
import ImageCarouselWithChild from "../components/carousel/ImageCarouselWithChild";
import { Row, Col } from "rsuite";
import ItemDetailContent from "../components/Item/detail/ItemDetailContent";
import ProductDetail from "../components/Item/detail/ProductDetail";
import BackgroundWhite from "../components/base/BackgroundWhite";
import Highlights from "../components/Item/detail/Highlights";
import Slider from "../components/base/Slider";

const ItemDetail = () => {
  const description =
    "CARGO PANTS FOR MEN: No matter what your purpose is the gym, yoga, exercise, walk, jogging, Zumba or you want to step out for a coffee or dinner with friends. These cargo pants will help you flaunt your sporty style wherever you go.Cargo Joggers are just the perfect combination of trendy and comfort! Style yours with any shirt or t-shirt and we guarantee you will be rolling in compliments real quick! Grab yours now! 1).Fit Type: Slim 2.) SLIM FIT. These premium Men's 6 pocket cargo for men sit at the chinos natural waist with a relaxed seat and thigh. These Stylish, Fashionable and Hi-quality cargo pants will keep you comfortable all day 3.) MAXIMUM STORAGE. Equipped with (6) pockets for maximum storage capacity. (2) cargo flap pockets, (2) slash pockets, and (2) back pockets with flaps - great for storing cell phones, wallets, tools, and other items 4.) PREMIUM CARGO STYLE. Made with premium materials for comfort, this classic cargo pant takes you from work and the outdoors, to everyday casual wear and are a perfect combination of trendy and comfort. 5.) DURABLE MATERIALS. These Mens Cargo Pants are Constructed from 100% cotton Twill, these pants are built to last while maintaining breath-ability and comfort. Comes with Brass Zippers for Classy Look.";

  const images = [
    {
      img: "https://picsum.photos/id/1/720/480",
      url: "/",
    },
    {
      img: "https://picsum.photos/id/1/720/480",
      url: "/",
    },
    {
      img: "https://picsum.photos/id/1/720/480",
      url: "/",
    },
    {
      img: "https://picsum.photos/id/1/720/480",
      url: "/",
    },
    {
      img: "https://picsum.photos/id/1/720/480",
      url: "/",
    },
  ];

  return (
    <ContainerStart>
      <Row>

        {/* Carousel */}
        <Col sm={12}>
          <ImageCarouselWithChild />
        </Col>

        {/* Item Details */}
        <Col className="detail-card-col" sm={12}>
          <BackgroundWhite>
            <ItemDetailContent showSize={true} />
          </BackgroundWhite>

          {/* Slider Desktop */}
          <BackgroundWhite className="pt-2 only-desktop">
            <Slider isPreview={true} images={images} label="Color" />
          </BackgroundWhite>
        </Col>
      </Row>
      {/* Slider Mobile */}
      <BackgroundWhite className="pt-2 only-mobile">
        <Slider isPreview={true} images={images} label="Color" />
      </BackgroundWhite>

      {/* Highlights Text */}
      <BackgroundWhite className="pb-3 pt-3">
        <Highlights description={description} />
      </BackgroundWhite>

      {/* Product Detail Text */}
      <BackgroundWhite>
        <ProductDetail description={description} />
      </BackgroundWhite>
    </ContainerStart>
  );
};

export default ItemDetail;

import React, { useEffect, useState } from "react";
import ContainerStart from "../components/base/ContainerStart";
import ImageCarouselWithChild from "../components/carousel/ImageCarouselWithChild";
import { Row, Col } from "rsuite";
import ItemDetailContent from "../components/Item/detail/ItemDetailContent";
import ProductDetail from "../components/Item/detail/ProductDetail";
import BackgroundWhite from "../components/base/BackgroundWhite";
import Highlights from "../components/Item/detail/Highlights";
import Slider from "../components/base/Slider";
import RelatedProduct from "./RelatedProduct";
import dummyData from "../dummyData/data";
import Header from "../components/base/Header";
import { useNavigate } from "react-router-dom";

const ItemDetail = (props) => {
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState({});

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

  const getProductDetail = () => {
    let encodeProductName = window.location.pathname.split("/")[2];
    const productName = decodeURI(encodeProductName);

    dummyData.forEach((list) => {
      if (list.title === productName) {
        setProductDetail(list);
      }
    });
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <ContainerStart>
      <Row>
        {/* Carousel */}
        <Col xs={24} sm={12}>
          <ImageCarouselWithChild images={productDetail.images} />
        </Col>

        {/* Item Details */}
        <Col className="detail-card-col" sm={12}>
          <BackgroundWhite>
            <ItemDetailContent detail={productDetail} showSize={true} />
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
      <BackgroundWhite className="pt-3 pb-3">
        <Highlights highlights={JSON.stringify(productDetail.highlights)} />
      </BackgroundWhite>

      {/* Product Detail Text */}
      <BackgroundWhite>
        <ProductDetail description={productDetail.productDetail} />
      </BackgroundWhite>
      <Header
        text={"Related Products"}
        buttonLabel="View all"
        buttonHandler={() => {
          navigate(`/related-product/${productDetail.category}`);
        }}
      />
      <RelatedProduct category={productDetail.category} className="pt-3" />
    </ContainerStart>
  );
};

export default ItemDetail;

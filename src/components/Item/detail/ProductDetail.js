import React from "react";
import ShowMoreContent from "../../base/showMoreContent";

const ProductDetail = (props) => {
  const { description } = props;
  return (
    <div className="product-detail">
      <h5 className="pb-1 fw-bold">Product Detail:</h5>
      <ShowMoreContent
        className={"fs-6"}
        content={description}
        maxContentLength={500}
      />
    </div>
  );
};

export default ProductDetail;

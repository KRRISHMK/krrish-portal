import React, { useEffect, useState } from "react";
import RelatedProductItem from "../components/Item/RelatedProductItem";
import dummyData from "../dummyData/data";

const RelatedProduct = (props) => {
  const { category, className } = props;
  let productList = [];
  const [relatedProductList, setRelatedProdctList] = useState([]);

  const getList = async () => {
    await dummyData.forEach((data) => {
      if (data.category === category) {
        productList.push(data);
      }
    });
    if (productList && productList.length > 0) {
      setRelatedProdctList(productList);
    }
  };

  useEffect(() => {
    getList();
  }, [props]);

  return (
    <div className={`${className} slider-card`}>
      {relatedProductList &&
        relatedProductList.map((data) => <RelatedProductItem detail={data} />)}
    </div>
  );
};

export default RelatedProduct;

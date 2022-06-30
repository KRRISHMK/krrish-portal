import React, { useEffect, useState } from "react";
import RelatedProductItem from "../components/Item/RelatedProductItem";
import dummyData from "../dummyData/data";

const RelatedProductList = () => {
  const [relatedProductList, setRelatedProdctList] = useState([]);

  const getList = () => {
    let productList = [];
    let encodeCategory = window.location.pathname.split("/")[2];
    const category = decodeURI(encodeCategory);
    dummyData.forEach((data) => {
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
  }, []);

  return (
    <div className="related-product-card p-4">
      {relatedProductList &&
        relatedProductList.length > 0 &&
        relatedProductList.map((list) => <RelatedProductItem isShowButton detail={list} />)}
    </div>
  );
};

export default RelatedProductList;

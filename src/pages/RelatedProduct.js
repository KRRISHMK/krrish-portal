import React, { useEffect, useState } from "react";
import { Loader } from "rsuite";
import RelatedProductItem from "../components/Item/RelatedProductItem";
import dummyData from "../dummyData/data";

const RelatedProduct = (props) => {
  const { category, className, isNewPage } = props;
  let productList = [];
  const [relatedProductList, setRelatedProdctList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const getList = async () => {
    await dummyData.forEach((data) => {
      if (data.category === category) {
        productList.push(data);
      }
    });
    setIsLoading(false);
    if (productList && productList.length > 0) {
      setRelatedProdctList(productList);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getList();
  }, [props]);

  if(isLoading){
    <Loader size="lg" content="Large" />
  }
  return (
    <div className={`${className} slider-card`}>
      {relatedProductList &&
        relatedProductList.map((data) => <RelatedProductItem isNewPage detail={data} />)}
    </div>
  );
};

export default RelatedProduct;

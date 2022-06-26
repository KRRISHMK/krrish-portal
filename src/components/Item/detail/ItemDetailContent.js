import React from "react";
import BreadCrumb from "../../base/Breadcrumbs";
import ItemCategory from "../ItemCategory";
import ItemTitle from "../ItemTitle";
import PriceDetail from "./PriceDetail";
import RatingDetail from "./RatingDetails";
import Size from "./Size";
import StockCount from "./StockCount";

const ItemDetailContent = (props) => {
  const { slug, category, showSize } = props;
  //Brudcrumbs List
  const breadcrumbList = [
    { label: "Home", link: "/" },
    {
      label: slug ? slug : "Category",
      link: "",
    },
  ];
  return (
    <div>
      <BreadCrumb list={breadcrumbList} />
      <ItemTitle text={slug ? slug : "Title"} />
      <ItemCategory text={category ? category : "Category"} />
      <RatingDetail className="pt-3" />
      <PriceDetail className="pt-2" />
      <StockCount className="pt-2" count={"120"} />
      {showSize && <Size className="pt-1" />}
    </div>
  );
};

export default ItemDetailContent;

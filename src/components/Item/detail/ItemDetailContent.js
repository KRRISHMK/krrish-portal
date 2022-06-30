import React from "react";
import BreadCrumb from "../../base/Breadcrumbs";
import ItemCategory from "../ItemCategory";
import ItemTitle from "../ItemTitle";
import PriceDetail from "./PriceDetail";
import RatingDetail from "./RatingDetails";
import Size from "./Size";
import StockCount from "./StockCount";

const ItemDetailContent = (props) => {
  const { showSize, detail } = props;
  const {
    category,
    title,
    rating,
    customers,
    rate,
    offer,
    quantity,
  } = detail;
  //Brudcrumbs List
  const breadcrumbList = [
    { label: "Home", link: "/" },
    {
      label: category ? category : "Category",
      link: "",
    },
  ];
  return (
    <div>
      <BreadCrumb list={breadcrumbList} />
      <ItemTitle text={title ? title : "Title"} />
      <ItemCategory text={category ? category : "Category"} />
      <RatingDetail rating={rating} customers={customers} className="pt-3" />
      <PriceDetail rate={offer} offer={rate} className="pt-2" />
      <StockCount quantity={quantity} className="pt-2" count={"120"} />
      {showSize && <Size className="pt-1" />}
    </div>
  );
};

export default ItemDetailContent;

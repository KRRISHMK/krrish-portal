import React from "react";
import { useNavigate } from "react-router-dom";
import { Panel, Divider, Badge } from "rsuite";
import ShowMoreContent from "../base/showMoreContent";
import ItemCategory from "./ItemCategory";
import ItemTitle from "./ItemTitle";
import Rate from "./Rate";
import Rating from "./Rating";

const Items = (props) => {
  const navigate = useNavigate();
  const { itemDetail } = props;
  const {
    category,
    title,
    productDetail,
    images,
    rating,
    customers,
    rate,
    offer,
    descriptionLength,
  } = itemDetail;

  let imageUrl = images[0];

  let dummy =
    "Product Description is showing here, it should be detailed of the product.";
  const categorySplit = productDetail ? productDetail : dummy;
  return (
    <Panel
      shaded
      bordered
      bodyFill
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      <img
        className="item-image"
        src={imageUrl ? imageUrl : "https://via.placeholder.com/240x240"}
        alt="img"
        onClick={() => {
          navigate(`/item-detail/${title}`);
        }}
      />
      <Panel>
        <ItemTitle isItem text={title ? title : "Title"} fontBold />
        <Badge content="NEW" />
        <br />
        <ItemCategory color="green" text={category ? category : "Category"} />
        <p>
          <small>
            <ShowMoreContent
              content={categorySplit}
              maxContentLength={descriptionLength ? descriptionLength : 50}
            />
          </small>
        </p>
        <Rate rate={rate} offer={offer} />
        <Divider>Ratings</Divider>
        <Rating rating={rating} customers={customers} />
      </Panel>
    </Panel>
  );
};

export default Items;

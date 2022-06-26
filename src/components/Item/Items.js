import React from "react";
import { Panel, Divider, Badge } from "rsuite";
import ShowMoreContent from "../base/showMoreContent";
import ItemCategory from "./ItemCategory";
import ItemTitle from "./ItemTitle";
import Rate from "./Rate";
import Rating from "./Rating";

const Items = (props) => {
  const {
    category,
    title,
    description,
    imageUrl,
    rating,
    customers,
    descriptionLength,
  } = props;
  let dummy =
    "Product Description is showing here, it should be detailed of the product.";
  const categorySplit = description ? description : dummy;
  return (
    <Panel shaded bordered bodyFill style={{ display: "inline-block" }}>
      <img
      className="item-image"
        src={imageUrl ? imageUrl : "https://via.placeholder.com/240x240"}
        alt="img"
      />
      <Panel>
        <ItemTitle text={title ? title : "MilkyBar"} fontBold  />
        <Badge content="NEW" />
        <br />
        <ItemCategory color="green" text={category ? category : "category"} />
        <p>
          <small>
            <ShowMoreContent
              content={categorySplit}
              maxContentLength={descriptionLength ? descriptionLength : 50}
            />
          </small>
        </p>
        <Rate />
        <Divider>Ratings</Divider>
        <Rating rating={rating} customers={customers} />
      </Panel>
    </Panel>
  );
};

export default Items;

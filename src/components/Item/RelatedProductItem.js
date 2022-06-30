import React from "react";
import { Panel, Divider, Badge } from "rsuite";
import ShowMoreContent from "../base/showMoreContent";
import PriceDetail from "./detail/PriceDetail";
import ItemCategory from "./ItemCategory";
import ItemTitle from "./ItemTitle";
import Rate from "./Rate";
import Rating from "./Rating";

const RelatedProductItem = (props) => {
  const{detail}= props;
  console.log("detail", detail)
  const {
    category,
    title,
    imageUrl,
    rating,
    customers,
  } = detail;
  return (
    <div className="related-card" onClick={() => {
      window.location.href=`/item-detail/${title}`
    }}>
      <Panel shaded bordered bodyFill style={{ display: "inline-block" }}>
        <img
          className="item-image"
          src={imageUrl ? imageUrl : "https://via.placeholder.com/240x240"}
          alt="img"
        />
        <Panel>
          <ItemTitle text={title ? title : "MilkyBar"} fontBold />
          <Badge content="NEW" />
          <br />
          <ItemCategory color="green" text={category ? category : "category"} />
          {/* <p>
            <small>
              <ShowMoreContent
                content={categorySplit}
                maxContentLength={descriptionLength ? descriptionLength : 50}
              />
            </small>
          </p> */}
          <div className="d-flex pt-2 pb-2">
            <Rating
              hideVerified
              showCustomers
              rating={rating}
              customers={customers}
            />
          </div>
          <PriceDetail hideLabel hideTooltip />

          {/* <Rate hideLabel /> */}
        </Panel>
      </Panel>
    </div>
  );
};

export default RelatedProductItem;

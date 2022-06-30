import React from "react";
import { Panel, Badge, Button } from "rsuite";
import PriceDetail from "./detail/PriceDetail";
import ItemCategory from "./ItemCategory";
import ItemTitle from "./ItemTitle";
import Rate from "./Rate";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";
import CartButton from "../CartButton";
import GetRandomArray from "../../utils/Helper";

const RelatedProductItem = (props) => {
  const { detail, isShowButton, isNewPage } = props;
  const navigate = useNavigate();
  const { category, title, images, rating, customers } = detail;
  let imageUrl = GetRandomArray(images);
  return (
    <div className="related-card">
      <Panel
        shaded
        bordered
        bodyFill
        style={{ display: "inline-block", cursor: "pointer" }}
      >
        <img
          className="item-image items-image"
          src={imageUrl ?? "https://via.placeholder.com/240x240"}
          alt="img"
          onClick={() => {
            if (isNewPage) {
              window.location.href = `/item-detail/${title}`;
            } else navigate(`/item-detail/${title}`);
          }}
        />
        <Panel>
          <div
            onClick={() => {
              navigate(`/item-detail/${title}`);
            }}
            className="related-card-height"
          >
            <ItemTitle isItem text={title ?? "MilkyBar"} fontBold />
            <Badge content="NEW" />
            <br />
            <ItemCategory color="green" text={category ?? "category"} />
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
          </div>
          <CartButton label="Add to Cart" />
        </Panel>
      </Panel>
    </div>
  );
};

export default RelatedProductItem;

import React from "react";
import { Panel, Badge } from "rsuite";
import PriceDetail from "../../components/Item/detail/PriceDetail";
import ItemCategory from "../../components/Item/ItemCategory";
import ItemTitle from "../../components/Item/ItemTitle";
import Rating from "../../components/Item/Rating";
import { useNavigate } from "react-router-dom";
import CartButton from "../../components/CartButton";
import GetRandomArray from "../../utils/Helper";

const HomeCollection = (props) => {
  const { detail, isNewPage } = props;

  const navigate = useNavigate();

  const { category, title, images, rating, customers } = detail;
  let imageUrl = images && GetRandomArray(images);
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
        <div className="px-1 pb-1">
          <Panel shaded bordered bodyFill>
            <div
              onClick={() => {
                navigate(`/item-detail/${title}`);
              }}
              className="related-card-height p-2"
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
              <div style={{zIndex: "4000"}}>
                <CartButton label="Add to Cart" />
              </div>
            </div>
          </Panel>
        </div>
      </Panel>
    </div>
  );
};

export default HomeCollection;

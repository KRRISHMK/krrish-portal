import React from "react";
import { CheckIcon, StarIcon } from "../../assets/icons";
const Rating = (props) => {
  const { rating, customers } = props;
  return (
    <div className="item-collection-rating">
      <div>
        <StarIcon />
        <small className="ps-2 pe-2 fw-bold">{rating ? rating : "4.8"}</small>
      </div>
      <div>
        <CheckIcon />
        <small className="ps-2 fw-bold">
          {customers ? customers : "100"} Verified
        </small>
      </div>
    </div>
  );
};

export default Rating;

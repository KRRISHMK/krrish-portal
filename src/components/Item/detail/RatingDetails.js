import React from "react";
import { Divider } from "rsuite";
import { CheckIcon, StarIcon } from "../../../assets/icons";
const RatingDetail = (props) => {
  const { rating, customers, className } = props;
  return (
    <div className={`${className} pt-2 d-flex align-items-center`}>
      <StarIcon />
      <span className="ps-2 pe-2 fw-bold">{rating ? rating : "4.8"}</span>
      <Divider vertical />
      <CheckIcon />
      <span className="ps-2 fw-bold">
        {customers ? customers : "100"} Verified Ratings
      </span>
    </div>
  );
};

export default RatingDetail;

import React from "react";
import BackgroundWhite from "./BackgroundWhite";
const Card = (props) => {
  const { data } = props;
  return (
        <img
          className="background-card-white rounded-circle round-card-mobile"
          data-holder-rendered="true"
          src="https://via.placeholder.com/240x240"
          alt="img"
        />
  );
};

export default Card;

import React from "react";

const ItemTitle = (props) => {
  const { text, fontSize, className, color, fontBold } = props;
  return (
    <span
      style={{ color: `${color ? color : "black"}` }}
      className={`${className}  fs-${fontSize ? fontSize : "4"} ${
        fontBold && "fw-bold"
      }`}
    >
      {text ? text : "Category"}
    </span>
  );
};

export default ItemTitle;

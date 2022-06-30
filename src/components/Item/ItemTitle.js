import React from "react";

const ItemTitle = (props) => {
  const { text, fontSize, className, isItem, color, fontBold } = props;
  let titleText =
    text && isItem ? `${text.slice(0, 40)}...` : text ? text : "Title";
  return (
    <span
      style={{ color: `${color ? color : "black"}` }}
      className={`${className} item-title  fs-${fontSize ? fontSize : "4"} ${
        fontBold && "fw-bold"
      }`}
    >
      {titleText}
    </span>
  );
};

export default ItemTitle;

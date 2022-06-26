import React from "react";

const ItemCategory = (props) => {
  const { text, className, color, fontSize, fontBold } = props;
  return (
    <div>
      <em
        style={{ color: `${color ? color : "black"}` }}
        className={`${className} fs-${fontSize ? fontSize : ""} ${
          fontBold && "fw-bold"
        }`}
      >
        {text ? text : "Category"}
      </em>
    </div>
  );
};

export default ItemCategory;

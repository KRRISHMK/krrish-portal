import React from "react";

const BackgroundWhite = (props) => {
  const { children, className, bgColor } = props;

  return (
    <div className={`${className}`}>
      <div
        style={{ backgroundColor: bgColor ? bgColor : "white" }}
        className={`background-card-white`}
      >
        {children}
      </div>
    </div>
  );
};

export default BackgroundWhite;

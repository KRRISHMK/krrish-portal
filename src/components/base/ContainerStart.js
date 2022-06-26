import React from "react";

const ContainerStart = (props) => {
  const { children, padding, className } = props;
  return (
    <div
      style={{ padding: padding }}
      className={`${padding ? padding : "p-2"} ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default ContainerStart;

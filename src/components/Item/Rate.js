import React from "react";

const Rate = (props) => {
  const { rate, offer , className, color} = props;
  return (
    <div className={`fw-bold fs-5 ${className}`} >
      Rate:
      <span style={{color: `${color ? color : "green"}`}}> &#8377; {rate ? rate : "100"}</span>
    </div>
  );
};

export default Rate;

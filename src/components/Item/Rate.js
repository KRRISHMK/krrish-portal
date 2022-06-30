import React from "react";

const Rate = (props) => {
  const { rate, offer, hideLabel, className, color } = props;
  return (
    <div className={`fs-5 ${className}`}>
      {!hideLabel && "Rate:"}
      <span className="fw-bold" style={{ color: `${color ? color : "green"}` }}>
        {" "}
        &#8377; {rate ? rate : "100"}
      </span>
    </div>
  );
};

export default Rate;

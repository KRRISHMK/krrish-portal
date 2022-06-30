import React from "react";

const StockCount = (props) => {
  const { quantity, className } = props;
  return (
    <div className={`${className}`}>
      <span className="text-danger">Currently in {quantity} Stocks Available</span>
    </div>
  );
};

export default StockCount;

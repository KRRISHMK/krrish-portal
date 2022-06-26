import React from "react";

const StockCount = (props) => {
  const { count, className } = props;
  return (
    <div className={`${className}`}>
      <span className="text-danger">Currently in {count} Stocks Available</span>
    </div>
  );
};

export default StockCount;

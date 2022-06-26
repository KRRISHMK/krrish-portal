import React, { useState } from "react";
import { InputNumber } from "rsuite";

const Count = (props) => {
    const { selectedCount } = props;
  const [isCount, setCount] = useState(1);
  return (
    <div>
       <span className="fs-6 fw-bold">No. Item:</span>
      <InputNumber
        style={{ width: 80, display: "inline-flex" }}
        value={isCount}
        max={10}
        min={1}
        onChange={(value) => {
          setCount(parseInt(value));
          selectedCount(parseInt(value));
        }}
      />
    </div>
  );
};

export default Count;

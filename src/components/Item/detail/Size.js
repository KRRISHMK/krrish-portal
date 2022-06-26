import React from "react";
import { RadioGroup, Radio, Row, Col } from "rsuite";

const Size = (props) => {
  const { size, selectedSize, className } = props;

  const sizes = size ? size : ["S", "M", "L", "XL", "XXL"];

  return (
    <div className={`${className}`}>
      <Row className="d-flex align-items-center">
        <Col>
          <span className="fs-6 fw-bold">Size:</span>
        </Col>
        <Col>
          <RadioGroup
            onChange={(value) => {
              selectedSize(value);
            }}
            name="radioList"
            inline
          >
            {sizes && sizes.map((size) => <Radio value={size}>{size}</Radio>)}
          </RadioGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Size;

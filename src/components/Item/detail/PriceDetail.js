import React from "react";
import ToolTip from "../../base/Tooltip";
import { Row, Col } from "rsuite";
import { BsExclamationCircle } from "react-icons/bs";

const PriceDetail = (props) => {
  const { rate, offer, className, color, hideLabel, hideTooltip } = props;

  let productOffer = offer ? offer : "1000";
  let productRate = rate ? rate : "100";

  function getPercentageIncrease(numA, numB) {
    return ((numB - numA) / numB) * 100;
  }

  let offerRate = getPercentageIncrease(productRate, productOffer);
  return (
    <div className={`${className}`}>
      {!hideLabel && <span className="fs-4">Price:</span>}

      <span
        className="ps-1 fs-4 fw-bold"
        style={{ color: `${color ? color : "green"}` }}
      >
        &#8377; {productRate}
      </span>
      <span className="ps-3 ">
        <s> &#8377; {productOffer} </s>
      </span>
      <small style={{ color: "green" }} className="ps-2 pe-3  fw-bold">
        {parseInt(offerRate)} % OFF
      </small>
      {!hideTooltip && (
        <ToolTip icon={<BsExclamationCircle />}>
          <span className="fw-bold">Price Detail</span>
          <Row className="pb-3">
            <Col md={16}>
              <span>Maximum Retail Price:</span>
              <p>
                <small>(Inc. of all taxes)</small>
              </p>
            </Col>
            <Col>
              <s> &#8377; {productOffer} </s>
            </Col>
          </Row>
          <Row className="border-top fw-bold pb-1 border-bottom">
            <Col md={16}>
              <span>Special Price:</span>
            </Col>
            <Col>
              <span>&#8377; {productRate}</span>
            </Col>
          </Row>
          <span style={{ color: "green" }}>
            Overall you save {parseInt(offerRate)} % on this Product
          </span>
        </ToolTip>
      )}
      {!hideLabel && <p>(Inclusive of all Taxes)</p>}
    </div>
  );
};

export default PriceDetail;

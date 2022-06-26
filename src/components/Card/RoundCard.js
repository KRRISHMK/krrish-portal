import React from "react";
import { Row, Col } from "rsuite";
import Card from "../base/Card";
const RoundCard = () => {
  return (
      <Row className="d-flex justify-content-center">
        <Col sm={12}>
          <Card />
        </Col>
        <Col sm={12}>
          <Card />
        </Col>
        <Col sm={12}>
          <Card />
        </Col>
        <Col sm={12}>
          <Card />
        </Col>
      </Row>
  );
};

export default RoundCard;

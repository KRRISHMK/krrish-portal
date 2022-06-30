import React from "react";
import BackgroundWhite from "../base/BackgroundWhite";
import { FaShippingFast, FaRegCreditCard } from "react-icons/fa";
import { Panel, Button } from "rsuite";
import { useNavigate } from "react-router-dom";

const ContactUsShow = (props) => {
  const navigate = useNavigate();
  const { freeShip, cod, contactUsUrl } = props;
  return (
    <BackgroundWhite>
      <div className="shipment-card pb-2">
        <Panel bordered>
          <span className="fs-1">
            <FaShippingFast />
          </span>
          <span className="fs-3 ps-3">Free Shipping Available</span>
          <p>On Orders Above Rs. {freeShip ? freeShip : 699}</p>
        </Panel>

        <Panel bordered>
          <span className="fs-1">
            <FaRegCreditCard />
          </span>
          <span className="fs-3 ps-3">COD Available</span>
          <p>@ Rs. {cod ? cod : 60} Per Order</p>
        </Panel>
      </div>
      <Panel bordered>
        <span className="d-flex  fs-4 justify-content-center pb-2">
          Have Queries or Concerns?
        </span>
        <div className="d-flex justify-content-center">
          <Button
            onClick={() => {
              navigate(`${contactUsUrl ? contactUsUrl : "/"}`);
            }}
            appearance="primary"
          >
            Contact Us
          </Button>
        </div>
      </Panel>
    </BackgroundWhite>
  );
};

export default ContactUsShow;

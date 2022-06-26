import React from "react";
import { Panel } from "rsuite";
import BackgroundWhite from "../base/BackgroundWhite";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";

const PaymentShow = (props) => {
  return (
    <BackgroundWhite className="pt-2 d-flex justify-content-center">
      <Panel bordered>
        <div className="payment-content-card fs-5">
          <div>
            <span className="fs-1 text-success">
              <AiFillSafetyCertificate />
            </span>
            <span className="fs-3 ps-3 text-success">
              100% Payment Protection
            </span>
          </div>
          <div className="payment-content-card-icon">
            <span>
              <RiVisaLine />
            </span>
            <span>
              <FaCcMastercard />
            </span>
            <span>
              <SiPaytm />
            </span>
          </div>
        </div>
      </Panel>
    </BackgroundWhite>
  );
};

export default PaymentShow;

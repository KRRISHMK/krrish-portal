import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Button } from "rsuite";

const Header = (props) => {
  const { text, buttonLabel, buttonHandler } = props;
  return (
    <div className="pt-3 d-flex justify-content-between">
      <h3 className="fw-bold pb-2">{text}:</h3>
      {buttonLabel && (
        <Button
          color="blue"
          appearance="primary"
          onClick={() => {
            buttonHandler()
          }}
        >
           <span className="fs-6">{buttonLabel}</span> <span className="fs-3"><FaRegArrowAltCircleRight /></span>
        </Button>
      )}
    </div>
  );
};

export default Header;

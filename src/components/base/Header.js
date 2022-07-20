import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Button, IconButton } from "rsuite";
import { BsPlusCircleDotted } from "react-icons/bs";

const Header = (props) => {
  const { text, buttonLabel, buttonHandler, addButton } = props;
  return (
    <div className="pt-3 d-flex justify-content-between pb-3 p-2">
      <span className="fw-bold fs-4 pb-2">{text}</span>
      {buttonLabel && (
        <Button
          color="blue"
          appearance="primary"
          onClick={() => {
            buttonHandler();
          }}
        >
          {addButton && (
            <span className="fs-3 pe-2">
              <BsPlusCircleDotted />
            </span>
          )}
          <span className="fs-6">{buttonLabel}</span>
          {!addButton && (
            <span className="fs-3">
              <FaRegArrowAltCircleRight />
            </span>
          )}
        </Button>
      )}
    </div>
  );
};

export default Header;

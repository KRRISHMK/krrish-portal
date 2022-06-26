import React from "react";

const Header = (props) => {
  const { text } = props;
  return (
    <div>
      <h5 className="fw-bold pb-2">{text}:</h5>
    </div>
  );
};

export default Header;

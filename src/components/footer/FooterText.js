import React from "react";

const FooterText = (props) => {
  const { text } = props;
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="d-flex justify-content-center fw-bold pb-3">
      © {year} {text} All Rights Reserved
    </div>
  );
};

export default FooterText;

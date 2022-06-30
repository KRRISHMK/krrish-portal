import React from "react";
import ShowMoreContent from "../../base/showMoreContent";

const Highlights = (props) => {
    const { highlights } = props;
    return (
      <div className="product-detail">
        <h5 className="pb-1 fw-bold">Highlights:</h5>
        <ShowMoreContent
          className={"fs-6"}
          content={highlights}
          maxContentLength={500}
        />
      </div>
    );
};

export default Highlights;

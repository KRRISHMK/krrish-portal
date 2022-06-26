import React, { useState } from "react";

const ShowMoreContent = (props) => {
  const [showMore, setShowMore] = useState(false);
  const { content, className, maxContentLength, id } = props;

  const showMoreHandler = () => {
    setShowMore(!showMore);
  };

  let contentLength = maxContentLength || 200;
  const isContentLengthExceed = content && content.length > contentLength;
  return (
    <p className={`${className}`}>
      <p>
        {isContentLengthExceed && !showMore
          ? `${content.slice(0, contentLength)}...`
          : content}
        {isContentLengthExceed ? (
          <a
            id={id}
            href="#"
            className={["d-flex", "show-more"].join(" ")}
            onClick={(e) => {
              e.preventDefault();
              showMoreHandler();
            }}
          >
            Show {showMore ? <>Less</> : <>More</>}
          </a>
        ) : (
          ""
        )}
      </p>
    </p>
  );
};
export default ShowMoreContent;

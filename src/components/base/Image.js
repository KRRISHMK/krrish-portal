import React from "react";
import PropTypes from "prop-types";

const Image = (props) => {
  const {id, className, src, alt, onClick } = props;

  if (!src || !alt) {
    throw new Error("You need to pass src and alt props to Image component.");
  }

  return (
    <img
    id={id}
      className={className}
      src={src}
      alt={alt}
      type="button"
      onClick={() => {
        onClick();
      }}
    />
  );
};

const { string } = PropTypes;

Image.defaultProps = {
  className: null,
  src: null,
  alt: null,
};

Image.propTypes = {
  className: string,
  src: string.isRequired,
  alt: string.isRequired,
};

export default Image;

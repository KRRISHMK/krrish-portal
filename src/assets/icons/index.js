import React from "react";
import SVG from "react-inlinesvg";

import chevronLeft from "./icon-chevron-left.svg";
import chevronRight from "./icon-chevron-right.svg";
import chevronUp from "./icon-chevron-up.svg";
import chevronDown from "./icon-chevron-down.svg";
import starIcon from "./star-icon.svg";
import checkIcon from "./tick-icon.svg";

const ChevronRight = () => <SVG src={chevronRight} />;
const ChevronLeft = () => <SVG src={chevronLeft} />;
const ChevronUp = () => <SVG src={chevronUp} />;
const ChevronDown = () => <SVG src={chevronDown} />;
const StarIcon = () => <SVG src={starIcon} />;
const CheckIcon = () => <SVG src={checkIcon} />;

export {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  StarIcon,
  CheckIcon,
};

import React from "react";
import { Popover, Whisper } from "rsuite";
import { BsExclamationCircle } from "react-icons/bs";

const ToolTip = (props) => {
  const { children, icon, placement } = props;
  return (
    <Whisper
      placement={placement ? placement : "bottomEnd"}
      followCursor
      speaker={<Popover>{children}</Popover>}
    >
      <span className="fs-5">{icon ? icon : <BsExclamationCircle />}</span>
    </Whisper>
  );
};

export default ToolTip;

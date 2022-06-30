import React from "react";
import { Button } from "rsuite";

const CartButton = (props) => {
  return (
    <div className="pb-2">
      <Button className="w-100" appearance="primary">{props.label}</Button>
    </div>
  );
};

export default CartButton;

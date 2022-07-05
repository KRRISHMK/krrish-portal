import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { ImGift } from "react-icons/im";
import { MdShoppingCart } from "react-icons/md";

import "./styles/cartButton.css";
const CartButton = (props) => {
  const [click, setClick] = useState(false);

  function cartClick() {
    setClick(true);
  }

  return (
    <button
      className={`cart-button ${click ? "clicked" : ""}`}
      onClick={() => {
        cartClick();
      }}
    >
      <span className={`${click ? "d-none" : ""} "add-to-cart fw-bold"`}>Add to Cart</span>
      <span className="added"><MdShoppingCart /> Added</span>
      <BsCart3 className="cart-icon" />
      <ImGift className="cart-item" />
    </button>
  );
};

export default CartButton;

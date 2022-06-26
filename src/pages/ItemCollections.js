import React from "react";
import { Grid , Row, Col } from "rsuite";
import Items from "../components/Item/Items";

const ItemCollections = () => {
  return (
    <div className="item-cards-collection">
          <Items />
          <Items />
          <Items />
          <Items />
    </div>
  );
};

export default ItemCollections;

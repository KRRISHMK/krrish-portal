import React from "react";
import Items from "../components/Item/Items";

const ItemCollections = (props) => {
  const { data } = props;
  return (
    <div className="item-cards-collection">
      {data &&
        data.length > 0 &&
        data.map((item) =>( <Items itemDetail={item} />))}
    </div>
  );
};

export default ItemCollections;

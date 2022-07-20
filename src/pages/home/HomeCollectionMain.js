import React from "react";
import Header from "../../components/base/Header";
import HomeCollection from "./HomeCollection";

const HomeCollectionMain = (props) => {
  const { lists, heading, buttonLabel, buttonHandler } = props;
  return (
    <>
      <Header
        text={heading}
        buttonLabel={buttonLabel}
        buttonHandler={buttonHandler}
      />

      <div className="slider-card p-2">
        {lists &&
          lists.length > 0 &&
          lists.map((list) => <HomeCollection isShowButton detail={list} />)}
      </div>
    </>
  );
};

export default HomeCollectionMain;

import React, { useEffect } from "react";

export const useOutsideAlerter = (ref, onClickOutsideFn) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (onClickOutsideFn) {
          onClickOutsideFn();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutsideFn]);
};

//Get Random Array
const GetRandomArray = (array) => {
  let random = Math.floor(Math.random() * array.length);
  console.log("random", random);
  let randomArray = array[random];
  return randomArray;
};
export default GetRandomArray;
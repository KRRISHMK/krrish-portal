import React from "react";
import InputWithIcon from "../../components/base/InputWithIcon";
import TextAreaWithIcon from "../../components/base/TextAreaWithIcon";

const Edit = () => {
  return (
    <div>
      <InputWithIcon name="productName" label="Product Name" />
      <InputWithIcon name="category" label="Category Name" />
      <InputWithIcon name="category" label="Category Name" />
      <TextAreaWithIcon name="description" label="Product Description" />
      <TextAreaWithIcon name="productDetail" label="Product Detail" />
    </div>
  );
};

export default Edit;

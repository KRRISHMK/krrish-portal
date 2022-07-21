import React from "react";
import { Input, InputGroup } from "rsuite";
import { TextIcon } from "../../assets/icons";

const InputWithIcon = (props) => {
  const { name, label, height, placeholder, className, icon } = props;
  const styles = {
    height: height ?? 50,
    marginBottom: 10,
  };
  return (
    <div className="px-4">
      <p className="pb-2 fs-6 fw-bold">{label ?? "Label"}</p>
      <InputGroup className={className} inside style={styles}>
        <InputGroup.Addon className="pe-5">
          {icon ?? <TextIcon size="2em" />}
        </InputGroup.Addon>
        <Input
          name={name}
          placeholder={placeholder ?? "Enter " + label ?? "Enter" }
          className="ps-5"
        />
      </InputGroup>
    </div>
  );
};

export default InputWithIcon;

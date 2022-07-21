import React from "react";
import { Input } from "rsuite";

const TextAreaWithIcon = (props) => {
  const { name, label, rows, placeholder, className } = props;

  return (
    <div className={`${className ?? ""} px-4 mb-3`}>
      <p className="pb-2 fs-6 fw-bold">{label ?? "Label"}</p>
      <Input
        name={name}
        as="textarea"
        rows={rows ?? 5}
        placeholder={placeholder ?? "Textarea"}
      />
    </div>
  );
};

export default TextAreaWithIcon;

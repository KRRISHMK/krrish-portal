import React from "react";
import Image from "./Image";
import css from "./style/Avatar.module.scss";
const Avatar = (props) => {
  const {id, image, label, onClick } = props;
  return (
    <div>
      <Image id={id} className={css.profileImage} src={image} alt="Profile image" onClick={onClick} />
      <span  type="button" className="ps-2 fw-bold">Hi, {label ? label : "There"}</span>
    </div>
  );
};

export default Avatar;

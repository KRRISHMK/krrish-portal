import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Custom Header components
import HeaderNavigation from "./Navigation";

import css from "./Header.module.scss";
import { useOutsideAlerter } from "../../utils/Helper";
import Sidebar from "../sidebar/Sidebar";

//Logo
import logo from "../../assets/sidebar/logo.jpeg";
import Avatar from "../base/Avatar";
import AppBar from "../appBar/AppBar";

const Header = (props) => {
  const { rootClassName, className, isMenuOpen, setMenuOpen } = props;
  const classes = classNames(rootClassName || css.root, className);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  useOutsideAlerter(headerRef, () => {
    setMenuOpen(false);
  });

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes} ref={headerRef}>
      <div className={css.headerContent}>
        <Avatar image={logo} label="Krrish MK" onClick={handleClick} />
        <AppBar isOpen={isOpen} toggle={toggle} />
        <HeaderNavigation isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <Sidebar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

const { string, bool, func } = PropTypes;

Header.defaultProps = {
  rootClassName: null,
  className: null,
  isMenuOpen: false,
  setMenuOpen: null,
};

Header.propTypes = {
  rootClassName: string,
  className: string,
  isMenuOpen: bool.isRequired,
  setMenuOpen: func.isRequired,
};

export default Header;

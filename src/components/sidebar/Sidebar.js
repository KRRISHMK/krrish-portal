import React, { useState, useEffect } from "react";
import { bool, string, array } from "prop-types";
import config from "../../SidebarConfig";
import classNames from "classnames";

// Custom Sidebar components
import SidebarList from "./SidebarList";
import SidebarListItem, {
  SidebarListItemWithOptions,
  SidebarBackListItem,
} from "./SidebarListItem";

import profileImageSrc from "../../assets/sidebar/logo.jpeg";
import css from "./Sidebar.module.scss";
import Image from "../base/Image";
import IconArrow from "../base/IconArrow";

const CLOSE_SUB_MENU_DELAY = 300;

const Sidebar = (props) => {
  const { rootClassName, className, isMenuOpen, sidebarOptions } = props;
  const sidebarClasses = classNames(rootClassName || css.root, className, {
    [css.sidebarOpen]: isMenuOpen,
  });

  // Handle sub items state
  const [activeSubItem, setActiveSubItem] = useState(null);

  useEffect(() => {
    const closeSubMenu = !isMenuOpen && activeSubItem;
    if (closeSubMenu) {
      setTimeout(() => {
        setActiveSubItem(null);
      }, [CLOSE_SUB_MENU_DELAY]);
    }
  }, [isMenuOpen, activeSubItem]);

  // Find the subItem options which will get
  // filled once the user selects the item that
  // has additional options (sub items)
  const subItemOptions = sidebarOptions.find(
    (s) => s.key === activeSubItem
  )?.options;

  // Render sidebar options from
  // config.js file
  const options = subItemOptions ? subItemOptions : sidebarOptions;
  const renderSidebarOptions = options.map((option) => {
    return option.options ? (
      <SidebarListItemWithOptions
        key={option.key}
        item={option}
        activeSubItem={activeSubItem}
        setActiveSubItem={setActiveSubItem}
      />
    ) : (
      <SidebarListItem key={option.key} item={option} />
    );
  });

  return (
    <div className={sidebarClasses}>
      <SidebarList>
        {subItemOptions ? (
          <SidebarBackListItem setActiveSubItem={setActiveSubItem} />
        ) : null}
        {renderSidebarOptions}
      </SidebarList>
      <div className={css.profile}>
        <div className={css.profileWrapper}>
          <Image
            className={css.profileImage}
            src={profileImageSrc}
            alt="Profile image"
          />
          <span className={css.profileDisplayName}>Krrish MK</span>
        </div>
        <IconArrow className={css.profileArrow} />
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  rootClassName: null,
  className: null,
  isMenuOpen: false,

  // Options
  sidebarOptions: config.sidebarOptions,
};

Sidebar.propTypes = {
  rootClassName: string,
  className: string,
  isMenuOpen: bool.isRequired,

  // Options
  sidebarOptions: array.isRequired,
};

export default Sidebar;

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import NavItem from "./NavItem";

const Nav = ({
  items,
  isMobileMenuOpen,
  onMobileMenuClick,
  activeMenuItem,
  currentMenuItem,
  onMenuItemClick,
  onClick,
  renderLink,
  renderMenuItem,
  header,
  footer,
  open,
  close,
}) => {
  console.log(activeMenuItem);
  return (
    <>
      <button
        type="button"
        id="usa-nav-open"
        onClick={onMobileMenuClick}
        className="usa-nav-open"
      >
        {open}
      </button>
      <nav
        role="navigation"
        aria-label="Primary navigation"
        className={classnames({
          "usa-nav": true,
          "is-visible": isMobileMenuOpen,
        })}
      >
        <div className="usa-nav__inner">
          <button
            id="usa-nav-close"
            type="button"
            className="usa-nav-close"
            onClick={onMobileMenuClick}
          >
            {close}
          </button>
          {header && <div className="usa-nav__header">{header}</div>}
          <ul className="usa-accordion usa-nav__primary">
            {items.map((item, idx) => {
              const nodeId = `usa-nav-item-${idx}`;
              return (
                <NavItem
                  data={item}
                  key={nodeId}
                  id={nodeId}
                  isOpen={activeMenuItem === nodeId}
                  currentMenuItem={currentMenuItem}
                  onMenuItemClick={onMenuItemClick}
                  onClick={onClick}
                  renderLink={renderLink}
                  renderMenuItem={renderMenuItem}
                />
              );
            })}
          </ul>
        </div>
        {footer && <div className="usa-nav__footer">{footer}</div>}
      </nav>
    </>
  );
};

const Text = (item) => item.text;

Nav.defaultProps = {
  items: [],
  renderText: Text,
  isMobileMenuOpen: false,
  onMobileMenuClick: () => console.log("onMobileMenuClick clicked!"),
  activeMenuItem: null,
  onMenuItemClick: () => console.log("onMenuItemClick clicked!"),
  onClick: () => console.log("onClick clicked!"),
  open: "Menu",
  close: "Close",
};

Nav.propTypes = {
  items: PropTypes.array,
  renderText: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default Nav;

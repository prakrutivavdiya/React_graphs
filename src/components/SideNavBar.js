import React from "react";
import { NavItem, Nav, NavLink } from "reactstrap";
import dashboard from "../assets/dashboard.png";
import campaign from "../assets/campaign.png";
import sales from "../assets/sales.png";
import notification from "../assets/notification.png";
import products from "../assets/products.png";
import stores from "../assets/stores.png";
import settings from "../assets/settings.png";
import theme from "../assets/theme.png";
import dark from "../assets/toggle-dark.png";
import light from "../assets/toggle-light.png";
import { FaWindowClose } from "react-icons/fa";
const SideNavBar = ({ isOpen, setSidebar, themeValue, toggleTheme }) => {
  const style = {
    display: "none",
  };
  return (
    <div
      className="col-md-2 col-sm-6 m-0 px-1 sidebar text-light"
      style={!isOpen ? style : null}
    >
      <FaWindowClose
        onClick={() => setSidebar(false)}
        className="d-flex float-end h5 text-light m-1"
      />
      <Nav vertical className="my-5">
        <NavItem>
          <NavLink href="#" className="text-light">
            <img src={dashboard} alt="icon" /> Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-light">
            <img src={sales} alt="icon" /> Sales
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-light">
            <img src={products} alt="icon" /> Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-light">
            <img src={stores} alt="icon" /> Stores
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-light">
            <img src={campaign} alt="icon" /> Campaigns
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-light">
            <img src={notification} alt="icon" /> Notifications
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="text-light">
            <img src={settings} alt="icon" /> Settings
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-light">
            <img src={theme} alt="icon" /> Theme{" "}
            <img
              width="80px"
              src={themeValue === "light" ? light : dark}
              alt="icon"
              onClick={() =>
                toggleTheme(themeValue === "light" ? "dark" : "light")
              }
            />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default SideNavBar;

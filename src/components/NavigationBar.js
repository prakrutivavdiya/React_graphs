import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import hamberger from "../assets/hamberger.png";
import data from "../data.json";
import { FaUserCircle } from "react-icons/fa";
const NavigationBar = ({ isOpen, setSidebar }) => {
  const style = {
    height: {
      height: "50px",
    },
    alignRight: {
      marginRight: "2%",
      marginLeft: "auto",
    },
  };
  return (
    <div>
      <Navbar
        style={style.height}
        className="py-0 navbar border-low"
        dark
        expand="md"
      >
        <img
          src={hamberger}
          alt="toggle sidebar"
          className="px-2"
          onClick={() => {
            setSidebar(!isOpen);
          }}
        />
        <NavbarBrand href="/" className="px-2">
          LOOP
        </NavbarBrand>
        <NavbarText style={style.alignRight}>
          <span>Hello {data.user}</span>
          <FaUserCircle className="h3 mx-2" />
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

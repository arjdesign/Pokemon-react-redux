import { Nav, NavLogo, NavWrapper } from "./Header.style";
import React from "react";

const Header = ({ children }) => {
  return (
    <div>
      <Nav>
        <NavLogo>PokeFinder</NavLogo>
        <NavWrapper>{children}</NavWrapper>
      </Nav>
    </div>
  );
};

export default Header;

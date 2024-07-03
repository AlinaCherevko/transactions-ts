import React from "react";

import { HeaderContainer, StyledNavLink } from "./HeaderStyles";

const Header = () => {
  return (
    <section>
      <div className="container">
        <HeaderContainer>
          <StyledNavLink to="/">HOME</StyledNavLink>
          <StyledNavLink to="/transactions">TRANSACTIONS</StyledNavLink>
          <StyledNavLink to="/login">LOGIN</StyledNavLink>
          <StyledNavLink to="/signup">SIGN UP</StyledNavLink>
        </HeaderContainer>
      </div>
    </section>
  );
};

export default Header;

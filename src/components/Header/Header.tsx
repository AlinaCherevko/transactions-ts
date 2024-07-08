import { Button } from "@chakra-ui/react";
import { HeaderContainer, StyledNavLink } from "./HeaderStyles";
import { useNavigate } from "react-router-dom";
import { useAuthZustant } from "../../store/store";

const Header = () => {
  const { isAuth, logout } = useAuthZustant();

  const navigate = useNavigate();
  return (
    <section>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <HeaderContainer>
            <StyledNavLink to="/">HOME</StyledNavLink>
            {isAuth ? (
              <StyledNavLink to="/transactions">TRANSACTIONS</StyledNavLink>
            ) : (
              <>
                {" "}
                <StyledNavLink to="/login">LOGIN</StyledNavLink>
                <StyledNavLink to="/signup">SIGN UP</StyledNavLink>
              </>
            )}
          </HeaderContainer>
          {isAuth && (
            <Button
              onClick={() => {
                localStorage.removeItem("token");
                logout();
                navigate("/login");
              }}
            >
              Log out
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;

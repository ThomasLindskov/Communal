import { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";
import Logo from "../assets/svgComponents/Logo";
import { theme } from "../theme";

const NavWrapper = styled.div`
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  background-color: ${({ theme }) => theme.colors.primary};
  filter: drop-shadow(${({ theme }) => theme.utils.dropShadow});
  padding: 17px 70px;
  position: fixed;
  left: 10px;
  top: 10px;
  right: 10px;
`;

export const Navbar = () => {
  return (
    <NavWrapper>
      <div style={{ width: "150px" }}>
        <Logo color={theme.colors.white} />
      </div>
    </NavWrapper>
  );
};

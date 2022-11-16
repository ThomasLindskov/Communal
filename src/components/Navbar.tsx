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
  display: flex;
  gap: 60px;
`;

const RoutesWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Navbar = () => {
  return (
    <NavWrapper>
      <div style={{ minWidth: "180px" }}>
        <Logo color={theme.colors.white} />
      </div>
      <RoutesWrapper>
        <div>Chats</div>
        <div>Groups</div>
        <div>Profile</div>
      </RoutesWrapper>
    </NavWrapper>
  );
};

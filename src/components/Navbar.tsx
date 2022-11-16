import { useEffect } from "react";
import { useState } from "react";
import useNavbarDropDownToggle from "src/hooks/useNavbarDropDownToggle";
import styled from "styled-components";
import Logo from "../assets/svgComponents/Logo";
import { theme } from "../theme";
import Avatar from "./Avatar";

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
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.white};
`;

const RelativeWrapper = styled.div`
  position: relative;
`;

const NavDropdownWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  background-color: ${({ theme }) => theme.colors.primary};
  right: 60px;
  top: 100px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  > * {
    &: not(: last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    }
  }
`;

const NavDropdownItem = styled.div`
  padding: 1em;
  &:hover {
    cursor: pointer;
  }
`;

export const Navbar = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useNavbarDropDownToggle(false);

  const [toggledDisabled, setToggledDisabled] = useState(false);

  useEffect(() => {
    setToggledDisabled(!toggledDisabled);
  }, [isComponentVisible]);

  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsComponentVisible(!isComponentVisible);
  };

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
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar
          imageUrl="/img/EricCartman.png"
          altText="user-avatar"
          size={theme.avatarSize.medium}
          clickable
          {...(toggledDisabled && { onClick: toggleDropdown })}
        />
        <img
          src="/icons/Chevron.svg"
          alt="chevron"
          style={{ cursor: "pointer" }}
          {...(toggledDisabled && { onClick: toggleDropdown })}
        />
      </div>
      {isComponentVisible && (
        <NavDropdownWrapper ref={ref}>
          <NavDropdownItem>Edit user</NavDropdownItem>
          <NavDropdownItem>Log out</NavDropdownItem>
        </NavDropdownWrapper>
      )}
    </NavWrapper>
  );
};

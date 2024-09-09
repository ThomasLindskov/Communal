import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLogOutMutation } from "src/hooks/useLogOutMutation";
import useNavbarDropDownToggle from "src/hooks/useNavbarDropDownToggle";
import styled from "styled-components";
import Logo from "../assets/svgComponents/Logo";
import { theme } from "../theme";
import toast, { Toaster } from "react-hot-toast";
import { CardLink } from "./CardLink";
import { useAvatarQuery } from "src/hooks/useAvatarQuery";
import { useToggle } from "ahooks";
import { Avatar } from "src/components/Avatar";

export const Navbar = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logOut, client } = useLogOutMutation();
  const { data: avatar } = useAvatarQuery();
  let navigate = useNavigate();

  const handleLogOut = () => {
    logOut({
      onCompleted: () => {
        client.clearStore();
        toast.success("Logged out successfully", { duration: 700 });
        setTimeout(() => {
          localStorage.clear();
          navigate("/");
        }, 1000);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const { ref, isComponentVisible, setIsComponentVisible } =
    useNavbarDropDownToggle(false);

  const [isDropDownExpandable, { toggle: toggleDropdownExpanding }] =
    useToggle(false);

  useEffect(() => {
    toggleDropdownExpanding();
  }, [isComponentVisible]);

  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsComponentVisible(!isComponentVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navbarRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (navbarRef && navbarRef.current) {
      setNavbarHeight(navbarRef.current.getBoundingClientRect().height);
    }
  }, [navbarRef]);

  const location = useLocation();
  const avatarUrl = avatar?.user?.image_url;

  return (
    <>
      <NavWrapper ref={navbarRef}>
        <div style={{ minWidth: "180px" }}>
          <Link to="/chats">
            <Logo color={theme.colors.white} />
          </Link>
        </div>
        <DesktopMenu>
          <RoutesWrapper style={{ marginLeft: 20 }}>
            <Link
              to="/chats"
              style={{
                textDecoration:
                  location.pathname === "/chats" ? "underline" : "none",
              }}
            >
              <CardLink color={theme.colors.white}>Chats</CardLink>
            </Link>
          </RoutesWrapper>
          <AvatarWrapper
            isActive={isComponentVisible}
            onClick={isDropDownExpandable ? toggleDropdown : undefined}
          >
            <Avatar
              imageUrl={avatarUrl}
              altText="user-avatar"
              size={theme.avatarSize.medium}
            />
            <img
              src="/icons/Chevron.svg"
              alt="chevron"
              style={{ cursor: "pointer" }}
            />
          </AvatarWrapper>
          {isComponentVisible && (
            <NavDropdownWrapper ref={ref}>
              <Link
                to="/edit-profile"
                style={{
                  textDecoration:
                    location.pathname === "/edit-profile" ? "underline" : "none",
                }}
              >
                <NavDropdownItem>
                  <CardLink color={theme.colors.white}>Edit user</CardLink>
                </NavDropdownItem>
              </Link>
              <NavDropdownItem onClick={handleLogOut}>
                <CardLink color={theme.colors.white}>Log out</CardLink>
              </NavDropdownItem>
            </NavDropdownWrapper>
          )}
        </DesktopMenu>
        <MobileMenuButton onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
        <MobileMenu isOpen={isMobileMenuOpen}>
          <Link to="/chats">
            <MobileMenuItem>Chats</MobileMenuItem>
          </Link>
          <Link to="/edit-profile">
            <MobileMenuItem>Edit user</MobileMenuItem>
          </Link>
          <MobileMenuItem onClick={handleLogOut}>Log out</MobileMenuItem>
        </MobileMenu>
      </NavWrapper>
      <NavBarDimensionsPlaceholder height={navbarHeight} />
      <Toaster position="bottom-center" />
    </>
  );
};

const NavWrapper = styled.div`
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.utils.boxShadow};
  padding: 17px 70px;
  position: fixed;
  left: ${({ theme }) => theme.padding.medium};
  top: ${({ theme }) => theme.padding.medium};
  right: ${({ theme }) => theme.padding.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  z-index: 999;
`;

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const AvatarWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.flexGap.medium};
  cursor: pointer;
  padding: 5px;
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  box-shadow: ${({ isActive, theme }) => isActive ? `0 0 0 2px ${theme.colors.white}` : 'none'};
  transition: box-shadow 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    border-radius: inherit;
    pointer-events: none;
  }
`;

const RoutesWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.flexGap.large};
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.white};
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
  z-index: 999;
  > * {
    &:not(:last-child) {
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

const MobileMenuButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  }
`;

const MobileMenuItem = styled.div`
  padding: 1em;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-decoration: none;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NavBarDimensionsPlaceholder = styled.div<{ height: number }>`
  height: ${(props) => props.height}px;
  padding: ${({ theme }) => theme.padding.medium};
`;
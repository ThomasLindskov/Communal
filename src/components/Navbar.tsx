import { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogOutMutation } from "src/hooks/useLogOutMutation";
import useNavbarDropDownToggle from "src/hooks/useNavbarDropDownToggle";
import styled from "styled-components";
import Logo from "../assets/svgComponents/Logo";
import { theme } from "../theme";
import Avatar from "./Avatar";
import toast, { Toaster } from "react-hot-toast";
import { CardLink } from "./CardLink";
import { useLocation } from "react-router-dom";
import { useAvatarQuery } from "src/hooks/useAvatarQuery";

export const Navbar = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const { logOut, error, loading } = useLogOutMutation();
  const { data: avatar, loading: avatarLoading } = useAvatarQuery();
  let navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    if (error && !loading) {
      toast(error.message);
    }

    if (!loading) {
      navigate("/");
    }
  };

  const { ref, isComponentVisible, setIsComponentVisible } =
    useNavbarDropDownToggle(false);

  // Counter intuitive that it is false by default,
  // but the useEffect hook below toggle it on the initial render
  // TODO: @pvburleigh have you considered using useToggle hook instead?
  const [isTogglingEnabled, setTogglingEnabled] = useState(false);

  useEffect(() => {
    setTogglingEnabled(!isTogglingEnabled);
  }, [isComponentVisible]);

  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsComponentVisible(!isComponentVisible);
  };

  const navbarRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (navbarRef && navbarRef.current) {
      setNavbarHeight(navbarRef.current.getBoundingClientRect().height);
    }
  }, [navbarRef]);

  const location = useLocation();
  // TODO: change default avatar to something more appropriate
  const avatarUrl = avatar?.user?.image_url || "/img/EricCartman.png";

  return (
    <>
      <NavWrapper ref={navbarRef}>
        <div style={{ minWidth: "180px" }}>
          <Link to="/chats">
            <Logo color={theme.colors.white} />
          </Link>
        </div>
        <RoutesWrapper style={{ marginLeft: 20 }}>
          {location.pathname === "/chats" ? (
            <Link to="/chats">
              <CardLink color={theme.colors.white} selected={true}>
                Chats
              </CardLink>
            </Link>
          ) : (
            <Link to="/chats">
              <div style={{ color: "white" }}>Chats</div>
            </Link>
          )}
        </RoutesWrapper>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: theme.flexGap.medium,
            cursor: "pointer",
          }}
          onClick={isTogglingEnabled ? toggleDropdown : undefined}
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
        </div>
        {isComponentVisible && (
          <NavDropdownWrapper ref={ref}>
            <Link to="/edit-profile">
              <NavDropdownItem>
                <CardLink color={theme.colors.white}>Edit user</CardLink>
              </NavDropdownItem>
            </Link>
            <NavDropdownItem onClick={handleLogOut}>Log out</NavDropdownItem>
          </NavDropdownWrapper>
        )}
      </NavWrapper>
      <NavBarDimensionsPlaceholder height={navbarHeight} />
      <Toaster position="bottom-center" />
    </>
  );
};

const NavWrapper = styled.div`
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  background-color: ${({ theme }) => theme.colors.primary};
  filter: drop-shadow(${({ theme }) => theme.utils.dropShadow});
  padding: 17px 70px;
  position: fixed;
  left: ${({ theme }) => theme.padding.medium};
  top: ${({ theme }) => theme.padding.medium};
  right: ${({ theme }) => theme.padding.medium};
  display: flex;
  gap: 60px;
  z-index: 999;
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

const NavBarDimensionsPlaceholder = styled.div<{ height: number }>`
  height: ${(props) => props.height}px;
  padding: ${({ theme }) => theme.padding.medium};
`;

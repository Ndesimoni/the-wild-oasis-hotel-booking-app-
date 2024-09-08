import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { IoHomeOutline } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import { GiWoodCabin } from "react-icons/gi";
import { FaUsersCog } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyleNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const MainNav = () => {
  return (
    <NavList>
      <li>
        <StyleNavLink to="/dashboard">
          {" "}
          <IoHomeOutline />
          <span>Home</span>
        </StyleNavLink>
      </li>

      <li>
        <StyleNavLink to="/bookings">
          <GiNotebook />
          <span>Booking</span>
        </StyleNavLink>
      </li>

      <li>
        <StyleNavLink to="/cabins">
          <GiWoodCabin />
          <span>Cabins</span>
        </StyleNavLink>
      </li>

      <li>
        <StyleNavLink to="/users">
          <FaUsersCog />
          <span>Users</span>
        </StyleNavLink>
      </li>

      <li>
        <StyleNavLink to="/settings">
          <CiSettings />
          <span>Settings</span>
        </StyleNavLink>
      </li>
    </NavList>
  );
};

export default MainNav;

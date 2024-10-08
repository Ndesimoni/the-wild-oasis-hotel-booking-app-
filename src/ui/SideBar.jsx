import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyleSidebar = styled.header`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/ -1;
`;

const SideBar = () => {
  return (
    <StyleSidebar>
      <Logo />
      <MainNav />
    </StyleSidebar>
  );
};

export default SideBar;

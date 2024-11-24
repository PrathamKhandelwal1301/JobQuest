import styled from "styled-components";
import MainNav from "./MainNav";
import { Link } from "react-router-dom";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <aside className="p-6 border-r-2 border-black flex flex-col gap-12 row-start-1 -row-end-1">
        <Link to="/">
        <h1 className="text-5xl font-navbar">JobQuest</h1>
        </Link>
        <MainNav />
    </aside>
  );
}

export default Sidebar;
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import StyledNavLink from "./StyledNavLink";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { IoSpeedometerOutline } from "react-icons/io5";
import { SlDocs } from "react-icons/sl";

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome size = {30} />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/applications">
            <HiOutlineCalendarDays size = {30} />
            <span>Applications</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/resumes">
            <SlDocs size = {30} />
            <span>Resumes</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/ats">
            <IoSpeedometerOutline size = {30} />
            <span>ATS Checker</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth size = {30} />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
import { NavLink } from "react-router-dom";

const StyledNavLink = ({ children, ...props }) => (
  <NavLink
    {...props}
    className={({ isActive }) =>
      `flex items-center gap-3 text-gray-600 font-navbar text-xl px-10 py-3 transition-all duration-300 ${
        isActive
          ? "text-blue-800 bg-gray-100 rounded-2xl"
          : ""
      }`
    }
  >
    {children}
  </NavLink>
);

export default StyledNavLink;
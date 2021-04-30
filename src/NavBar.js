import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-400 via-blue-300 to-green-200 flex justify-between my-auto mx-auto w-full">
      <div className="flex">
        <NavLink
          className="p-3 hover:text-white justify-self-start ml-1"
          to="/"
        >
          Home
        </NavLink>
      </div>
      <div className="flex justify-end">
        <NavLink className="p-3 hover:text-white mr-1" to="/about">
          About
        </NavLink>
        <NavLink className="p-3 hover:text-white mr-1" to="/projects">
          Projects
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;

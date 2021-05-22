import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-400 via-blue-300 to-lightgreen flex justify-between my-auto mx-auto w-full">
      <div className="flex">
        <NavLink
          className="p-3 hover:text-white justify-self-start ml-1 lg:text-lg"
          activeStyle={{ color: "white" }}
          exact
          to="/"
        >
          <i className="fas fa-home fa-2x"></i>
        </NavLink>
      </div>
      <div className="flex justify-end">
        <NavLink
          className="p-4 hover:text-white mr-1 lg:text-lg"
          activeStyle={{
            color: "white",
          }}
          exact
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="p-4 hover:text-white mr-1 lg:text-lg"
          activeStyle={{
            color: "white",
          }}
          exact
          to="/projects"
        >
          Projects
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import Toggle from "./Toggle";
import { useSelector } from "react-redux";

function Header() {

  const darkMode = useSelector((state)=>state.theme.darkMode);

  return (
    <header className={`shadow fixed w-full top-0 z-50 backdrop-blur-md bg-opacity-10 ${darkMode ? "bg-black text-gray-200" : "bg-white text-gray-700"}`}>
      <nav className={`px-4 flex flex-wrap ${darkMode ? "bg-black shadow-lg shadow-white" : "bg-white shadow-lg shadow-black"} justify-between items-center py-3`}>
        {/* Logo Section */}
        <div>
          <Link to="/" className="no-underline flex items-center gap-2" >
            <span className="text-3xl font-bold">{`<`}Ankush</span>
            <span className="text-3xl font-bold">Kumar {`/>`}</span>
          </Link>
        </div>
        {/* Navigation Links + Toggle */}
        <div className="flex items-center gap-6 flex-wrap ">
          <ul className="flex-wrap hidden md:flex gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md duration-200 ${
                    isActive ? `${darkMode ? "text-green-300" : "text-green-700"} font-semibold` : `${darkMode?"text-white":"text-black"}`
                  } hover:text-orange-700`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/codingprofile"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md duration-200 ${
                    isActive ? "text-orange-700 font-semibold" : `${darkMode?"text-white":"text-black"}`
                  } hover:text-orange-700`
                }
              >
                Coding Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md duration-200 ${
                    isActive ? "text-orange-700 font-semibold" : `${darkMode?"text-white":"text-black"}`
                  } hover:text-orange-700`
                }
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md duration-200 ${
                    isActive ? "text-orange-700 font-semibold" : `${darkMode?"text-white":"text-black"}`
                  } hover:text-orange-700`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div>
            <Toggle/>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
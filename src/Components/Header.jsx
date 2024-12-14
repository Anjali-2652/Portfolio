import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="relative bg-[#171d32] h-auto w-full overflow-hidden">
      <nav className="flex flex-wrap  py-1 md:px-20 md:items-center justify-between text-white px-5">
        <span className="text-3xl lg:text-4xl font-bold tracking-wide">Portfolio</span>

        <ul
          className={` ${menu ? "block" : "hidden"} 
          mx-12 mt-4   right-0 cursor-pointer py-2 font-semibold md:mt-5 bg-black px-2 md:border-none text-center md:bg-transparent md:static  bg-opacity-60 md:mx-0 rounded-xl gap-6 md:flex`}
        >



<Link to = "/">
          <li className="text-lg transition-all hover:border cursor-pointer duration-300 m-2 md:p-0">
          Home
          </li>
          </Link>

          <Link to = "/about">
          <li className="text-lg transition-all hover:border cursor-pointer duration-300 m-2 md:p-0">
            About
          </li>
          </Link>

          <Link to = "/skills">
          <li className="text-lg transition-all hover:border cursor-pointer duration-300 m-2 md:p-0">
            Skills & Experience
          </li>
          </Link>

          <Link to = "/projects">
          <li className="text-lg transition-all hover:border cursor-pointer duration-300 m-2 md:p-0">
            Projects
          </li>
          </Link>

<Link to = "/contact">
          <li className="text-lg transition-all hover:border cursor-pointer m-2 duration-300 md:p-0">
            Contact
          </li>
          </Link>
        </ul>
        {showMenu ? (
          <FaBars
            size={20}
            className="md:hidden absolute right-10 top-4 transition-all cursor-pointer duration-300"
            
            onClick={() => {
              setMenu(!menu);
              setShowMenu(!showMenu);
            }}
          />
        ) : (
          <RiCloseLine
            size={25}
            className="md:hidden absolute right-10 top-4 transition-all cursor-pointer duration-300"
            onClick={() => {
                setMenu(!menu);
                setShowMenu(!showMenu);
              }}
          />
        )}
      </nav>
    </div>
  );
};

export default Header;

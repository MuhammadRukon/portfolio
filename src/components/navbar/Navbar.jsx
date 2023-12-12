import React from "react";
import Container from "../container/Container";
import Resume from "../../assets/Muhammads-Resume-Front-End-Developer.pdf";
import { Link } from "react-router-dom";
import Fav from "../../../public/fav.png";

const navlinks = (
  <>
    <li>
      <a href="#skills" className="font-bold text-base nav-item transition-all">
        Skills
      </a>
    </li>
    <li>
      <a
        href="#projects"
        className="font-bold text-base nav-item transition-all"
      >
        Projects
      </a>
    </li>
    <li>
      <a
        href="#education"
        className="font-bold text-base nav-item transition-all"
      >
        Education
      </a>
    </li>
    <li>
      <a
        href="#achievements"
        className="font-bold text-base nav-item transition-all"
      >
        Achievements
      </a>
    </li>
    <li>
      <a
        href="#contact"
        className="font-bold text-base nav-item transition-all"
      >
        Contact
      </a>
    </li>
  </>
);
const Navbar = () => {
  return (
    <Container>
      <div className="navbar bg-[rgb(0,0,0,0.6)]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-950 w-52"
            >
              {navlinks}
            </ul>
          </div>
          <Link to="/" className=" text-xl font-robotoCondensed">
            <img className="w-16" src={Fav} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn px-5 bg-gradient-to-r text-lg border-1 border-white transition-all duration-300 from-cyan-500 hover:border-white to-blue-600 hover:scale-110"
            href={Resume}
            download={Resume}
          >
            Resume
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;

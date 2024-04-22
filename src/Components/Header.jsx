import React, { useState, useEffect, Fragment, useRef } from "react";

import Logo from "../assets/react.svg";
import { FaBars, FaPowerOff, FaTimes } from "react-icons/fa";
import { BsTriangleFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [colorChange, setColorchange] = useState(false);
  const [navLogo, setNavLogoChange] = useState(false);
  const [navMenuUp, setNavMenuUp] = useState(true);

  const changeNavbarColor = () => {
    if (window.scrollY > 0) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  const changeLogoSize = () => {
    if (window.scrollY > 0) {
      setNavLogoChange(true);
    } else {
      setNavLogoChange(false);
    }

    if (window.scrollY > 0) {
      setNavMenuUp(false);
    } else {
      setNavMenuUp(true);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  window.addEventListener("scroll", changeLogoSize);

  return (
    <>
      <nav className={colorChange ? "navbar colorChange" : "navbar"}>
        <div
          className="navbar-container container lg:pl-20 lg:pr-20"
          style={{ maxWidth: "1400px", margin: "0 auto" }}
        >
          <div className={navLogo ? " navLogo" : "navbar-logo"}>
            {/* <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              <img src={Logo} alt="Logo" />
            </NavLink> */}
          </div>
          {/* <div className="flag lg:hidden">
              <a href="https://pt.algofame.org" className="flag">
                <Flag
                  country="pt"
                  asSquare={false}
                  style={{ height: "27px" }}
                />
              </a>
            </div> */}
          <div className={navMenuUp ? " navMenuUp" : "menu-icon"}>
            <div className="text-white" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <div className="triangle lg:hidden md:hidden">
              <BsTriangleFill />
            </div>
            {/* <li className="nav-item sm-items">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                home<span className="dot">.</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dao"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                DAO<span className="dot">.</span>
              </NavLink>
            </li>
            <li className="nav-item last sm-items">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                about<span className="dot">.</span>
              </NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

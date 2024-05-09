import { NavLink } from "react-router-dom";
import Logo from "../assets/images/schogo.svg";
import LogoLM from "../assets/images/schogo-light.svg";
import "@theme-toggles/react/css/Within.css";
import { motion } from "framer-motion";
import { Within } from "@theme-toggles/react";
import { useState } from "react";
import Hamburger from "hamburger-react";

export default function Navbar(props) {
  const [menuIsOpen, setMenuOpen] = useState(false);
  const { toggleDarkMode, isDarkMode } = props;
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 0 },
  };

  return (
    <nav className="navbar pt-5 navbar-dark fixed-top" id="menu">
      <div className="container">
        <div className="logo-cont">
          <NavLink to="/">
            <img
              src={isDarkMode ? Logo : LogoLM}
              className="navbar-brand"
              alt="scho.pro"
              width="50"
              height="50"
            />
          </NavLink>
        </div>
        <div className="navbar-right">
          <div className="nav-cont">
            <div className="toggles">
              <Within
                duration={950}
                toggled={isDarkMode}
                toggle={toggleDarkMode}
                aria-label={`Switch between dark and light theme (currently ${
                  isDarkMode ? "Dark" : "Light"
                } Mode)`}
                title={`Switch between dark and light theme (currently ${
                  isDarkMode ? "Dark" : "Light"
                } Mode)`}
              />
              <Hamburger
                hideOutline={false}
                label={`Toggle navigation menu open or closed (currently ${
                  menuIsOpen ? "open" : "closed"
                })`}
                toggled={menuIsOpen}
                toggle={setMenuOpen}
                color={isDarkMode ? "var(--scholight)" : "var(--schogrey)"}
                rounded
              />
            </div>
            <motion.ul
              key="expanded"
              className="navbar-nav"
              initial={false}
              animate={menuIsOpen ? "open" : "closed"}
              variants={variants}
              id="navbarNav"
            >
              <li className="nav-item">
                <NavLink to="/" className="nav-link g2 ml">
                  Home
                </NavLink>
              </li>
              <li className="nav-item project-nav">
                <div className="accordion">
                  <div className="accordion-item">
                    <p className="accordion-header align-items-end">
                      <button
                        className="accordion-button collapsed nav-link"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        aria-label="Show/hide Work Menu"
                        title="Show/hide Work Menu"
                      >
                        Work
                      </button>
                    </p>
                    <div
                      id="collapseTwo"
                      className="proj-nav-collapse collapse"
                      data-bs-parent="#proj-navExample"
                    >
                      <ul className="proj-nav-body">
                        <li className="sub-li">
                          <NavLink
                            className="nav-link g1 sub-link"
                            to="/work/esfjoinus"
                          >
                            Join Us (ESF)
                          </NavLink>
                        </li>
                        <li className="sub-li">
                          <NavLink
                            className="nav-link g2 sub-link"
                            to="/work/getsetsports"
                          >
                            Get Set Sports
                          </NavLink>
                        </li>
                        <li className="sub-li">
                          <NavLink
                            className="nav-link g3 sub-link"
                            to="/work/bg3setcreator"
                          >
                            BG3 Set Creator
                          </NavLink>
                        </li>
                        <li className="sub-li">
                          <NavLink
                            className="nav-link g4 sub-link"
                            to="/work/quizzical"
                          >
                            Quizzical
                          </NavLink>
                        </li>
                        <li className="sub-li">
                          <NavLink
                            className="nav-link g1 sub-link"
                            to="/work/scho"
                          >
                            SCHO. Portfolio
                          </NavLink>
                        </li>
                        <li className="sub-li">
                          <NavLink
                            className="nav-link g2 sub-link"
                            to="/work/theodddystrict"
                          >
                            The Odd Dystrict
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link g3 ml" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link g4 ml" to="/contact">
                  Contact
                </NavLink>
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

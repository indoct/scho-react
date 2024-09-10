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
  const { isDarkMode, toggleDarkMode } = props;
  const variants = {
    open: {
      opacity: 1,
      x: 0,
      height: "auto",
      paddingTop: "1rem",
      paddingBottom: "0.5rem",
    },
    closed: { opacity: 0, x: 0, height: 0, paddingTop: 0, paddingBottom: 0 },
  };

  return (
    <nav
      className="navbar py-3 pt-sm-4 pt-xxl-5 navbar-dark fixed-top"
      id="menu"
    >
      <div className="container-xxl">
        <div className="logo-cont">
          <NavLink to="/">
            <img
              src={isDarkMode ? Logo : LogoLM}
              className="navbar-brand"
              alt="scho.pro"
              width="50"
              height="50"
            />
            <h1 className="title">scho.</h1>
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
              className={menuIsOpen ? "navbar-nav" : "navbar-nav closed"}
              initial={false}
              animate={menuIsOpen ? "open" : "closed"}
              variants={variants}
              id="navbarNav"
            >
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link g2 ml"
                  tabIndex={menuIsOpen ? 0 : -1}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item project-nav">
                <div className="accordion">
                  <div className="accordion-item">
                    <p className="accordion-header align-items-end">
                      <button
                        className="accordion-button collapsed nav-link"
                        tabIndex={menuIsOpen ? 0 : -1}
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
                            onClick={() => setMenuOpen(false)}
                          >
                            ESF - Join Us
                          </NavLink>
                        </li>
                        <li className="sub-li">
                          <NavLink
                            className="nav-link g3 sub-link"
                            to="/work/bg3setcreator"
                            onClick={() => setMenuOpen(false)}
                          >
                            BG3 Set Creator
                          </NavLink>
                        </li>
                        <li className="sub-li">
                          <NavLink
                            className="nav-link g2 sub-link"
                            to="/work/getsetsports"
                            onClick={() => setMenuOpen(false)}
                          >
                            Get Set Sports
                          </NavLink>
                        </li>
                        <li className="sub-li">
                          <NavLink
                            className="nav-link g4 sub-link"
                            to="/work/quizzical"
                            onClick={() => setMenuOpen(false)}
                          >
                            Quizzical
                          </NavLink>
                        </li>
                        <li className="sub-li">
                          <NavLink
                            className="nav-link g2 sub-link"
                            to="/work/theodddystrict"
                            onClick={() => setMenuOpen(false)}
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
                <NavLink
                  className="nav-link g4 ml"
                  to="/contact"
                  tabIndex={menuIsOpen ? 0 : -1}
                  onClick={() => setMenuOpen(false)}
                >
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

import { NavLink } from "react-router-dom";
import Logo from "../assets/images/schogo.svg";
import LogoLM from "../assets/images/schogo-light.svg";
import "@theme-toggles/react/css/Within.css";
import { Within } from "@theme-toggles/react";
import { useState } from "react";
import Hamburger from "hamburger-react";

export default function Navbar(props) {
  const [isOpen, setOpen] = useState(false);
  const { toggleDarkMode, isDarkMode } = props;

  // const collapseMenu = (e) => {
  //   if (e.target.classList.contains("ml")) {
  //     e.currentTarget.classList.remove("show");
  //     e.stopPropagation();
  //     setOpen(!isOpen);
  //   } else console.log(`not a nav-link`);
  // };

  return (
    <nav className="navbar pt-4 navbar-dark fixed-top" id="menu">
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
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label={`Toggle navigation menu open or closed (currently ${
                  isOpen ? "open" : "closed"
                })`}
                title={`Toggle navigation menu open or closed (currently ${
                  isOpen ? "open" : "closed"
                })`}
              >
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  color={isDarkMode ? "var(--scholight)" : "var(--schogrey)"}
                  rounded
                />
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarNav"
              // onClick={collapseMenu}
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link g1 ml">
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
                              className="nav-link g1 sub-link"
                              to="/work/bg3setcreator"
                            >
                              BG3 Set Creator
                            </NavLink>
                          </li>
                          <li className="sub-li">
                            <NavLink
                              className="nav-link g2 sub-link"
                              to="/work/scho"
                            >
                              Personal Identity
                            </NavLink>
                          </li>
                          <li className="sub-li">
                            <NavLink
                              className="nav-link g3 sub-link"
                              to="/work/getsetsports"
                            >
                              Get Set Sports
                            </NavLink>
                          </li>
                          <li className="sub-li">
                            <NavLink
                              className="nav-link g3 sub-link"
                              to="/work/quizzical"
                            >
                              Quizzical
                            </NavLink>
                          </li>
                          <li className="sub-li">
                            <NavLink
                              className="nav-link g4 sub-link"
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

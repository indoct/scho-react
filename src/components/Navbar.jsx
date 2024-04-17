import { NavLink } from "react-router-dom";
import Logo from "../images/schogo.png";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Navbar(props) {
  return (
    <nav className="navbar pt-4 navbar-dark fixed-top" id="menu">
      <div className="container">
        <div className="logo-cont">
          <NavLink to="/">
            <img
              src={Logo}
              className="navbar-brand"
              alt="scho.pro"
              width="60"
              height="60"
            />
          </NavLink>
        </div>
        <div className="mode-switch">
          <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={props.isDarkMode}
            onChange={props.toggleDarkMode}
            size={30}
          />
        </div>
        <div className="nav-cont">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link g1">
                  Home
                </NavLink>
              </li>
              <li className="nav-item project-nav">
                <div className="accordion">
                  <div className="accordion-item">
                    <p className="accordion-header align-items-end nav-link">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Projects
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
                            to="/work/beyondbitesize"
                          >
                            Beyond Bitesize
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
                            to="/work/growbuddy"
                          >
                            Grow Buddy
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
                        <li className="sub-li">
                          <NavLink
                            className="nav-link g1 sub-link"
                            to="/work/juno"
                          >
                            Juno Bakeshop
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link g3" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link g4" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

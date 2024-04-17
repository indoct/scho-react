import { NavLink } from "react-router-dom";
import Logo from "../images/schogo.png";

export default function Navbar() {
  return (
    <nav
      className="navbar pt-4 navbar-dark justify-content-between fixed-top"
      id="menu"
    >
      <div className="container">
        <NavLink to="/">
          <img
            src={Logo}
            className="navbar-brand"
            alt="scho.pro"
            width="60"
            height="60"
          />
        </NavLink>
        <div className="nav-cont"></div>
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav ">
            <NavLink to="/" className="nav-link g1">
              <li className="nav-item">Home</li>
            </NavLink>
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
                          Personal Identity (scho.)
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
            {/* <li className="nav-item d-flex flex-row justify-content-end">
              <a className="nav-link g1"><i className="fa-brands fa-square-instagram"></i></a>
              <a className="nav-link g2"><i className="fa-brands fa-square-behance"></i></a>
            </li>  */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

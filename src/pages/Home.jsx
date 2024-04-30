import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import bbscreen from "../images/project/grid-bb-screen.png";
import schopb from "../images/project/grid-scho-screen.png";
import gbscreen from "../images/project/grid-gb-screen.png";
import todscreen from "../images/project/tod-screen.png";
import junobag from "../images/project/juno-bag.png";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container">
        <section className="header home">
          <div className="row">
            <div className="col col-xl-6">
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                <span className="underline gradient">scho.</span>
              </h1>
              <p
                className="intro"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                Hi there! I'm SC Houlihan, but 'scho' is easier to spell ;)
                <br />
                I'm a Frontend Developer and UX/UI Designer based in London.
              </p>
            </div>
          </div>
        </section>
        <section
          id="case-studies"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div className="row work-row mb-2 g-2">
            <div className="col-12 col-md-6 col-xl-4">
              <figure className="project-card px-3 py-3">
                <div className="card-cover">
                  <img
                    src={bbscreen}
                    alt="Beyond Bitesize Screen 1"
                    className="img-fluid bb"
                  />
                  <h2 className="p-title">English Schools Foundation</h2>
                  <p className="p-desc">
                    A fresh, dynamic face for the ESF - Hong Kong's largest
                    provider of English-medium education.
                  </p>
                </div>
                <figcaption className="card-info px-3 py-3">
                  {/* <h2 className="p-title">English Schools Foundation</h2>
                  <p className="p-desc">
                    A fresh, dynamic face for the ESF - Hong Kong's largest
                    provider of English-medium education.
                  </p> */}
                  <div className="figbtn-cont">
                    <Link to="work/esfjoinus" className="figbtn1">
                      Project Page <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <a
                      href="https://join-us.esf.edu.hk"
                      className="figbtn2"
                      target="_blank"
                    >
                      Visit Website{" "}
                      <i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <figure className="project-card px-3 py-3">
                <div className="card-cover">
                  <img
                    src={bbscreen}
                    alt="Beyond Bitesize Screen 1"
                    className="img-fluid bb"
                  />
                  <h2 className="p-title">Get Set Sports Academy</h2>
                  <p className="p-desc">
                    Building an attractive and easily maintainable web presence
                    for a leading athletics training academy.
                  </p>
                </div>
                <figcaption className="card-info px-3 py-3">
                  {/* <h2 className="p-title">Get Set Sports Academy</h2>
                  <p className="p-desc">
                    Building an attractive and easily maintainable web presence
                    for a leading athletics training academy.
                  </p> */}
                  <div className="figbtn-cont">
                    <Link to="work/esfjoinus" className="figbtn1">
                      Project Page <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <a
                      href="https://join-us.esf.edu.hk"
                      className="figbtn2"
                      target="_blank"
                    >
                      Visit Website{" "}
                      <i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <figure className="project-card px-3 py-3">
                <div className="card-cover">
                  <img
                    src={bbscreen}
                    alt="Beyond Bitesize Screen 1"
                    className="img-fluid bb"
                  />
                  <h2 className="p-title">BG3 Piercing Set Creator</h2>
                  <p className="p-desc">
                    A web app for people to easily create their own Baldur's
                    Gate 3 piercing combinations
                  </p>
                </div>
                <figcaption className="card-info px-3 py-3">
                  {/* <h2 className="p-title">Get Set Sports Academy</h2>
                  <p className="p-desc">
                    A web app for people to easily create their own Baldur's
                    Gate 3 piercing combinations
                  </p> */}
                  <div className="figbtn-cont">
                    <Link to="work/esfjoinus" className="figbtn1">
                      Project Page <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <a
                      href="https://join-us.esf.edu.hk"
                      className="figbtn2"
                      target="_blank"
                    >
                      Visit Website{" "}
                      <i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <figure className="project-card px-3 py-3">
                <div className="card-cover">
                  <img
                    src={bbscreen}
                    alt="Beyond Bitesize Screen 1"
                    className="img-fluid bb"
                  />
                  <h2 className="p-title">The Odd Dystrict</h2>
                  <p className="p-desc">
                    Website and web3 app where users could mint an art NFT and
                    interact with their portfolio.
                  </p>
                </div>
                <figcaption className="card-info px-3 py-3">
                  {/* <h2 className="p-title">Get Set Sports Academy</h2>
                  <p className="p-desc">
                    A web app for people to easily create their own Baldur's
                    Gate 3 piercing combinations
                  </p> */}
                  <div className="figbtn-cont">
                    <Link to="work/esfjoinus" className="figbtn1">
                      Project Page <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <a
                      href="https://join-us.esf.edu.hk"
                      className="figbtn2"
                      target="_blank"
                    >
                      Visit Website{" "}
                      <i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <figure className="project-card px-3 py-3">
                <div className="card-cover">
                  <img
                    src={bbscreen}
                    alt="Beyond Bitesize Screen 1"
                    className="img-fluid bb"
                  />
                  <h2 className="p-title">Personal Identity (scho.)</h2>
                  <p className="p-desc">
                    Website and web3 app where users could mint an art NFT and
                    interact with their portfolio.
                  </p>
                </div>
                <figcaption className="card-info px-3 py-3">
                  {/* <h2 className="p-title">Get Set Sports Academy</h2>
                  <p className="p-desc">
                    A web app for people to easily create their own Baldur's
                    Gate 3 piercing combinations
                  </p> */}
                  <div className="figbtn-cont">
                    <Link to="work/esfjoinus" className="figbtn1">
                      Project Page <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <a
                      href="https://join-us.esf.edu.hk"
                      className="figbtn2"
                      target="_blank"
                    >
                      Visit Website{" "}
                      <i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <figure className="project-card px-3 py-3">
                <div className="card-cover">
                  <img
                    src={bbscreen}
                    alt="Beyond Bitesize Screen 1"
                    className="img-fluid bb"
                  />
                  <h2 className="p-title">N7 Ipsum</h2>
                  <p className="p-desc">
                    A Mass Effect lorem ipsum dummy text generator -
                  </p>
                </div>
                <figcaption className="card-info px-3 py-3">
                  {/* <h2 className="p-title">Get Set Sports Academy</h2>
                  <p className="p-desc">
                    A web app for people to easily create their own Baldur's
                    Gate 3 piercing combinations
                  </p> */}
                  <div className="figbtn-cont">
                    <Link to="work/esfjoinus" className="figbtn1">
                      Project Page <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <a
                      href="https://join-us.esf.edu.hk"
                      className="figbtn2"
                      target="_blank"
                    >
                      Visit Website{" "}
                      <i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="row my-5 justify-content-center">
            <div className="col-6 text-center contact-block px-5">
              <p>
                If you'd like to see more work or get in touch, please fill out
                the contact form or you can email me at: <br />
                <a href="mailto:hello@scho.pro" className="email-big gradient">
                  hello@scho.pro
                </a>
              </p>
              {/* <p>
                More general design work can be found in my downloadable
                portfolio on the About page.
              </p>
              <p>And I can be found around the web at:</p> */}
              <div className="social-icons">
                <button>
                  <i class="fa-brands fa-square-github"></i>
                </button>
                <button>
                  <i class="fa-brands fa-linkedin" />
                </button>
                <button>
                  <i class="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

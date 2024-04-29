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
              <figure className="project-card px-4 py-3">
                <div className="card-cover">
                  <img
                    src={bbscreen}
                    alt="Beyond Bitesize Screen 1"
                    className="img-fluid bb"
                  />
                  <h2 className="p-title">Beyond Bitesize</h2>
                  <p className="p-desc">
                    An engaging and inclusive learning platform
                  </p>
                </div>
                <figcaption className="card-info">
                  <h2 className="p-title">Beyond Bitesize</h2>
                  <p className="p-desc">
                    An engaging and inclusive learning platform
                  </p>
                  <div className="figbtn-cont">
                    <Link to="work/beyondbitesize" className="figbtn1">
                      Case Study <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <a href="https://beyondbitesize.com" className="figbtn2">
                      Visit Website{" "}
                      <i className="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <article className="project">
                <Link to="work/scho" className="px-4 py-3">
                  <img
                    src={schopb}
                    alt="scho. business card"
                    className="img-fluid bb"
                  />
                  <h2 className="p-title">Personal Branding (scho.)</h2>
                  <p className="p-desc">
                    Rebranding and collateral of my design identity
                  </p>
                </Link>
              </article>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <article className="project">
                <Link to="work/growbuddy" className="px-4 py-3">
                  <div className="img-cont">
                    <img
                      src={gbscreen}
                      alt="Grow Buddy Pack"
                      className="img-fluid bb"
                    />
                  </div>
                  <h2 className="p-title">Grow Buddy</h2>
                  <p className="p-desc">
                    A pack & companion app for growing microgreens
                  </p>
                </Link>
              </article>
            </div>
            {/* </div>
          <div className="row work-row mb-2 gx-2"> */}
            <div className="col-12 col-md-6 col-xl-4">
              <article className="project">
                <Link to="work/theodddystrict" className="px-4 py-3">
                  <img
                    src={todscreen}
                    alt="A screencap of the homepage"
                    className="img-fluid bb"
                  />
                  <h2 className="p-title">The Odd Dystrict</h2>
                  <p className="p-desc">
                    Identity & UI design for an NFT project
                  </p>
                </Link>
              </article>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <article className="project">
                <Link to="work/juno" className="px-4 py-3">
                  <img
                    src={junobag}
                    alt="Juno packaging with stamp logo"
                    className="img-fluid bb"
                  />
                  <h2 className="p-title">Juno Bakeshop</h2>
                  <p className="p-desc">
                    Identity design for a small home bakery business
                  </p>
                </Link>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

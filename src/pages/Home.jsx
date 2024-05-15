import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import esfscreen from "../assets/images/project/project-cover-esf.jpg";
import prcscreen from "../assets/images/project/project-cover-prc.jpg";
import gsscreen from "../assets/images/project/project-cover-gs.jpg";
import todscreen from "../assets/images/project/project-cover-tod.jpg";
import n7iscreen from "../assets/images/project/project-cover-n7i.jpg";
import schoscreen from "../assets/images/project/project-cover-scho.png";
import quizscreen from "../assets/images/project/project-cover-quiz.jpg";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container page">
      <section className="header home row">
        <div className="col-12 col-sm-10 col-xl-8 col-xxl-7">
          <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
            <span className="underline gradient">scho.</span>
          </h1>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <p className="intro">
              Hi there! I'm SC Houlihan, but 'scho' is easier to spell
              <i className="fa-regular fa-face-smile-wink ps-1"></i>.{" "}
            </p>
            <p className="intro">
              I'm a Front-end Developer & UX/UI Designer in London.
            </p>
          </div>
        </div>
      </section>
      <ul
        id="case-studies"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        className="row mb-2 gy-4 gx-3"
      >
        <li className="col-12 col-md-6 col-xl-4 proj-card">
          <div className="p-card-img">
            <img src={esfscreen} alt="ESF Join Us cover image" />
          </div>
          <div className="card-text">
            <h2 className="p-title">English Schools Foundation</h2>
            <p className="p-desc">
              A fresh, dynamic face for the ESF, Hong Kong's largest provider of
              English-medium education.
            </p>
          </div>

          <ul className="proj-links">
            <li>
              <Link to="work/esfjoinus">
                project
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <a href="https://join-us.esf.edu.hk" target="_blank">
                website
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </li>
        <li className="col-12 col-md-6 col-xl-4 proj-card">
          <div className="p-card-img">
            <img
              src={prcscreen}
              alt="BG3 Piercing Set Creator project cover image"
            />
          </div>
          <div className="card-text">
            <h2 className="p-title">BG3 Piercing Set Creator</h2>
            <p className="p-desc">
              A web app for people to easily create their own custom Baldur's
              Gate 3 piercing combinations.
            </p>
          </div>
          <ul className="proj-links">
            <li>
              <Link to="work/bg3setcreator">
                project
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <a href="https://piercings.indoc.dev" target="_blank">
                website
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </li>
        <li className="col-12 col-md-6 col-xl-4 proj-card">
          <div className="p-card-img">
            <img
              src={gsscreen}
              alt="Get Set Sports Academy project cover image"
            />
          </div>
          <div className="card-text">
            <h2 className="p-title">Get Set Sports Academy</h2>
            <p className="p-desc">
              Building an attractive and easily maintainable web presence for a
              leading athletics academy.
            </p>
          </div>
          <ul className="proj-links">
            <li>
              <Link to="work/getsetsports">
                project
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <a href="https://getsetsportsacademy.com" target="_blank">
                website
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </li>
        <li className="col-12 col-md-6 col-xl-4 proj-card">
          <div className="p-card-img">
            <img src={quizscreen} alt="Beyond Bitesize Screen 1" />
          </div>
          <div className="card-text">
            <h2 className="p-title">Quizzical</h2>
            <p className="p-desc">
              An interactive quiz web app, built with React and utilising the
              TMDb database.
            </p>
          </div>
          <ul className="proj-links">
            <li>
              <Link to="work/quizzical">
                project
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <a href="https://quizzical.scho.pro" target="_blank">
                website
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </li>
        <li className="col-12 col-md-6 col-xl-4 proj-card">
          <div className="p-card-img">
            <img src={schoscreen} alt="scho " />
          </div>
          <div className="card-text">
            <h2 className="p-title">SCHO. Portfolio Website</h2>
            <p className="p-desc">
              Personal identity design and web dev portfolio, handcrafted to
              display my work.
            </p>
          </div>
          <ul className="proj-links">
            <li>
              <Link to="work/esfjoinus">
                project
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </li>
        <li className="col-12 col-md-6 col-xl-4 proj-card">
          <div className="p-card-img">
            <img src={todscreen} alt="The Odd Dystrict project cover image" />
          </div>
          <div className="card-text">
            <h2 className="p-title">The Odd Dystrict</h2>
            <p className="p-desc">
              Website and web3 interface where users could mint an art NFT and
              interact with their portfolio.
            </p>
          </div>
          <ul className="proj-links">
            <li>
              <Link to="work/theodddystrict">
                project
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <a href="https://the-odd-dystrict.com" target="_blank">
                website
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </li>
        <li className="col-12 col-md-6 col-xl-4 proj-card">
          <div className="p-card-img">
            <img src={n7iscreen} alt="Beyond Bitesize Screen 1" />
          </div>
          <div className="card-text">
            <h2 className="p-title">N7 Ipsum</h2>
            <p className="p-desc">
              A Mass Effect lorem ipsum dummy text generator built with vanilla
              JS. Does what it says on the tin.
            </p>
          </div>
          <ul className="proj-links">
            <li>
              <a href="https://n7-ipsum.scho.pro" target="_blank">
                website
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <section className="row mt-5 mb-1 my-sm-5 justify-content-center">
        <div className="col-12 text-center">
          <div className="home-contact">
            <p>
              If you'd like to see more work or get in touch, please fill out
              the <a href="/contact">contact form</a>, or you can email me at:
              <a href="mailto:hello@scho.pro" className="email-big gradient">
                hello@scho.pro
              </a>
            </p>
            <div className="social-icons pt-3">
              <a
                href="#"
                target="_blank"
                aria-label="github (opens in new tab)"
              >
                <i
                  className="fa-brands fa-square-github"
                  aria-hidden="true"
                ></i>
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="linkedin (opens in new tab)"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
              <a
                href="#"
                target="_blank"
                aria-label="contact form (opens in this tab)"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

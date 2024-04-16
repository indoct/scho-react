import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import bbscreen from "../images/project/bb-screen.png";
import schopb from "../images/project/scho-pb.png";
import gbscreen from "../images/project/gb-screen.png";
import todscreen from "../images/project/tod-screen.png";
import junobag from "../images/project/juno-bag.png";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="container header home">
        <div className="row mt-5">
          <div className="col col-lg-6">
            <h1 className="aos-init aos-animate" data-aos="zoom-in">
              <span className="underline gradient">scho.</span>
            </h1>
            <p
              className="intro aos-init aos-animate"
              data-scroll=""
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Welcome to the design portfolio of London based designer SC
              Houlihan. I like to craft attractive, useful things and
              experiences.
            </p>
          </div>
        </div>
      </section>
      <section id="case-studies">
        <div className="container">
          <article
            className="row project"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Link to="work/beyondbitesize">
              <div className="col-12 text-center">
                <img
                  src={bbscreen}
                  alt="Beyond Bitesize Screen 1"
                  className="img-fluid bb"
                />
              </div>

              <div className="col-12">
                <h2 className="p-title">Beyond Bitesize</h2>
                <p className="p-desc">
                  An engaging and inclusive learning platform
                </p>
              </div>
            </Link>
          </article>
        </div>

        <div className="container">
          <article
            className="row project"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Link to="work/scho">
              <div className="col-12 text-center">
                <img
                  src={schopb}
                  alt="scho. business card"
                  className="img-fluid bb"
                />
              </div>

              <div className="col-12">
                <h2 className="p-title">Personal Branding (scho.)</h2>
                <p className="p-desc">
                  Rebranding and collateral of my design identity
                </p>
              </div>
            </Link>
          </article>
        </div>

        <div className="container">
          <article
            className="row project"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Link to="work/growbuddy">
              <div className="col-12 text-center">
                <img
                  src={gbscreen}
                  alt="Grow Buddy Pack"
                  className="img-fluid bb"
                />
              </div>

              <div className="col-12">
                <h2 className="p-title">Grow Buddy</h2>
                <p className="p-desc">
                  A pack & companion app for growing microgreens at home
                </p>
              </div>
            </Link>
          </article>
        </div>
        <div className="container">
          <article
            className="row project"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Link to="work/theodddystrict">
              <div className="col-12 text-center">
                <img
                  src={todscreen}
                  alt="A screencap of the homepage"
                  className="img-fluid bb"
                />
              </div>

              <div className="col-12">
                <h2 className="p-title">The Odd Dystrict</h2>
                <p className="p-desc">
                  Identity & UI design for an NFT project
                </p>
              </div>
            </Link>
          </article>
        </div>
        <div className="container">
          <article
            className="row project"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Link to="work/juno">
              <div className="col-12 text-center">
                <img
                  src={junobag}
                  alt="Juno packaging with stamp logo"
                  className="img-fluid bb"
                />
              </div>

              <div className="col-12">
                <h2 className="p-title">Juno Bakeshop</h2>
                <p className="p-desc">
                  Identity design for a small home bakery business
                </p>
              </div>
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}

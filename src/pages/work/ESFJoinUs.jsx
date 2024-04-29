import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import BackButton from "../../components/BackButton";

import joinus01 from "../../images/project/joinus-01.jpg";
import joinus02 from "../../images/project/joinus-02.jpg";
import joinus03 from "../../images/project/joinus-03.jpg";
import joinus04 from "../../images/project/joinus-04.jpg";
import joinus05 from "../../images/project/joinus-05.jpg";
import joinus06 from "../../images/project/joinus-06.jpg";
import joinus07 from "../../images/project/joinus-07.jpg";
import joinus08 from "../../images/project/joinus-08.jpg";

export default function ESFJoinUs() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
    >
      {/* <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          joinus01,
          joinus02,
          joinus03,
          joinus04,
          joinus05,
          joinus06,
          joinus07,
          joinus08,
        ]}
        slide={lightboxController.slide}
        type="image"
      /> */}
      <div className="container d-flex flex-column pt-4 pt-lg-5 justify-content-center">
        <div className="row pb-2">
          <div className="col-md-8">
            <p className="categories">
              <span className="p-cat">UX & UI</span>/
              <span className="p-cat">Product Design</span>/
              <span className="p-cat">Prototyping</span>
            </p>
            <h1 className="mb-3">
              <span className="gradient">English Schools Foundation</span>
            </h1>
            <p className="intro">
              A dynamic, fresh face for the ESF - Hong Kong's largest provider
              of English-medium education.
            </p>
            <p className="intro">
              The English Schools Foundation (est. 1967) approached me to add a
              few pages to their existing website for a summer student
              recruitment drive for their 22 schools. After discussions it
              became clear that our visions were aligned and that a complete
              redesign and separate site for the campaign would make more sense
              to achieve the project goals.
            </p>
            <p className="plink-cont">
              <i className="fa-solid fa-up-right-from-square link-icon"></i>
              <a
                href="https://join-us.esf.edu.hk"
                target="_blank"
                rel="noreferrer"
                className="proj-link"
              >
                ESF Join Us Campaign
              </a>
              <br />
            </p>
          </div>
        </div>
        <div className="row pb-2 pb-lg-3">
          <div className="col-12 mb-xs-2">
            <img
              src={joinus01}
              onClick={() => openLightboxOnSlide(1)}
              alt="ESF Join Us Hero"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
        </div>
        <div className="row pb-2 pb-lg-3">
          <div className="col-12 mb-xs-2">
            <img
              src={joinus02}
              onClick={() => openLightboxOnSlide(2)}
              alt="ESF Join Us Intro"
              className="proj-img img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 pb-lg-2">
            <img
              src={joinus03}
              alt="ESF Join Us Culture Highlights"
              onClick={() => openLightboxOnSlide(3)}
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-12">
            <img
              src={joinus04}
              alt="ESF Join Us School Map Static"
              onClick={() => openLightboxOnSlide(4)}
              className="proj-img img-fluid"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 pb-lg-2">
            <img
              src={joinus05}
              alt="ESF Join Us Culture Highlights"
              onClick={() => openLightboxOnSlide(5)}
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-12">
            <img
              src={joinus06}
              alt="ESF Join Us School Map Static"
              onClick={() => openLightboxOnSlide(6)}
              className="proj-img img-fluid"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 pb-lg-2">
            <img
              src={joinus07}
              alt="ESF Join Us Culture Highlights"
              onClick={() => openLightboxOnSlide(7)}
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-12">
            <img
              src={joinus08}
              alt="ESF Join Us School Map Static"
              onClick={() => openLightboxOnSlide(8)}
              className="proj-img img-fluid"
            />
          </div>
        </div>
        <div className="row mt-3">
          <BackButton />
          <div className="col col-sm-6 text-end">
            <div className="d-flex flex-column justify-content-end">
              <div>
                <Link to="../work/scho">
                  <button className="back-link next-link">
                    Next Project<i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Link>
              </div>
              <div className="next-proj">Personal Identity Design</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

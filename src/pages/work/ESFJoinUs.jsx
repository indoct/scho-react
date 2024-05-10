import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import assets from "../../images";

import BackButton from "../../components/BackButton";

export default function ESFJoinUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [index, setIndex] = useState(-1);
  const [slides, setSlides] = useState([
    {
      src: assets.joinus01,
      alt: "ESF Homepage HeroHero",
      description: "ESF Homepage HeroHero",
    },
    {
      src: assets.joinus02,
      alt: "ESF Intro and Welcome",
      description: "ESF Intro and Welcome",
    },
    {
      src: assets.joinus03,
      alt: "ESF Culture Highlights",
      description: "ESF Culture Highlights",
    },
    {
      src: assets.joinus04,
      alt: "ESF School Map Static",
      description: "ESF School Map Static",
    },
    {
      src: assets.joinus05,
      alt: "ESF School Map Dynamic",
      description: "ESF School Map Dynamic",
    },
    {
      src: assets.joinus06,
      alt: "ESF School Dynamic Filters",
      description: "ESF School Dynamic Filters",
    },
    {
      src: assets.joinus07,
      alt: "ESF School Modal",
      description: "ESF School Modal",
    },
    {
      src: assets.joinus08,
      alt: "ESF Admissions Video & Highlights",
      description: "ESF Admissions Video & Highlights",
    },
    {
      src: assets.joinus09,
      alt: "ESF Admissions Landing Page",
      description: "ESF Admissions Landing Page",
    },
    {
      src: assets.joinus10,
      alt: "ESF Admissions / Enquiry Form",
      description: "ESF Admissions / Enquiry Form",
    },
    {
      src: assets.joinus11,
      alt: "ESF Admissions Information Accordion",
      description: "ESF Admissions Information Accordion",
    },
    {
      src: assets.joinus12,
      alt: "ESF Frequently Asked Questions",
      description: "ESF Frequently Asked Questions",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
    >
      <div className="container d-flex flex-column pt-sm-5 justify-content-center page">
        <div className="row pb-2">
          <div className="col-md-8">
            <Lightbox
              open={index >= 0}
              close={() => setIndex(-1)}
              index={index}
              slides={slides}
              plugins={[Fullscreen, Captions, Zoom]}
            />
            <p className="categories">
              <span className="p-cat">UX & UI Design</span>/
              <span className="p-cat">Front-end Development</span>/
              <span className="p-cat">CMS</span>
            </p>
            <h1 className="mb-3">
              <span className="gradient">English Schools Foundation</span>
            </h1>
            <p className="proj-tagline">
              A fresh, dynamic face for Hong Kong's largest provider of
              English-medium education.
            </p>
            <p className="intro">
              The English Schools Foundation approached me to extend their
              current website for a summer student recruitment drive for their
              22 schools. After discussions it became clear that our visions
              were aligned and that a complete redesign and separate site for
              the campaign would better achieve the project goals.
            </p>
            <div className="pp-info">
              <p className="plink-cont">
                <span className="tech">URL: </span>
                <a
                  href="https://join-us.esf.edu.hk"
                  target="_blank"
                  rel="noreferrer"
                  className="proj-url"
                >
                  https://join-us.esf.edu.hk{" "}
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </p>
              <p className="plink-cont">
                <span className="tech">BUILT WITH: </span>
                Wordpress, CSS, JS
              </p>
            </div>
          </div>
        </div>
        <div className="row pb-2 py-lg-3 project-images justify-content-center">
          <div className="col-12">
            <a href="#" onClick={() => setIndex(0)}>
              <img
                src={assets.joinus01}
                alt="ESF Join Us Hero"
                className="proj-img img-fluid mb-2 mb-md-0"
              />
            </a>
          </div>
          <div className="col-12 col-sm-6 cs-caption">
            <p>
              Trying to take down a rogue Spectre and his army of synthetics?
              No, they didn't cover this in Basic. And I would again. But I also
              know what it is to leave everything behind and fight.
            </p>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(1)}>
              <img
                src={assets.joinus02}
                alt="ESF Join Us Intro"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(2)}>
              <img
                src={assets.joinus03}
                alt="ESF Join Us Culture Highlights"
                className="proj-img img-fluid mb-2 mb-md-0"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(3)}>
              <img
                src={assets.joinus04}
                alt="ESF Join Us School Map Static"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12 col-sm-6 cs-caption">
            <p>
              SCHOOL MAP / DYNAMIC INFO. Trying to take down a rogue Spectre and
              his army of synthetics? No, they didn't cover this in Basic. And I
              would again. But I also know what it is to leave everything behind
              and fight.
            </p>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(4)}>
              <img
                src={assets.joinus05}
                alt="ESF Join Us Culture Highlights"
                className="proj-img img-fluid mb-2 mb-md-0"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(5)}>
              <img
                src={assets.joinus06}
                alt="ESF Join Us School Map Static"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(6)}>
              <img
                src={assets.joinus07}
                alt="ESF Join Us Culture Highlights"
                className="proj-img img-fluid mb-2 mb-md-0"
              />
            </a>
          </div>
          <div className="col-12 col-sm-6 cs-caption">
            <p>
              INFO ARCHITECTURE / ADMISSIONS. Trying to take down a rogue
              Spectre and his army of synthetics? No, they didn't cover this in
              Basic. And I would again. But I also know what it is to leave
              everything behind and fight.
            </p>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(7)}>
              <img
                src={assets.joinus08}
                alt="ESF Join Us School Map Static"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(8)}>
              <img
                src={assets.joinus09}
                alt="ESF Join Us School Map Static"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(9)}>
              <img
                src={assets.joinus10}
                alt="ESF Join Us School Map Static"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(10)}>
              <img
                src={assets.joinus11}
                alt="ESF Join Us School Map Static"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(11)}>
              <img
                src={assets.joinus12}
                alt="ESF Join Us School Map Static"
                className="proj-img img-fluid"
              />
            </a>
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

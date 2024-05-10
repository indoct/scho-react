import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import assets from "../../images";

import BackButton from "../../components/BackButton";

export default function Quizzical() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [index, setIndex] = useState(-1);
  const [slides, setSlides] = useState([
    {
      src: assets.quiz01,
      alt: "Quizzical Options (API)",
      description: "Quizzical Options (API)",
    },
    {
      src: assets.quiz02,
      alt: "Quizzical Answer Choices",
      description: "Quizzical Answer Choices",
    },
    {
      src: assets.quiz03,
      alt: "Quizzical Answer UI Feedback",
      description: "Quizzical Answer UI Feedback",
    },
    {
      src: assets.quiz04,
      alt: "Quizzical Confetti - All Correct Answers",
      description: "Quizzical Confetti - All Correct Answers",
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
              <span className="p-cat">Web Application</span>/
              <span className="p-cat">React</span>/
              <span className="p-cat">Personal</span>
            </p>
            <h1 className="mb-3">
              <span className="gradient">Quizzical</span>
            </h1>
            <p className="proj-tagline">
              Making modding more accessible and adding customisability for
              modders and players alike.
            </p>
            <p className="intro">
              The English Schools Foundation (est. 1967) approached me to add a
              few pages to their existing website for a summer student
              recruitment drive for their 22 schools.
            </p>
            <div className="pp-info">
              <p className="plink-cont">
                <span className="tech">URL: </span>
                <a
                  href="https://quizzical.scho.pro"
                  target="_blank"
                  rel="noreferrer"
                  className="proj-url"
                >
                  https://quizzical.scho.pro{" "}
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </p>
              <p className="plink-cont">
                <span className="tech">BUILT WITH: </span>
                React, TMDb API
              </p>
            </div>
          </div>
        </div>
        <div className="row pb-2 py-lg-3 project-images justify-content-center">
          <div className="col-12">
            <a href="#" onClick={() => setIndex(0)}>
              <img
                src={assets.quiz01}
                alt="ESF Join Us Hero"
                className="proj-img img-fluid"
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
                src={assets.quiz02}
                alt="ESF Join Us Intro"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(2)}>
              <img
                src={assets.quiz03}
                alt="ESF Join Us Culture Highlights"
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

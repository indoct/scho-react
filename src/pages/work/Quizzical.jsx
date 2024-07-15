import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { srcToWebp } from "../../App";

import BackButton from "../../components/BackButton";

export default function Quizzical() {
  const [index, setIndex] = useState(-1);
  const [slides, setSlides] = useState([
    {
      src: "/assets/images/quiz/quizzical-01.jpg",
      alt: "Quizzical Options (API)",
      description: "Quizzical Options (API)",
    },
    {
      src: "/assets/images/quiz/quizzical-02.jpg",
      alt: "Quizzical Answer Choices",
      description: "Quizzical Answer Choices",
    },
    {
      src: "/assets/images/quiz/quizzical-03.jpg",
      alt: "Quizzical Answer UI Feedback",
      description: "Quizzical Answer UI Feedback",
    },
    {
      src: "/assets/images/quiz/quizzical-04.jpg",
      alt: "Quizzical Confetti - All Correct Answers",
      description: "Quizzical Options (API)",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <div className="container d-flex flex-column pt-sm-4 pt-xxl-5 justify-content-center page">
        <div className="row pb-2">
          <div className="col-lg-10">
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
              A quiz web app that sources random questions from the Open Trivia
              DB API
            </p>
            <p className="intro">
              Displays 5 questions, with some features added to improve it such
              as UI feedback for instructions, a page to customise the settings
              for the API call, light/dark mode, and confetti - if you get
              everything right.
            </p>
            <div className="pp-info">
              <p className="plink-cont">
                <span className="tech">url:</span>
                <a
                  href="https://quizzical.scho.pro"
                  target="_blank"
                  rel="noreferrer"
                  className="proj-url"
                >
                  https://quizzical.scho.pro
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </p>
              <p className="plink-cont">
                <span className="tech">built with:</span>
                React, OpenTDb API
              </p>
            </div>
          </div>
        </div>
        <div className="row pb-2 py-lg-3 project-images justify-content-center">
          <div className="col-12">
            <a href="#" onClick={() => setIndex(0)}>
              <picture>
                <source srcSet={srcToWebp(slides[0].src)} type="image/webp" />
                <img
                  src={slides[0].src}
                  alt={slides[0].alt}
                  height="945"
                  width="1902"
                  className="proj-img img-fluid"
                />
              </picture>
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(1)}>
              <picture>
                <source srcSet={srcToWebp(slides[1].src)} type="image/webp" />
                <img
                  src={slides[1].src}
                  alt={slides[1].alt}
                  height="945"
                  width="1902"
                  className="proj-img img-fluid"
                />
              </picture>
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(2)}>
              <picture>
                <source srcSet={srcToWebp(slides[2].src)} type="image/webp" />
                <img
                  src={slides[2].src}
                  alt={slides[2].alt}
                  height="945"
                  width="1902"
                  className="proj-img img-fluid"
                />
              </picture>
            </a>
          </div>
        </div>
        <div className="row mt-3">
          <BackButton />
          <div className="col col-sm-6 text-end">
            <div className="d-flex flex-column justify-content-end">
              <div>
                <Link to="../work/theodddystrict">
                  <button className="back-link next-link">
                    Next Project<i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Link>
              </div>
              <div className="next-proj">The Odd Dystrict</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

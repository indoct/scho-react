import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import assets from "../../images";

import BackButton from "../../components/BackButton";

export default function BG3SetCreator() {
  const [index, setIndex] = useState(-1);
  const [slides, setSlides] = useState([
    {
      src: assets.prc01,
      alt: "Set Creator Web App Interface",
      description: "Set Creator Web App Interface",
    },
    {
      src: assets.prc02,
      alt: "Set Creator Instructions Modal",
      description: "Set Creator Instructions Modal",
    },
    {
      src: assets.prc03,
      alt: "Set Creator User Selections + Filters",
      description: "Set Creator User Selections + Filters",
    },
    {
      src: assets.prc04,
      alt: "Current Piercing Set Config UI",
      description: "Current Piercing Set Config UI",
    },
    {
      src: assets.prc06,
      alt: "Custom Code Generation - Copied to Clipboard",
      description: "Custom Code Generation - Copied to Clipboard",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
    >
      <div className="container d-flex flex-column page pt-sm-4 pt-xxl-5 justify-content-center">
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
              <span className="p-cat">QOL</span>
            </p>
            <h1 className="mb-3">
              <span className="gradient">BG3 Set Creator</span>
            </h1>
            <p className="proj-tagline">
              Making modding more accessible and customisable for modders &
              players.
            </p>
            <p className="intro">
              Baldur's Gate 3 is a video game that you can modify by editing XML
              files. As these weren't intended to be editable, general users
              were sometimes breaking their game with invalid code. Each mod
              also has its own separate version of the file, making mixing and
              matching incredibly time consuming. I built this app as a solution
              and asked modders to add their assets to the database, making it
              easy to create and add your own custom sets to the game.
            </p>
            <div className="pp-info">
              <p className="plink-cont">
                <span className="tech">url:</span>
                <a
                  href="https://piercings.indoc.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="proj-url"
                >
                  https://piercings.indoc.dev
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </p>
              <p className="plink-cont">
                <span className="tech">built with:</span>
                React, Router, Typescript, Redux, Bootstrap, Prism.js
              </p>
            </div>
          </div>
        </div>
        <div className="row pb-2 py-lg-3 project-images justify-content-center">
          <div className="col-12">
            <a href="#" onClick={() => setIndex(0)}>
              <img
                src={assets.prc01}
                alt="Set Creator Web App Interface"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(1)}>
              <img
                src={assets.prc02}
                alt="Set Creator Instructions Modal"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12 col-sm-9 col-xxl-7 py-xxl-5 cs-caption">
            <p>
              State is used here to disable the piercings in the same location
              as another in the set. React Router provides the dynamic URL
              filters for piercing locations/type.
            </p>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(2)}>
              <img
                src={assets.prc03}
                alt="Set Creator User Selections + Filters"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12 col-sm-9 col-xxl-7 py-xxl-5 cs-caption">
            <p>
              The current set config is accessible to view as long as it's not
              empty. Each piercing's key stats are clearly indicated in the UI.
            </p>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(3)}>
              <img
                src={assets.prc04}
                alt="Current Piercing Set Config UI"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(5)}>
              <img
                src={assets.prc06}
                alt="Custom Code Generation - Copied to Clipboard"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12 col-sm-9 col-xxl-7 py-xxl-5 cs-caption">
            <p>
              Once the user is done, they can generate the code. Using Prism.js
              for syntax formatting, this code can be copied using the button
              and pasted directly into the game file and works out of the box.
              The piercing database also contains the mod page's URL /
              information and the generated code is commented dynamically, so
              the user knows exactly what each node is.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <BackButton />
          <div className="col col-sm-6 text-end">
            <div className="d-flex flex-column justify-content-end">
              <div>
                <Link to="../work/getsetsports">
                  <button className="back-link next-link">
                    Next Project<i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Link>
              </div>
              <div className="next-proj">Get Set Sports Academy</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

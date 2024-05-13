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
      <div className="container d-flex flex-column page pt-sm-5 justify-content-center">
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
              <span className="p-cat">QOL</span>
            </p>
            <h1 className="mb-3">
              <span className="gradient">BG3 Set Creator</span>
            </h1>
            <p className="proj-tagline">
              Making modding more accessible and customisable for modders &
              players alike.
            </p>
            <p className="intro">
              In BG3, you can create your own piercing 'sets' by editing an XML
              file that overrides the game's file. I noticed that non-modders
              were sometimes breaking the game trying this, usually with code
              bugs, and well as being difficult because each piercing node is an
              uncommented, random string. Each mod also has its own separate
              version of this file, making mixing and matching incredibly time
              consuming. I built this app to solve these issues and asked
              modders to add to the piercing database, meaning it's now easy to
              create and add your own sets to the game.
            </p>
            <div className="pp-info">
              <p className="plink-cont">
                <span className="tech">URL: </span>
                <a
                  href="https://piercings.indoc.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="proj-url"
                >
                  https://piercings.indoc.dev{" "}
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </p>
              <p className="plink-cont">
                <span className="tech">BUILT WITH: </span>
                React, React Router, Prism.js
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
          <div className="col-12 col-sm-6 cs-caption">
            <p>
              React state is used here to disable the piercings in the same
              location as a piercing the user has already selected. React Router
              provides the dynamic URL filters for piercing locations and type.
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
          <div className="col-12 col-sm-6 cs-caption">
            <p>
              The current set config is visible from any part of the app as long
              as it's not empty, and each piercing's key stats are clearly
              indicated in the UI.
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
          <div className="col-12 col-sm-6 cs-caption">
            <p>
              Once the user has finished making their set, they can click the
              button to generate the code. Using Prism.js for syntax formatting,
              this code can be copied using the button and pasted directly into
              the game file and works out of the box. The piercing database also
              contains the mod page's URL / information and the generated code
              is commented dynamically, so the user knows exactly what each node
              is.
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

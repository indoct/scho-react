import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import assets from "../../images";

import BackButton from "../../components/BackButton";

export default function BG3SetCreator() {
  const [index, setIndex] = useState(-1);
  const [slides, setSlides] = useState([
    { src: assets.prc01, alt: "image 1", caption: "blahblah" },
    { src: assets.prc02 },
    { src: assets.prc03 },
    { src: assets.prc04 },
    { src: assets.prc05 },
    { src: assets.prc06 },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
    >
      <div className="container d-flex flex-column pt-4 pt-lg-5 justify-content-center">
        <div className="row pb-2">
          <div className="col-md-8">
            <Lightbox
              open={index >= 0}
              close={() => setIndex(-1)}
              index={index}
              slides={slides}
              plugins={[Fullscreen, Captions, Thumbnails, Zoom]}
              thumbnails={{ showToggle: true }}
            />
            <p className="categories">
              <span className="p-cat">Web Application</span>/
              <span className="p-cat">React</span>/
              <span className="p-cat">QOL</span>
            </p>
            <h1 className="mb-3">
              <span className="gradient">BG3 Piercing Set Creator</span>
            </h1>
            <p className="proj-tagline">
              Making modding more accessible and adding customisability for
              modders and players alike.
            </p>
            <p className="intro">
              The English Schools Foundation (est. 1967) approached me to add a
              few pages to their existing website for a summer student
              recruitment drive for their 22 schools. After discussions it
              became clear that our visions were aligned and that a complete
              redesign and separate site for the campaign would be better suited
              to achieve the project goals.
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
                <br />
              </p>
              {/* <p className="tech">Built with: </p>{" "}
              <p className="plink-cont">ReactJS, React Router</p> */}
            </div>
          </div>
        </div>
        <div className="row pb-2 py-lg-3 project-images justify-content-center">
          <div className="col-12">
            <a href="#" onClick={() => setIndex(0)}>
              <img
                src={assets.prc01}
                alt="ESF Join Us Hero"
                className="proj-img img-fluid mb-2 mb-md-0"
              />
            </a>
          </div>
          <div className="col-6 cs-caption">
            <p>
              Trying to take down a rogue Spectre and his army of synthetics?
              No, they didn't cover this in Basic. And I would again. But I also
              know what it is to leave everything behind and fight.
            </p>
          </div>
          <div className="col-12">
            <img
              src={assets.prc02}
              alt="ESF Join Us Intro"
              className="proj-img img-fluid"
            />
          </div>
          <div className="col-12">
            <img
              src={assets.prc03}
              alt="ESF Join Us Culture Highlights"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-12">
            <img
              src={assets.prc04}
              alt="ESF Join Us School Map Static"
              className="proj-img img-fluid"
            />
          </div>
          <div className="col-6 cs-caption">
            <p>
              SCHOOL MAP / DYNAMIC INFO. Trying to take down a rogue Spectre and
              his army of synthetics? No, they didn't cover this in Basic. And I
              would again. But I also know what it is to leave everything behind
              and fight.
            </p>
          </div>
          <div className="col-12">
            <img
              src={assets.prc06}
              alt="ESF Join Us School Map Static"
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

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import assets from "../../images";

import BackButton from "../../components/BackButton";

export default function GetSetSports() {
  const [index, setIndex] = useState(-1);
  const [slides, setSlides] = useState([
    {
      src: assets.getset01,
      alt: "Homepage Hero Slider",
      description: "Homepage Hero Slider",
    },
    {
      src: assets.getset02,
      alt: "Get Set Course Blocks",
      description: "Get Set Course Blocks",
    },
    {
      src: assets.getset03,
      alt: "Get Set Coach Carousel",
      description: "Get Set Coach Carousel",
    },
    {
      src: assets.getset04,
      alt: "Course Venues and Schedules",
      description: "Course Venues and Schedules",
    },
    {
      src: assets.getset05,
      alt: "Package Fees & Discounts",
      description: "Package Fees & Discounts",
    },
    {
      src: assets.getset06,
      alt: "Weather and Leave Policy",
      description: "Weather and Leave Policy",
    },
    {
      src: assets.getset07,
      alt: "Frequently Asked Questions",
      description: "Frequently Asked Questions",
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
              <span className="gradient">Get Set Sports</span>
            </h1>
            <p className="proj-tagline">
              Building an attractive and easily maintainable web presence for a
              leading athletics academy.
            </p>
            <p className="intro">
              Get Set Sports Academy are a popular provider of athletics
              training. They approached me to redesign and build a new website
              for them, as they had outgrown their previous platform. I opted to
              build on Wordpress as it's easy to use, maintain and customise -
              allowing clients to run their own site after the project ends.
            </p>
            <div className="pp-info">
              <p className="plink-cont">
                <span className="tech">URL: </span>
                <a
                  href="https://getsetsportsacademy.com"
                  target="_blank"
                  rel="noreferrer"
                  className="proj-url"
                >
                  https://getsetsportsacademy.com{" "}
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
                src={assets.getset01}
                alt="Homepage Hero Slider"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(1)}>
              <img
                src={assets.getset02}
                alt="Get Set Course Blocks"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(2)}>
              <img
                src={assets.getset03}
                alt="Get Set Coach Carousel"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(3)}>
              <img
                src={assets.getset04}
                alt="Course Venues and Schedules"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12 col-sm-6 cs-caption">
            <p>
              I implemented more cohesive typography and overall design
              aesthetic to help keep the information organised and easy to read.
              I also designed UI elements for information that was previously in
              images, such as schedule flyers, for better accessibility and SEO.
            </p>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(4)}>
              <img
                src={assets.getset05}
                alt="Package Fees & Discounts"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(5)}>
              <img
                src={assets.getset06}
                alt="Weather and Leave Policy"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(6)}>
              <img
                src={assets.getset07}
                alt="Frequently Asked Questions"
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
                <Link to="../work/quizzical">
                  <button className="back-link next-link">
                    Next Project<i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Link>
              </div>
              <div className="next-proj">Quizzical App</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

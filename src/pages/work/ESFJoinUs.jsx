import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { srcToWebp } from "../../App";

import BackButton from "../../components/BackButton";

export default function ESFJoinUs() {
  const [index, setIndex] = useState(-1);
  const [slides, setSlides] = useState([
    {
      src: "/assets/images/esf/joinus-01.jpg",
      alt: "ESF Homepage Hero",
      description: "ESF Homepage Hero",
    },
    {
      src: "../assets/images/esf/joinus-02.jpg",
      alt: "ESF Intro and Welcome",
      description: "ESF Intro and Welcome",
    },
    {
      src: "../assets/images/esf/joinus-03.jpg",
      alt: "ESF Culture Highlights",
      description: "ESF Culture Highlights",
    },
    {
      src: "../assets/images/esf/joinus-04.jpg",
      alt: "ESF School Map Static",
      description: "ESF School Map Static",
    },
    {
      src: "../assets/images/esf/joinus-05.jpg",
      alt: "ESF School Map Dynamic",
      description: "ESF School Map Dynamic",
    },
    {
      src: "../assets/images/esf/joinus-06.jpg",
      alt: "ESF School Dynamic Filters",
      description: "ESF School Dynamic Filters",
    },
    {
      src: "../assets/images/esf/joinus-07.jpg",
      alt: "ESF School Modal",
      description: "ESF School Modal",
    },
    {
      src: "../assets/images/esf/joinus-08.jpg",
      alt: "ESF Admissions Video & Highlights",
      description: "ESF Admissions Video & Highlights",
    },
    {
      src: "../assets/images/esf/joinus-09.jpg",
      alt: "ESF Admissions Landing Page",
      description: "ESF Admissions Landing Page",
    },
    {
      src: "../assets/images/esf/joinus-10.jpg",
      alt: "ESF Admissions Information Accordion",
      description: "ESF Admissions Information Accordion",
    },
    {
      src: "../assets/images/esf/joinus-11.jpg",
      alt: "ESF Frequently Asked Questions",
      description: "ESF Frequently Asked Questions",
    },
    {
      src: "../assets/images/esf/joinus-12.jpg",
      alt: "ESF Admissions / Enquiry Form",
      description: "ESF Admissions / Enquiry Form",
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
          <div className="col-lg-10 col-xxl-8">
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
              were aligned, and a complete redesign and separate site for the
              campaign would better achieve the project goals.
            </p>
            <div className="pp-info">
              <p className="plink-cont">
                <span className="tech">url:</span>
                <a
                  href="https://join-us.esf.edu.hk"
                  target="_blank"
                  rel="noreferrer"
                  className="proj-url"
                >
                  https://join-us.esf.edu.hk
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </p>
              <p className="plink-cont">
                <span className="tech">built with:</span>
                Wordpress, CSS, JS
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
          <div className="col-12 col-sm-9 col-xxl-7 py-sm-2 py-xxl-4 cs-caption">
            <p>
              An important part of the refresh was a much greater focus on media
              as opposed to static text. I designed the landing page with space
              for large, high-quality videos and images, and sections for
              featuring all of the cool things ESF students are achieving.
            </p>
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
          <div className="col-12 col-sm-9 col-xxl-7 py-sm-2 py-xxl-4 cs-caption">
            <p>
              Each landing page block is a call to action, leading to its own
              section on the website. I wanted to entice people and make it easy
              to explore further.
            </p>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(3)}>
              <picture>
                <source srcSet={srcToWebp(slides[3].src)} type="image/webp" />
                <img
                  src={slides[3].src}
                  alt={slides[3].alt}
                  height="945"
                  width="1902"
                  className="proj-img img-fluid"
                />
              </picture>
            </a>
          </div>
          <div className="col-12 col-sm-9 col-xxl-7 py-sm-2 py-xxl-4 cs-caption">
            <p>
              One of the most important features of the ESF is their 22 schools.
              While having a dynamic, filterable way to spotlight each school
              was paramount, for performance reasons I chose a static map on the
              homepage.
            </p>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(4)}>
              <picture>
                <source srcSet={srcToWebp(slides[4].src)} type="image/webp" />
                <img
                  src={slides[4].src}
                  alt={slides[4].alt}
                  height="945"
                  width="1902"
                  className="proj-img img-fluid"
                />
              </picture>
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(5)}>
              <picture>
                <source srcSet={srcToWebp(slides[5].src)} type="image/webp" />
                <img
                  src={slides[5].src}
                  alt={slides[5].alt}
                  height="945"
                  width="1902"
                  className="proj-img img-fluid"
                />
              </picture>
            </a>
          </div>
          <div className="col-12 col-sm-9 col-xxl-7 py-sm-2 py-xxl-4 cs-caption">
            <p>
              The organisation made clear their desire for a better user
              experience when searching for a school. I created this live map &
              database, so that each school's key characteristics, such as
              location, age group and type, are visible and accessible to
              prospective parents.
            </p>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(6)}>
              <picture>
                <source srcSet={srcToWebp(slides[6].src)} type="image/webp" />
                <img
                  src={slides[6].src}
                  alt={slides[6].alt}
                  height="945"
                  width="1902"
                  className="proj-img img-fluid"
                />
              </picture>
            </a>
          </div>
          <div className="col-12 col-sm-9 col-xxl-7 py-sm-2 py-xxl-4 cs-caption">
            <p>
              Another key objective was to organise and display the large amount
              of text information on the current website. I used information
              architecture techniques such as user flows, breadcrumbs, keyword
              filters and in-page scrolling navigation to create a better site
              map.
            </p>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(7)}>
              <picture>
                <source srcSet={srcToWebp(slides[7].src)} type="image/webp" />
                <img
                  src={slides[7].src}
                  alt={slides[7].alt}
                  height="945"
                  width="1902"
                  className="proj-img img-fluid"
                />
              </picture>
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(8)}>
              <picture>
                <source srcSet={srcToWebp(slides[8].src)} type="image/webp" />
                <img
                  src={slides[8].src}
                  alt={slides[8].alt}
                  height="945"
                  width="1902"
                  className="proj-img img-fluid"
                />
              </picture>
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(9)}>
              <picture>
                <source srcSet={srcToWebp(slides[9].src)} type="image/webp" />
                <img
                  src={slides[9].src}
                  alt={slides[9].alt}
                  height="945"
                  width="1902"
                  className="proj-img img-fluid"
                />
              </picture>
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(10)}>
              <picture>
                <source srcSet={srcToWebp(slides[10].src)} type="image/webp" />
                <img
                  src={slides[10].src}
                  alt={slides[10].alt}
                  height="945"
                  width="1902"
                  className="proj-img img-fluid"
                />
              </picture>
            </a>
          </div>
          <div className="col-12 col-sm-9 col-xxl-7 py-sm-2 py-xxl-4 cs-caption">
            <p>
              I was asked to improve conversion rates for the enquiry form,
              without removing questions from the current form. To this end, I
              redesigned it as multi-step with semantic sections, friendly,
              informal language, and a visual progress bar.
            </p>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(11)}>
              <picture>
                <source srcSet={srcToWebp(slides[11].src)} type="image/webp" />
                <img
                  src={slides[11].src}
                  alt={slides[11].alt}
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
                <Link to="../work/bg3setcreator">
                  <button className="back-link next-link">
                    Next Project<i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Link>
              </div>
              <div className="next-proj">BG3 Set Creator</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

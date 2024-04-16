import bb04 from "../../images/project/bb-04.jpg";
import bb01 from "../../images/project/bb-01.jpg";
import bb02 from "../../images/project/bb-02.jpg";
import bb03 from "../../images/project/bb-03.jpg";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Link } from "react-router-dom";

import BackButton from "../../components/BackButton";

export default function BeyondBitesize() {
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
    <>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[bb04, bb01, bb02, bb03]}
        slide={lightboxController.slide}
        type="image"
      />

      <div className="container mt-md-5 pt-4">
        <div className="row pb-2">
          <div className="col-md-8">
            <p className="categories">
              <span className="p-cat">UX & UI</span>/
              <span className="p-cat">Product Design</span>/
              <span className="p-cat">Prototyping</span>
            </p>
            <h1 className="mb-3">
              <span className="gradient">Beyond Bitesize</span>
            </h1>
            <p className="intro">
              Submission for the D&AD Awards for 2023. The brief was to create a
              learning experience for the BBC that expands upon their Bitesize
              platform - one that is fun, personalised, engaging & inclusive to
              children of all ages. I designed the app with sections for
              holistic learning of all aspects, including regular academic
              subjects and life skills. There are inclusive, customisable
              characters, parent feedback and positive reinforcement.
            </p>
            <p className="plink-cont">
              <i className="fa-solid fa-up-right-from-square link-icon"></i>
              <a
                href="https://xd.adobe.com/view/8a2fa891-de57-4c04-abc8-b673855e0a58-df7c/?fullscreen"
                target="_blank"
                rel="noreferrer"
                className="proj-link"
              >
                Interactive App UI Prototype
              </a>
              <br />
            </p>
            <p className="plink-cont">
              <i className="fa-solid fa-up-right-from-square link-icon"></i>
              <a
                href="https://xd.adobe.com/view/5ce946f8-63b2-4607-9611-289f01cb177a-09ba/?fullscreen"
                target="_blank"
                rel="noreferrer"
                className="proj-link"
              >
                Example Lesson Prototype
              </a>
            </p>
          </div>
        </div>
        <div className="row pb-2 pb-lg-3">
          <div className="col-lg-6">
            <img
              src={bb04}
              onClick={() => openLightboxOnSlide(1)}
              alt="Beyond Bitesize Screens"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-lg-6 mb-xs-2">
            <img
              src={bb01}
              onClick={() => openLightboxOnSlide(2)}
              alt="Beyond Bitesize Screens"
              className="proj-img img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pb-lg-2">
            <img
              src={bb02}
              alt="Beyond Bitesize Screens"
              onClick={() => openLightboxOnSlide(3)}
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-lg-6">
            <img
              src={bb03}
              alt="Beyond Bitesize Screens"
              onClick={() => openLightboxOnSlide(4)}
              className="proj-img img-fluid"
            />
          </div>
        </div>
        <div className="row mt-3">
          <BackButton />
          <div className="col col-lg-6 text-end">
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
    </>
  );
}

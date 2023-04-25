import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Link } from "react-router-dom";

import BackButton from "../../components/BackButton";

import tod3 from "../../images/project/tod-03-min.jpg";
import tod1 from "../../images/project/tod-01-min.jpg";
import tod2 from "../../images/project/tod-02-min.jpg";
import tod4 from "../../images/project/tod-04-min.jpg";

export default function TheOddDystrict() {
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
        sources={[tod3, tod1, tod2, tod4]}
        slide={lightboxController.slide}
        type="image"
      />
      <div className="container mt-md-5 pt-4">
        <div className="row pb-2">
          <div className="col-md-8">
            <p className="categories">
              <span className="p-cat">Identity Design</span>/
              <span className="p-cat">Branding</span>/{" "}
              <span className="p-cat">UX & UI</span>/
              <span className="p-cat">Frontend</span>
            </p>
            <h1 className="mb-3">
              <span className="gradient">The Odd Dystrict</span>
            </h1>
            <p className="intro">
              The Odd Dystrict is an art NFT project on the Ethereum network.
              The team needed a brand and aesthetic to match the high quality
              art by the artist Derog from New Zealand. It also needed to
              represent the rich lore of the project that makes it stand out.
              For this I was inspired by the colours of warning signs that
              humans have borrowed from nature, such as the black and yellow
              wasp. Texture and grunge were added to most elements to expand on
              the post-apocalyptic theme.
            </p>
            <p>
              <span className="plink-cont">
                <i className="fa-solid fa-up-right-from-square link-icon"></i>
                <a
                  href="https://the-odd-dystrict.com"
                  target="_blank"
                  rel="noreferrer"
                  className="proj-link"
                >
                  Live Website
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="row pb-2 pb-lg-3">
          <div className="col-lg-6">
            <img
              src={tod3}
              onClick={() => openLightboxOnSlide(1)}
              alt="The Odd Dystrict Screens"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-lg-6 mb-xs-2">
            <img
              src={tod1}
              onClick={() => openLightboxOnSlide(2)}
              alt="The Odd Dystrict Screens"
              className="proj-img img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pb-lg-2">
            <img
              src={tod2}
              onClick={() => openLightboxOnSlide(3)}
              alt="The Odd Dystrict Screens"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-lg-6">
            <img
              src={tod4}
              onClick={() => openLightboxOnSlide(4)}
              alt="The Odd Dystrict Screens"
              className="proj-img img-fluid"
            />
          </div>
        </div>
        <div className="row mt-3">
          <BackButton />
          <div className="col col-lg-6 text-end">
            <div className="d-flex flex-column justify-content-end">
              <div>
                <Link to="../work/juno">
                  <button className="back-link next-link">
                    Next Project<i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Link>
              </div>
              <div className="next-proj">Juno Bakeshop</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

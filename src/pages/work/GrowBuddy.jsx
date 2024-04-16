import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Link } from "react-router-dom";

import BackButton from "../../components/BackButton";

import growbuddy1 from "../../images/project/grow-buddy-01.jpg";
import growbuddy2 from "../../images/project/grow-buddy-02.jpg";
import growbuddy5 from "../../images/project/grow-buddy-05.jpg";
import growbuddy6 from "../../images/project/grow-buddy-06.jpg";
import growbuddy3 from "../../images/project/grow-buddy-03.jpg";
import growbuddy4 from "../../images/project/grow-buddy-04.jpg";

export default function GrowBuddy() {
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
        sources={[
          growbuddy1,
          growbuddy2,
          growbuddy5,
          growbuddy6,
          growbuddy3,
          growbuddy4,
        ]}
        slide={lightboxController.slide}
        type="image"
      />

      <div className="container mt-md-5 pt-4">
        <div className="row pb-2">
          <div className="col-md-8">
            <p className="categories">
              <span className="p-cat">Identity Design</span>/
              <span className="p-cat">App Design</span>/{" "}
              <span className="p-cat nl">Packaging</span>/
              <span className="p-cat">UX/UI</span>/
              <span className="p-cat">Student Brief</span>
            </p>
            <h1 className="mb-3">
              <span className="gradient">Grow Buddy Microgreens Pack</span>
            </h1>
            <p className="intro">
              For the university's Final Major Project, we were to make a large
              scale design project from brief to final product. I decided to
              create a pack for growing microgreens at home, to encourage young
              people to see it as fun, easy and nutritious. This brief required
              practical work across multiple disciplines including branding &
              identity, app & UX, as well as physically crafting the packaging,
              and product photography / editing.
            </p>
            <p className="plink-cont">
              <i className="fa-solid fa-up-right-from-square link-icon"></i>
              <a
                href="https://xd.adobe.com/view/69206444-cd85-4daf-ab3f-c6c57c09eda8-3c73/?fullscreen"
                target="_blank"
                rel="noreferrer"
                className="proj-link"
              >
                Interactive Prototype
              </a>
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pb-2 pb-lg-3">
          <div className="col-lg-6">
            <img
              src={growbuddy1}
              onClick={() => openLightboxOnSlide(1)}
              alt="Grow Buddy Screens: a hand holding a Brocc Box pack outside in the snow"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-lg-6 mb-xs-2">
            <img
              src={growbuddy2}
              onClick={() => openLightboxOnSlide(2)}
              alt="Grow Buddy Screens"
              className="proj-img img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pb-2 pb-lg-3">
          <div className="col-lg-6">
            <img
              src={growbuddy5}
              onClick={() => openLightboxOnSlide(3)}
              alt="Grow Buddy Screens"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-lg-6">
            <img
              src={growbuddy6}
              onClick={() => openLightboxOnSlide(4)}
              alt="Grow Buddy Screens"
              className="proj-img img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pb-2 pb-lg-3">
          <div className="col-lg-6">
            <img
              src={growbuddy3}
              onClick={() => openLightboxOnSlide(5)}
              alt="Grow Buddy Screens"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-lg-6">
            <img
              src={growbuddy4}
              onClick={() => openLightboxOnSlide(6)}
              alt="Grow Buddy Screens"
              className="proj-img img-fluid"
            />
          </div>
        </div>
        <div className="row mt-3">
          <BackButton />
          <div className="col col-lg-6 text-end">
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
    </>
  );
}

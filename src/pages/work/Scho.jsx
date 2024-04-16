import { useState } from "react";
import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";

import scho01 from "../../images/project/scho-01-min.jpg";
import scho02 from "../../images/project/scho-02-min.jpg";
import scho03 from "../../images/project/scho-03-min.jpg";
import scho04 from "../../images/project/scho-04-min.jpg";

import BackButton from "../../components/BackButton";

export default function Scho() {
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
        sources={[scho01, scho02, scho03, scho04]}
        slide={lightboxController.slide}
        type="image"
      />

      <div className="container mt-md-5 pt-4">
        <div className="row pb-2">
          <div className="col-md-8">
            <p className="categories">
              <span className="p-cat">Identity Design</span>/
              <span className="p-cat">Branding</span>/
              <span className="p-cat">Packaging</span>
            </p>
            <h1 className="mb-3">
              <span className="gradient">Personal Branding & Identity</span>
            </h1>
            <p className="intro">
              The growth of my design and personal brand over the years needed a
              fresh face, so I created a new brand identity for scho. The new
              logomark is elegant but colourful; a graphical representation of
              the first part of my Chinese name '雪', or snow. Like snow, I
              wanted it to feel striking, unique and clean. I also created a
              self-promotional pack which can be posted through the mailbox -
              with collateral such as business cards, a branded 'red packet', a
              CV, and some stickers.
            </p>
          </div>
        </div>
        <div className="row pb-2 pb-lg-3">
          <div className="col-lg-6">
            <img
              src={scho01}
              onClick={() => openLightboxOnSlide(1)}
              alt="scho personal branding"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-lg-6 mb-xs-2">
            <img
              src={scho02}
              onClick={() => openLightboxOnSlide(2)}
              alt="scho personal branding"
              className="proj-img img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pb-lg-2">
            <img
              src={scho03}
              onClick={() => openLightboxOnSlide(3)}
              alt="scho personal branding"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-lg-6">
            <img
              src={scho04}
              onClick={() => openLightboxOnSlide(4)}
              alt="scho personal branding"
              className="proj-img img-fluid"
            />
          </div>
        </div>
        <div className="row mt-3">
          <BackButton />
          <div className="col col-lg-6 text-end">
            <div className="d-flex flex-column justify-content-end">
              <div>
                <Link to="../work/growbuddy">
                  <button className="back-link next-link">
                    Next Project<i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Link>
              </div>
              <div className="next-proj">Grow Buddy Microgreens</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

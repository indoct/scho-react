import { useState } from "react";
import FsLightbox from "fslightbox-react";

import BackButton from "../../components/BackButton";

import juno0 from "../../images/project/juno-00.jpg";
import juno1 from "../../images/project/juno-01.jpg";
import juno2 from "../../images/project/juno-02.jpg";
import juno4 from "../../images/project/juno-04.jpg";

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
        sources={[juno0, juno1, juno2, juno4]}
        slide={lightboxController.slide}
        type="image"
      />
      <div className="container mt-md-5 pt-4">
        <div className="row pb-2">
          <div className="col-md-8">
            <p className="categories">
              <span className="p-cat">Identity Design</span>/
              <span className="p-cat">Branding</span>/{" "}
              <span className="p-cat">Packaging</span>/
              <span className="p-cat nl">Student Brief</span>
            </p>
            <h1 className="mb-3">
              <span className="gradient">Juno Bakeshop</span>
            </h1>
            <p className="intro">
              For this small new business based in London, the brief was to
              create a brand and collateral including branded social media
              templates and packaging for the baked goods. With the smaller
              budget in mind, the design was crafted to represent the bakeshop’s
              message of joy, warmth and comfort through food - but with lower
              cost packaging.
            </p>
          </div>
        </div>
        <div className="row pb-2 pb-lg-3">
          <div className="col-lg-6">
            <img
              src={juno0}
              onClick={() => openLightboxOnSlide(1)}
              alt="Juno Bakeshop Screens"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-lg-6 mb-xs-2">
            <img
              src={juno1}
              onClick={() => openLightboxOnSlide(2)}
              alt="Juno Bakeshop Screens"
              className="proj-img img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pb-lg-2">
            <img
              src={juno2}
              onClick={() => openLightboxOnSlide(3)}
              alt="Juno Bakeshop Screens"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-lg-6">
            <a href="../images/project/juno-04.jpg" data-fslightbox="gallery">
              <img
                src={juno4}
                onClick={() => openLightboxOnSlide(4)}
                alt="Juno Bakeshop Screens"
                className="proj-img img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="row mt-3">
          <BackButton />
        </div>
      </div>
    </>
  );
}

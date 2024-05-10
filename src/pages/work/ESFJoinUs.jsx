import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import assets from "../../images";

import BackButton from "../../components/BackButton";

export default function ESFJoinUs() {
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
            <p className="categories">
              <span className="p-cat">UX & UI Design</span>/
              <span className="p-cat">Front-end Development</span>/
              <span className="p-cat">CMS</span>
            </p>
            <h1 className="mb-3">
              <span className="gradient">English Schools Foundation</span>
            </h1>
            <p className="proj-tagline">
              A fresh, dynamic face for ESF - Hong Kong's largest provider of
              English-medium education.
            </p>
            <p className="intro">
              The English Schools Foundation (est. 1967) approached me to add a
              few pages to their existing website for a summer student
              recruitment drive for their 22 schools. After discussions it
              became clear that our visions were aligned and that a complete
              redesign and separate site for the campaign would be better suited
              to achieve the project goals.
            </p>
            <p className="plink-cont">
              <i className="fa-solid fa-up-right-from-square link-icon"></i>
              <a
                href="https://join-us.esf.edu.hk"
                target="_blank"
                rel="noreferrer"
                className="proj-url"
              >
                Visit ESF Website
              </a>
              <br />
            </p>
          </div>
        </div>
        <div className="row pb-2 py-lg-3 project-images justify-content-center">
          <div className="col-12">
            <img
              src={assets.joinus01}
              alt="ESF Join Us Hero"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
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
              src={assets.joinus02}
              alt="ESF Join Us Intro"
              className="proj-img img-fluid"
            />
          </div>
          <div className="col-12">
            <img
              src={assets.joinus03}
              alt="ESF Join Us Culture Highlights"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-12">
            <img
              src={assets.joinus04}
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
              src={assets.joinus05}
              alt="ESF Join Us Culture Highlights"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-12">
            <img
              src={assets.joinus06}
              alt="ESF Join Us School Map Static"
              className="proj-img img-fluid"
            />
          </div>
          <div className="col-12">
            <img
              src={assets.joinus07}
              alt="ESF Join Us Culture Highlights"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-6 cs-caption">
            <p>
              INFO ARCHITECTURE / ADMISSIONS. Trying to take down a rogue
              Spectre and his army of synthetics? No, they didn't cover this in
              Basic. And I would again. But I also know what it is to leave
              everything behind and fight.
            </p>
          </div>
          <div className="col-12">
            <img
              src="../../src/assets/images/esf/assets.joinus-08.jpg"
              alt="ESF Join Us School Map Static"
              className="proj-img img-fluid"
            />
          </div>
          <div className="col-12">
            <img
              src={assets.joinus09}
              alt="ESF Join Us School Map Static"
              className="proj-img img-fluid"
            />
          </div>
          <div className="col-12">
            <img
              src={assets.joinus10}
              alt="ESF Join Us School Map Static"
              className="proj-img img-fluid"
            />
          </div>
          <div className="col-12">
            <img
              src={assets.joinus11}
              alt="ESF Join Us School Map Static"
              className="proj-img img-fluid"
            />
          </div>
          <div className="col-12">
            <img
              src={assets.joinus12}
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

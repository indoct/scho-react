import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import BackButton from "../../components/BackButton";

export default function ESFJoinUs() {
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
            <p className="categories">
              <span className="p-cat">UX & UI</span>/
              <span className="p-cat">Product Design</span>/
              <span className="p-cat">Prototyping</span>
            </p>
            <h1 className="mb-3">
              <span className="gradient">English Schools Foundation</span>
            </h1>
            <p className="intro">
              A fresh, dynamic face for the ESF - Hong Kong's largest provider
              of English-medium education.
            </p>
            <p className="intro">
              The English Schools Foundation (est. 1967) approached me to add a
              few pages to their existing website for a summer student
              recruitment drive for their 22 schools. After discussions it
              became clear that our visions were aligned and that a complete
              redesign and separate site for the campaign would make more sense
              to achieve the project goals.
            </p>
            <p className="plink-cont">
              <i className="fa-solid fa-up-right-from-square link-icon"></i>
              <a
                href="https://join-us.esf.edu.hk"
                target="_blank"
                rel="noreferrer"
                className="proj-link"
              >
                ESF Join Us Campaign
              </a>
              <br />
            </p>
          </div>
        </div>
        <div className="row pb-2 pb-lg-3">
          <div className="col-12 mb-xs-2">
            <img
              src="../../src/images/esf/joinus-01.jpg"
              alt="ESF Join Us Hero"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
        </div>
        <div className="row pb-2 pb-lg-3">
          <div className="col-12 mb-xs-2">
            <img
              src="../../src/images/esf/joinus-02.jpg"
              alt="ESF Join Us Intro"
              className="proj-img img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 pb-lg-2">
            <img
              src="../../src/images/esf/joinus-03.jpg"
              alt="ESF Join Us Culture Highlights"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-12">
            <img
              src="../../src/images/esf/joinus-04.jpg"
              alt="ESF Join Us School Map Static"
              className="proj-img img-fluid"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 pb-lg-2">
            <img
              src="../../src/images/esf/joinus-05.jpg"
              alt="ESF Join Us Culture Highlights"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-12">
            <img
              src="../../src/images/esf/joinus-06.jpg"
              alt="ESF Join Us School Map Static"
              className="proj-img img-fluid"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 pb-lg-2">
            <img
              src="../../src/images/esf/joinus-07.jpg"
              alt="ESF Join Us Culture Highlights"
              className="proj-img img-fluid mb-2 mb-md-0"
            />
          </div>
          <div className="col-12">
            <img
              src="../../src/images/esf/joinus-08.jpg"
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

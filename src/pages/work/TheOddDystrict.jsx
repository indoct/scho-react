import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import assets from "../../images";

import BackButton from "../../components/BackButton";

export default function TheOddDystrict() {
  const [index, setIndex] = useState(-1);
  const [slides, setSlides] = useState([
    {
      src: assets.tod01,
      alt: "TOD Website Hero",
      description: "TOD Website Hero",
    },
    {
      src: assets.tod02,
      alt: "TOD Website Intro + Discord Link",
      description: "TOD Website Intro + Discord Link",
    },
    {
      src: assets.tod03,
      alt: "TOD Website NFT Technology Block",
      description: "TOD Website NFT Technology Block",
    },
    {
      src: assets.tod04,
      alt: "TOD Website Team Bio Cards",
      description: "TOD Website Team Bio Cards",
    },
    {
      src: assets.tod05,
      alt: "TOD Portal - Web3 Wallet Connect UI",
      description: "TOD Portal - Web3 Wallet Connect UI",
    },
    {
      src: assets.tod06,
      alt: "TOD Portal - NFT Display + Contract Interaction",
      description: "TOD Portal - NFT Display + Contract Interaction",
    },
    {
      src: assets.tod07,
      alt: "TOD Portal NFT Checker",
      description: "TOD Portal NFT Checker",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
      style={{ overflowY: "scroll" }}
    >
      <div className="container d-flex flex-column pt-sm-4 pt-xxl-5 justify-content-center page">
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
              <span className="p-cat">UX & UI</span>/
              <span className="p-cat">Identity Design</span>/
              <span className="p-cat">Front End</span>/
              <span className="p-cat">React</span>
            </p>
            <h1 className="mb-3">
              <span className="gradient">The Odd Dystrict</span>
            </h1>
            <p className="proj-tagline">
              Website and web3 interface where users could mint an art NFT and
              interact with their portfolio.
            </p>
            <p className="intro">
              This project consisted of full identity and UI design for the
              brand, as well as the build for the website and interactive web3
              front end. The main website was both a shop front to provide
              static information and an interface for users to 'mint' their
              NFTs. Once the initial art had been released, I collaborated with
              the other developer to build the portal. The Portal was more
              feature-heavy - utilising web3 and React to display users'
              wallets, interact with the contract to use their Oddies to mint a
              2nd collection, and check which NFTs were still available.
            </p>
            <div className="pp-info">
              <p className="plink-cont">
                <span className="tech">URL: </span>
                <a
                  href="https://the-odd-dystrict.com/home.html"
                  target="_blank"
                  rel="noreferrer"
                  className="proj-url"
                >
                  main website
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
                <span className="tech ps-4">URL2: </span>
                <a
                  href="https://portal.the-odd-dystrict.com"
                  target="_blank"
                  rel="noreferrer"
                  className="proj-url"
                >
                  portal <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </p>
              <p className="plink-cont">
                <span className="tech">BUILT WITH: </span>
                Bootstrap, JS, Web3, React
              </p>
            </div>
          </div>
        </div>
        <div className="row pb-2 py-lg-3 project-images justify-content-center">
          <div className="col-12">
            <a href="#" onClick={() => setIndex(0)}>
              <img
                src={assets.tod01}
                alt="TOD Website Hero"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12 col-sm-6 cs-caption">
            <p>
              It was important to the team that every aspect of the project was
              high-quality and cohesive, design-wise, all the way from the art
              itself to the UI and social media to the merchandise and other
              collateral.
            </p>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(1)}>
              <img
                src={assets.tod02}
                alt="TOD Website Intro + Discord Link"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(2)}>
              <img
                src={assets.tod03}
                alt="TOD Website NFT Technology Block"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(3)}>
              <img
                src={assets.tod04}
                alt="TOD Website Team Bio Cards"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12 col-sm-6 cs-caption">
            <p>
              React and web3 work together well, providing a dynamic library
              that allows users to see the contents of their wallets & an easy
              interface for interacting with the NFT's contract.
            </p>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(4)}>
              <img
                src={assets.tod05}
                alt="TOD Portal - Web3 Wallet Connect UI"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(5)}>
              <img
                src={assets.tod06}
                alt="TOD Portal - NFT Display + Contract Interaction"
                className="proj-img img-fluid"
              />
            </a>
          </div>
          <div className="col-12">
            <a href="#" onClick={() => setIndex(6)}>
              <img
                src={assets.tod07}
                alt="TOD Portal NFT Checker"
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
                <Link to="../work/esfjoinus">
                  <button className="back-link next-link">
                    Return to Start
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Link>
              </div>
              <div className="next-proj">English Schools Foundation</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

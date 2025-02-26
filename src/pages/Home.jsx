import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "ESF Join Us",
    src: "project-cover-esf",
    name: "English Schools Foundation",
    tagline:
      "A fresh, dynamic face for the ESF, Hong Kong's largest provider of English-medium education.",
    link: "esfjoinus",
    url: "https://join-us.esf.edu.hk",
  },
  {
    title: "BG3 Piercing Set Creator",
    src: "project-cover-prc",
    name: "BG3 Piercing Set Creator",
    tagline:
      "A web app for people to easily create their own custom Baldur's Gate 3 piercing combinations.",
    link: "bg3setcreator",
    url: "https://piercings.indoc.dev",
  },
  {
    title: "Get Set Sports Academy",
    src: "project-cover-gs",
    name: "Get Set Sports Academy",
    tagline:
      "Building an attractive and easily maintainable web presence for a leading athletics academy.",
    link: "getsetsports",
    url: "https://getsetsportsacademy.com",
  },
  {
    title: "Quizzical",
    src: "project-cover-quiz",
    name: "Quizzical",
    tagline:
      "An interactive quiz web app, built with React and utilising the TMDb database.",
    link: "quizzical",
    url: "https://quizzical.scho.pro",
  },
  {
    title: "The Odd Dystrict NFT",
    src: "project-cover-tod",
    name: "The Odd Dystrict",
    tagline:
      "Website and web3 interface where users could mint an art NFT and interact with their portfolio.",
    link: "theodddystrict",
    url: "https://the-odd-dystrict.com",
  },
  {
    title: "N7 Ipsum",
    src: "project-cover-n7i",
    name: "N7 Ipsum",
    tagline:
      "A Mass Effect lorem ipsum dummy text generator built with vanilla JS. Does what it says on the tin.",
    link: "",
    url: "https://n7-ipsum.scho.pro",
  },
];

export default function Home(props) {
  const { isDarkMode } = props;
  let timeoutId;
  const [copyBtnPressed, setCopyBtnPressed] = useState(false);

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 3,
      },
    },
  };

  async function copyToClipboard() {
    await navigator.clipboard.writeText("hello@scho.pro");
  }

  const handleCopyBtn = () => {
    setCopyBtnPressed(true);
    timeoutId = setTimeout(() => {
      setCopyBtnPressed(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="container page"
    >
      <section className="header home row">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-6"
        >
          <div className="intro">
            <h2>Hi there! Welcome to </h2>
            <h1 className="fw-600">
              <span className="gradient">scho.</span>{" "}
              <span className="studio">studio.</span>
            </h1>{" "}
            <p>
              I'm Siobhan, a designer and UX/UI Engineer based in London{" "}
              <i className="fa-regular fa-face-smile ps-1"></i>. I design and
              build thoughtful, accessible and visually appealing digital
              interfaces.
            </p>
          </div>
        </motion.div>
      </section>
      <motion.ul
        id="case-studies"
        variants={variants}
        initial="hidden"
        animate="visible"
        className="row mb-5 mb-sm-2 gy-4 gy-xxl-5 gx-2"
      >
        {projects.map((proj) => (
          <motion.li
            key={proj.link}
            variants={itemVariants}
            className="col-12 col-lg-6 col-xxl-4 proj-card"
          >
            <div className="p-card-img">
              <img
                src={`assets/images/project/comp/${proj.src}-${
                  isDarkMode ? "d" : "l"
                }.png`}
                srcSet={`
                  assets/images/project/comp/${proj.src}-${
                  isDarkMode ? "d" : "l"
                }.png 1x,
                  assets/images/project/comp/${proj.src}-${
                  isDarkMode ? "d" : "l"
                }-2x.png 2x
                `}
                alt={`${proj.title} cover image`}
                height="650"
                width="800"
              />
            </div>
            <div className="card-text">
              <h2 className="p-title">{proj.name}</h2>
              <p className="p-desc">{proj.tagline}</p>
            </div>
            <ul className="proj-links">
              {proj.link !== "" && (
                <li>
                  <Link to={`work/${proj.link}`}>
                    project
                    <i
                      className="fa-solid fa-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </li>
              )}
              <li>
                <a href={proj.url} target="_blank">
                  website
                  <i className="fa fa-external-link" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </motion.li>
        ))}
      </motion.ul>
      <section id="hc-row" className="row justify-content-center">
        <div className="col-12 text-center">
          <div className="home-contact">
            <p>
              Let's make something great. If you're interested in working
              together, please get in touch at:
            </p>
            <div className="hc-links">
              <div>
                <a href="mailto:hello@scho.pro" className="email-big gradient">
                  hello@scho.pro
                </a>
                <button
                  className="copy-btn"
                  disabled={copyBtnPressed}
                  onClick={() => {
                    handleCopyBtn();
                    copyToClipboard();
                  }}
                >
                  {!copyBtnPressed ? <>copy email</> : <>copied!</>}
                </button>
              </div>
            </div>

            <div className="social-icons">
              <a href="/contact" aria-label="Go to the contact form page">
                <i
                  id="form-icon"
                  className="fa-solid fa-envelope-open-text"
                ></i>
              </a>
              <a
                href="https://github.com/indoct/"
                target="_blank"
                aria-label="github (opens in new tab)"
              >
                <i
                  className="fa-brands fa-square-github"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

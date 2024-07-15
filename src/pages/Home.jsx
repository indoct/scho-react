import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ESF Join Us",
    src: "project-cover-esf.jpg",
    webp: "project-cover-esf.webp",
    name: "English Schools Foundation",
    tagline:
      "A fresh, dynamic face for the ESF, Hong Kong's largest provider of English-medium education.",
    link: "esfjoinus",
    url: "https://join-us.esf.edu.hk",
  },
  {
    title: "BG3 Piercing Set Creator",
    src: "project-cover-prc.jpg",
    webp: "project-cover-prc.webp",
    name: "BG3 Piercing Set Creator",
    tagline:
      "A web app for people to easily create their own custom Baldur's Gate 3 piercing combinations.",
    link: "bg3setcreator",
    url: "https://piercings.indoc.dev",
  },
  {
    title: "Get Set Sports Academy",
    src: "project-cover-gs.jpg",
    webp: "project-cover-gs.webp",
    name: "Get Set Sports Academy",
    tagline:
      "Building an attractive and easily maintainable web presence for a leading athletics academy.",
    link: "getsetsports",
    url: "https://getsetsportsacademy.com",
  },
  {
    title: "Quizzical",
    src: "project-cover-quiz.jpg",
    webp: "project-cover-quiz.webp",
    name: "Quizzical",
    tagline:
      "An interactive quiz web app, built with React and utilising the TMDb database.",
    link: "quizzical",
    url: "https://quizzical.scho.pro",
  },
  {
    title: "The Odd Dystrict NFT",
    src: "project-cover-tod.jpg",
    webp: "project-cover-tod.webp",
    name: "The Odd Dystrict",
    tagline:
      "Website and web3 interface where users could mint an art NFT and interact with their portfolio.",
    link: "theodddystrict",
    url: "https://the-odd-dystrict.com",
  },
  {
    title: "N7 Ipsum",
    src: "project-cover-n7i.jpg",
    webp: "project-cover-n7i.webp",
    name: "N7 Ipsum",
    tagline:
      "A Mass Effect lorem ipsum dummy text generator built with vanilla JS. Does what it says on the tin.",
    link: "",
    url: "https://n7-ipsum.scho.pro",
  },
];

export default function Home() {
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
          className="col-12 col-sm-10 col-xl-8 col-xxl-7"
        >
          <h1>
            <span className="gradient">scho.</span>
          </h1>
          <div>
            <p className="intro">
              Hi there! I'm SC Houlihan, but 'scho' is easier to spell
              <i className="fa-regular fa-face-smile-wink ps-1"></i>.{" "}
              <span className="intro-2">
                I'm a Front-end Engineer & UX/UI Designer in London.
              </span>
            </p>
          </div>
        </motion.div>
      </section>
      <motion.ul
        id="case-studies"
        variants={variants}
        initial="hidden"
        animate="visible"
        className="row mb-2 gy-4 gx-3"
      >
        {projects.map((proj) => (
          <motion.li
            key={proj.link}
            variants={itemVariants}
            className="col-12 col-md-6 col-xl-4 proj-card"
          >
            <div className="p-card-img">
              <picture>
                <source srcSet={`assets/images/project/comp/${proj.webp}`} />
                <img
                  src={`assets/images/project/comp/${proj.src}`}
                  alt={`${proj.title} cover image`}
                  height="354"
                  width="538"
                />
              </picture>
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
      <section className="row mt-5 mb-1 my-sm-5 justify-content-center">
        <div className="col-12 text-center">
          <div className="home-contact">
            <p>
              If you'd like to see more work or get in touch, please fill out
              the <a href="/contact">contact form</a>, or you can email me at:
              <a href="mailto:hello@scho.pro" className="email-big gradient">
                hello@scho.pro
              </a>
            </p>
            <div className="social-icons">
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
              <a
                href="https://linkedin.com/in/shoul"
                target="_blank"
                aria-label="linkedin (opens in new tab)"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

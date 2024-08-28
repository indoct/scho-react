import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ESF Join Us",
    src: "placehold-8x7.png",
    webp: "placehold-8x7.png",
    name: "English Schools Foundation",
    tagline:
      "A fresh, dynamic face for the ESF, Hong Kong's largest provider of English-medium education.",
    link: "esfjoinus",
    url: "https://join-us.esf.edu.hk",
  },
  {
    title: "BG3 Piercing Set Creator",
    src: "placehold-bg3.png",
    webp: "placehold-bg3.png",
    name: "BG3 Piercing Set Creator",
    tagline:
      "A web app for people to easily create their own custom Baldur's Gate 3 piercing combinations.",
    link: "bg3setcreator",
    url: "https://piercings.indoc.dev",
  },
  {
    title: "Get Set Sports Academy",
    src: "placehold-gs.png",
    webp: "placehold-gs.png",
    name: "Get Set Sports Academy",
    tagline:
      "Building an attractive and easily maintainable web presence for a leading athletics academy.",
    link: "getsetsports",
    url: "https://getsetsportsacademy.com",
  },
  {
    title: "Quizzical",
    src: "placehold-mid.png",
    webp: "placehold-mid.png",
    name: "Quizzical",
    tagline:
      "An interactive quiz web app, built with React and utilising the TMDb database.",
    link: "quizzical",
    url: "https://quizzical.scho.pro",
  },
  {
    title: "The Odd Dystrict NFT",
    src: "placehold-tod.png",
    webp: "placehold-tod.png",
    name: "The Odd Dystrict",
    tagline:
      "Website and web3 interface where users could mint an art NFT and interact with their portfolio.",
    link: "theodddystrict",
    url: "https://the-odd-dystrict.com",
  },
  {
    title: "N7 Ipsum",
    src: "placehold-n7i.png",
    webp: "placehold-n7i.png",
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
          className="col-12 col-sm-10 col-xl-6"
        >
          <div>
            <p className="intro">
              Hi there! Welcome to{" "}
              <h1>
                <span className="gradient">scho.</span>
              </h1>{" "}
              studio. I'm a designer and UX/UI Engineer based in London{" "}
              <i className="fa-regular fa-face-smile ps-1"></i>.{" "}
              <span className="intro-2">
                I design and build visually appealing digital interfaces that
                are thoughtful, accessible, and SEO-friendly.
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
        className="row mb-2 gy-4 gx-2"
      >
        {projects.map((proj) => (
          <motion.li
            key={proj.link}
            variants={itemVariants}
            className="col-12 col-md-6 col-xl-4 proj-card"
          >
            <div className="p-card-img">
              <picture>
                <source
                  srcSet={`assets/images/project/comp/${proj.webp}`}
                  type="image/webp"
                />
                <img
                  src={`assets/images/project/comp/${proj.src}`}
                  alt={`${proj.title} cover image`}
                  height="1750"
                  width="2000"
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
              Let's make something great. If you're interested in working
              together or just have some questions, you can email me at:
              <a href="mailto:hello@scho.pro" className="email-big gradient">
                hello@scho.pro
              </a>
              <button className="copy-btn">copy email</button>
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

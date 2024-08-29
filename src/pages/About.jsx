import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="container about page pt-sm-4 pt-xxl-5 project-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.4 }}
        className="row"
      >
        <div className="col-12 col-md-7 col-xxl-6 bio pe-md-5">
          <h1 className="mb-3">
            <span className="gradient">About</span>
          </h1>
          <p className="intro">
            Hi there, my name is Siobhan. I'm a front end developer & designer
            based in London, UK. My focus is on digital experiences and UX/UI,
            and I love to build with the flexibility that React provides (this
            site is built with React and Framer Motion, for example!).
          </p>
          <p className="intro">
            I recently graduated with a first in Graphic Design from the
            University of Hertfordshire, and I previously acquired a certificate
            in UX/UI Design from General Assembly. I also have a BSc as I love
            to learn and I'm constantly challenging myself to improve my
            skillset. I've worked for many years in development and design and I
            have experience working solo, in teams of a few people, and in
            organisations with over 2000 staff.
          </p>
          <p className="intro">
            I love to create, no matter the format, and I pride myself on
            crafting products that not only look great but are also accessible
            and a joy to use. When I'm not working, I enjoy building personal
            projects, gaming, modding, football (KTBFFH!), and travelling.
          </p>
          <p className="about-copy">
            I'm currently
            <strong> available for freelance opportunities</strong>, so please
            &nbsp;
            <br />
            <Link to="/contact">head to the contact page</Link> to get in touch
            or email me at: <a href="mailto:hello@scho.pro">hello@scho.pro</a>
          </p>
        </div>
        <div className="col-12 col-xl-5 profile m-xl-0 ps-xl-4 ps-xxl-5">
          <h2 className="mb-3">
            <span className="gradient">Quick Profile</span>
          </h2>
          <h6>Skills:</h6>
          <p className="mb-3 mb-xxl-4 d-flex">
            <span className="item">Front-End Dev</span>
            <span className="item">React Dev</span>
            <span className="item">Wordpress</span>
            <span className="item">User Experience (UX)</span>
            <span className="item">User Interface (UI)</span>
            <span className="item">Web & App Design</span>
          </p>
          <h6>Education:</h6>
          <div className="item mb-3 mb-xxl-4">
            <p>
              BA(Hons) Graphic Design [<span className="grade">First</span>]
              <br />
              <span className="p-desc">
                University of Hertfordshire, 2019-2023
              </span>
            </p>
            <p className="mb-0">
              Certificate in UX/UI Design
              <br />
              <span className="p-desc">General Assembly, 2017</span>
            </p>
          </div>
          <h6>Stack:</h6>
          <p className="mb-3 mb-xxl-4 d-flex">
            <span className="item">HTML</span>
            <span className="item">CSS</span>
            <span className="item">Javascript</span>
            <span className="item">React</span>
            <span className="item">Typescript</span>
            <span className="item">Bootstrap</span>
            <span className="item">Wordpress</span>
          </p>
          <h6>Software:</h6>
          <p className="mb-3 mb-xxl-4 d-flex">
            <span className="item">Adobe Illustrator</span>
            <span className="item">Adobe Photoshop</span>
            <span className="item">Adobe XD</span>
            <span className="item">Figma</span>
            <span className="item">Adobe InDesign</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

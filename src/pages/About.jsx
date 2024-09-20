import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="container about page pt-sm-4 pt-xxl-5 content-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.4 }}
      >
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7 col-xxl-6 profile">
            <h2 className="mb-3">
              <span className="gradient">Services</span>
            </h2>
            <h6>Design:</h6>
            <p className="mb-3 mb-xxl-4 d-flex">
              <span className="item">Web & App</span>
              <span className="item">User Experience (UX)</span>
              <span className="item">User Interface (UI)</span>
              <span className="item">Digital & Print</span>
            </p>
            <h6>Development:</h6>
            <p className="mb-3 mb-xxl-4 d-flex">
              <span className="item">Front-End</span>
              <span className="item">Wordpress</span>
              <span className="item">HTML/CSS</span>
              <span className="item">Javascript</span>
              <span className="item">React</span>
              <span className="item">Typescript</span>
              <span className="item">Bootstrap</span>
              <span className="item">Webflow</span>
            </p>
            <h6>Software Used:</h6>
            <p className="mb-3 mb-xxl-4 d-flex">
              <span className="item">Adobe Illustrator</span>
              <span className="item">Adobe Photoshop</span>
              <span className="item">Adobe XD</span>
              <span className="item">Figma</span>
              <span className="item">InDesign</span>
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7 col-xxl-6 bio pe-md-5">
            <h1 className="mb-3">
              <span className="gradient">About</span>
            </h1>
            <p className="intro">
              Hello! I'm Siobhan, a designer and UX/UI engineer with over 8
              years of experience. My focus is on digital experiences and UX/UI,
              but I'm a designer in general who's also experienced in print,
              marketing, indentity and collateral design.
            </p>
            <p className="intro">
              What is a UX/UI Engineer? To put it simply, I design and build
              digital products such as websites and apps with a strong focus on
              the human aspect and user experience. Starting with the research
              and discovery process, through to iteration, design and build,
              I'll help take your product from an idea to reality. We can also
              work together on only one - or a few - stages in the process if
              that's more suitable for your time frame and budget.
            </p>
            <p className="intro">
              I love to create, no matter the format, and I pride myself on
              crafting products that not only look great but are also accessible
              and a joy to use. When I'm not working, I enjoy building personal
              projects, gaming, modding, football (KTBFFH!), and travelling.
            </p>
            <p className="intro">
              I'm currently
              <strong> available for freelance opportunities</strong>, so please
              &nbsp;
              <br />
              <Link to="/contact">head to the contact page</Link> and fill out
              the form or you can email me at:{" "}
              <a href="mailto:hello@scho.pro">hello@scho.pro</a>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

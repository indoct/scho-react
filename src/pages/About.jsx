import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="container about pt-5 pt-lg-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.6 }}
        className="row pt-4 pt-lg-5"
      >
        <div className="row">
          <div className="col-12 col-lg-6 bio pe-md-5">
            <h1 className="mb-4">
              <span className="gradient">About Me</span>
            </h1>
            <p className="about-copy">
              Hi there, my name is Siobhan. I'm a frontend developer and
              designer based in London, UK. My focus is on digital experiences
              and UX/UI but I also design for print and physical media.
            </p>
            <p className="about-copy">
              I recently graduated with a first in Graphic Design from the
              University of Hertfordshire, and I previously acquired a
              certificate in UX/UI Design from General Assembly. I've worked for
              many years in graphic and web design and I have experience both
              working solo and in teams both small and large.
            </p>
            <p className="about-copy">
              I love to create, no matter the format, and I pride myself on
              crafting design that looks great but is also a joy to use
              (accessibility is key!) When I'm not designing, I enjoy coding,
              making gifs, gaming, football, and occasionally video editing.
            </p>
            <div className="about-copy">
              For more projects & examples of my work:
              <ul>
                <li>
                  <strong>
                    <a
                      href="scho-portfolio-2023.pdf"
                      className="gradient"
                      download
                    >
                      download my portfolio
                    </a>
                  </strong>
                  <span className="small"> (PDF, 17mb)</span>
                </li>
                <li>
                  <strong>
                    <a href="scho-portfolio-2023.pdf" className="gradient">
                      view in browser
                    </a>
                  </strong>
                </li>
              </ul>
            </div>
            <p className="about-copy">
              I'm currently
              <strong> available for freelance opportunities</strong>, so please
              &nbsp;
              <Link to="/contact">head to the contact page</Link> to get in
              touch !
            </p>
          </div>
          <div className="col-12 col-lg-5 profile ps-md-5">
            <h2 className="mb-4">
              <span className="gradient">Quick Profile</span>
            </h2>
            <h6>Skills:</h6>
            <p className="mb-4 d-flex">
              <span className="item">User Experience (UX)</span>
              <span className="item">User Interface (UI)</span>
              <span className="item">Branding</span>
              <span className="item">Web & App Design</span>
              <span className="item">Print Marketing</span>
              <span className="item">Collateral</span>
            </p>
            <h6>Education:</h6>
            <div className="item mb-4">
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
            <h6>Software:</h6>
            <p className="mb-4 d-flex">
              <span className="item">Adobe Illustrator</span>
              <span className="item">Adobe Photoshop</span>
              <span className="item">Adobe XD</span>
              <span className="item">Figma</span>
              <span className="item">Adobe InDesign</span>
              <span className="item">Adobe Premiere Pro</span>
            </p>
            <h6>Stack:</h6>
            <p className="mb-4 d-flex">
              <span className="item">HTML</span>
              <span className="item">CSS</span>
              <span className="item">Javascript</span>
              <span className="item">React</span>
              <span className="item">React Router</span>
              <span className="item">Wordpress</span>
              <span className="item">Bootstrap</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    // <motion.div
    //   key="contact-cont"
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{ duration: 1 }}
    //   className="container"
    // >
    <div
      className="container pt-5"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1200"
    >
      <div className="row justify-content-center text-center">
        <div className="col-12 col-lg-6">
          <h1 className="gradient mb-4 smallerh1">Get in Touch</h1>
          <p className="pb-3 pb-sm-5">
            Do you have a cool project in mind, or maybe just the inklings of
            inspiration that you want to bring to life? Fill out this form with
            some details and I'll get back to you as soon as possible!
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="row g-3"
          >
            <div className="col-12">
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="inputName" className="form-label">
                Name <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                name="name"
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail" className="form-label">
                Email <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="inputEmail"
                placeholder="joan@xyz.com"
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputMessage" className="form-label">
                Message <span className="asterisk">*</span>
              </label>
              <textarea
                className="form-control"
                id="inputMessage"
                rows="7"
                placeholder="Tell me a little about your project!"
                name="message"
                required
              ></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="el-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 text-center contact-block align-self-center">
            <p>
              Or, you can contact me at: <br />
            </p>
            <a href="mailto:hello@scho.pro" className="email-big gradient">
              hello@scho.pro
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

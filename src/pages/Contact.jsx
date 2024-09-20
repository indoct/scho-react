import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      key="contact-cont"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="container pt-sm-4 pt-xxl-5 page content-page"
    >
      <div className="row justify-content-center align-items-start">
        <div className="col-12 col-md-10 col-lg-8 col-xxl-6">
          <h1 className="mb-3 smallerh1">
            <span className="gradient">Get in Touch</span>
          </h1>
          <p className="pb-2 pb-sm-4 contact-intro">
            Do you have a cool project in mind, or maybe just the inklings of
            inspiration that you want to bring to life? Put your thoughts in the
            form below and I'll get back to you as soon as possible!
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
                autoComplete="name"
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
                autoComplete="email"
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
      <div className="row justify-content-center align-items-start">
        <div className="col-12 col-md-10 col-lg-8 col-xxl-6 contact-block mt-5">
          <p className="contact-intro pb-2">
            You can also email me at: <br />
          </p>
          <a href="mailto:hello@scho.pro" className="email-big gradient">
            hello@scho.pro
          </a>
        </div>
      </div>
    </motion.div>
  );
}

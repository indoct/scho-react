export default function Contact() {
  return (
    <>
      <section class="container">
        <div class="row justify-content-center text-center mt-5">
          <div class="col-12 col-lg-6">
            <h1 class="gradient mb-4 smallerh1">Get in Touch</h1>
            <p class="pb-3 pb-sm-5">
              Do you have a cool project in mind, or maybe just the inklings of inspiration that you want to bring to life? Fill out this form with some details
              and I'll get back to you as soon as possible!
            </p>
            <form name="contact" method="POST" data-netlify="true" class="row g-3" netlify>
              <div class="col-12">
                <input type="hidden" name="form-name" value="contact" />
                <label for="inputName" class="form-label">
                  Name <span class="asterisk">*</span>
                </label>
                <input type="text" class="form-control" id="inputName" name="name" required />
              </div>
              <div class="col-12">
                <label for="inputEmail" class="form-label">
                  Email <span class="asterisk">*</span>
                </label>
                <input type="email" class="form-control" name="email" id="inputEmail" placeholder="joan@xyz.com" required />
              </div>
              <div class="col-12">
                <label for="inputMessage" class="form-label">
                  Message <span class="asterisk">*</span>
                </label>
                <textarea class="form-control" id="inputMessage" rows="7" placeholder="Tell me a little about your project!" name="message" required></textarea>
              </div>
              <div class="col-12">
                <button type="submit" class="el-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="row mt-5 justify-content-center">
          <div class="col-12 col-lg-6 text-center contact-block align-self-center">
            <p>
              Or, you can contact me at: <br />
            </p>
            <a href="mailto:hello@scho.pro" class="email-big gradient">
              hello@scho.pro
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <footer className="container-fluid mt-5">
      <section className="container">
        <div className="row footer-text align-items-center">
          <div className="col-12 col-sm-6 copyright">
            © 2024 <span className="dys">scho.</span>{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc/4.0/"
              target="_blank"
            >
              CC BY-NC 4.0
            </a>
          </div>
          <div className="col-12 col-sm-6 socials pt-2 pt-s-0">
            <ul className="footer-soc">
              <li>
                <a href="mailto:hello@scho.pro">email</a>
              </li>
              <li>
                <a href="https://github.com/indoct/" target="blank_">
                  github
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shoul" target="blank_">
                  linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}

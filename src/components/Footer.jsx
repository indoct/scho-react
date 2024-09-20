export default function Footer() {
  return (
    <footer className="container-fluid mt-5">
      <section className="container">
        <div className="row footer-text align-items-center">
          <div className="col-12 col-sm-6 copyright">
            © 2024 <span className="dys">scho.</span>{" "}
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
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}

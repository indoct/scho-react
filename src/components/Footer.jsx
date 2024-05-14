export default function Footer() {
  return (
    <footer className="container-fluid mt-5">
      <section className="container">
        <div className="row footer-text align-items-center">
          <div className="col-12 col-sm-6 copyright">
            © 2023 <span className="dys">scho.</span> All rights reserved.
          </div>
          <div className="col-12 col-sm-6 socials">
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
                <a href="mailto:hello@scho.pro">linkedin</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}

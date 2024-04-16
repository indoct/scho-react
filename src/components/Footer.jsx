import React from "react";

export default function Footer() {
  return (
    <footer className="container-fluid mt-5">
      <section className="container">
        <div className="row justify-content-between">
          <div className="col">
            © 2023 <span className="dys">scho.</span> All rights reserved.
          </div>
          <div className="col footer-soc align-self-center">
            <a href="mailto:hello@scho.pro" className="link-light">
              hello@scho.pro
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}

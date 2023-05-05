import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <section class="container">
        <div class="row justify-content-center text-center mt-5">
          <div class="col-12 col-lg-6">
            <h1 class="gradient mb-4">404</h1>
            <p class="pb-3 pb-sm-3">Unfortunately, the page you're trying to access doesn't exist.</p>
            {/* <p>
              You can let me know on the <Link to="/contact">contact page</Link>, or by sending me an email at:
              <a href="mailto:hello@scho.pro" class="gradient">
                hello@scho.pro
              </a>
            </p> */}
            <p>
              <Link to="/" className="pb-3">
                Go back to the homepage.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

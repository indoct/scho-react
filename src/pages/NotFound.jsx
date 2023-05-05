import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <section class="container">
        <div class="row justify-content-center text-center mt-5">
          <div class="col-12 col-lg-6">
            <h1 class="gradient mb-4 smallerh1">404</h1>
            <p class="pb-3 pb-sm-5">Unfortunately, the page you're trying to access doesn't exist.</p>
            <p>
              You can let me know by visiting
              <Link to="/contact">Beyond Bitesize</Link>
            </p>
            <p>
              or sending me an email at:
              <a href="mailto:hello@scho.pro" class="email-big gradient">
                hello@scho.pro
              </a>
            </p>
            <p>
              In the meantime, <Link to="/">go back to the homepage</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

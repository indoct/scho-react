import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <section class="container not-found">
        <div class="row justify-content-center text-center">
          <div class="col-12 col-lg-6">
            <h1 class="gradient mb-4">404</h1>
            <p class="pb-3 pb-sm-3">
              Unfortunately, the page you're trying to access doesn't exist.
            </p>
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

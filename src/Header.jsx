import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Robyn Spaulding
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-link active" aria-current="page">
              <Link to="/">All Posts</Link>
            </li>
            <li class="nav-link active" aria-current="new">
              <Link to="/posts/new">New Post</Link>
            </li>
            {localStorage.jwt === undefined ? (
              <>
                <li class="nav-link active" aria-current="new">
                  <Link to="/signup">Signup</Link>
                </li>
                <li class="nav-link active" aria-current="new">
                  <Link to="/login">Login</Link>
                </li>
              </>
            ) : (
              <li class="nav-link">
                <LogoutLink />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Thoughts and Things
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
              <Link to="/">
                <button type="submit" class="btn btn-light">
                  All Posts
                </button>
              </Link>
            </li>

            {localStorage.jwt === undefined ? (
              <>
                <li class="nav-link active" aria-current="new">
                  <Link to="/signup">
                    <button type="submit" class="btn btn-light">
                      Sign Up
                    </button>
                  </Link>
                </li>
                <li class="nav-link active" aria-current="new">
                  <Link to="/login">
                    <button type="submit" class="btn btn-light">
                      Login
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li class="nav-link active" aria-current="new">
                  <Link to="/posts/new">New Post</Link>
                </li>
                <li class="nav-link">
                  <LogoutLink />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

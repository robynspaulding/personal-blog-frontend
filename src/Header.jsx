import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="#signup">Signup</a> | <a href="#login">Login</a> | <a href="#">Create Post</a> |
        <a href="#posts-index">All Posts</a> | <LogoutLink />
      </nav>
    </header>
  );
}

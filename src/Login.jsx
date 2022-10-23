export function Login() {
  return (
    <form id="login">
      <h1>Login</h1>
      <div>
        Email: <input name="email" type="email" />
      </div>
      <div>
        Password: <input name="password" type="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

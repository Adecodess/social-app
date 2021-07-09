import "./login.css";

export default function Login() {
  return (
    <main className="login">
      <article className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social-App</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social-App
          </span>
        </div>
        <article className="LoginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">create new account</button>
          </div>
        </article>
      </article>
    </main>
  );
}

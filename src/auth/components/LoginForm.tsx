
export const LoginForm = () => {
  return (
    <>
      <form id="login_form" method="post" autoComplete="off">
          <h2>Login</h2>
          <div className="inputbox">
              <span>User</span>
              <input type="text" id="user" name="user" required/>
              <i></i>
          </div>
          <div className="inputbox">
              <span>Password</span>
              <input type="password" id="password" name="password" required/>
              <i></i>
          </div>
          <br/>
          <input type="submit" value="Login"/>
          
          <p className="register-link">Don't have an account? <a href="registration.html">Sign Up</a></p>
      </form>
    </>
  )
}

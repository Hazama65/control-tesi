
export const LoginForm = () => {
  return (
    <>
      <form id="login_form" method="post" autoComplete="off">
          <h2>Login</h2>
          <div className="inputbox">
              <span>Usuario</span>
              <input type="text" id="user" name="user" required/>
              <i></i>
          </div>
          <div className="inputbox">
              <span>Contraseña</span>
              <input type="password" id="password" name="password" required/>
              <i></i>
          </div>
          <br/>
          <input type="submit" value="Ingresar"/>
          
          <p className="register-link">¿No Tienes Cuenta? <a href="registration.html">Registrate</a></p>
      </form>
    </>
  )
}

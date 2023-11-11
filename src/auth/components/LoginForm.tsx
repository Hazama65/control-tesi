

export const LoginForm = () => {
  return (
    <>
        <div className="login_Body" >
            <form>
                <div className="form-group">
                    <label htmlFor="username">Usuario: </label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña: </label>
                    <input type="password" id="password" name="password" />
                </div>
            </form>
        </div>
        <div className="login_footer">

            <button >Iniciar Sesión</button>
        </div>
    </>
  )
}

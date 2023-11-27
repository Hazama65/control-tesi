import {Link} from 'react-router-dom'


export const RegisterForm = () => {
    return (
        <>
            <form action="/process_registration" method="post">
                <h2>Registration Form</h2>

                <div className="inputbox">
                    <span>Nombre</span>
                    <input type="text" id="first_name" name="first_name" required/>
                    <i></i>
                </div>

                <div className="inputbox">
                    <span>Apellido Paterno</span>
                    <input type="text" id="last_name" name="last_name" required/>
                    <i></i>
                </div>

                <div className="inputbox">
                    <span>Apellido Materno</span>
                    <input type="text" id="middle_name" name="middle_name" required/>
                    <i></i>
                </div>

                <div className="inputbox">
                    <span>Correo Electronico</span>
                    <input type="email" id="email" name="email" required/>
                    <i></i>
                </div>

                <div className="inputbox">
                    <span>Contraseña</span>
                    <input type="password" id="password" name="password" required/>
                    <i></i>
                </div>

                <div className="inputbox">
                    <span>Matricula</span>
                    <input type="text" id="registration_number" name="registration_number" required/>
                    <i></i>
                </div>

                <input type="submit" value="Registrate"/>

                <div className="register-link">
                    <p>¿Ya tienes Cuenta? <Link to={'/Login'}>Ingresa</Link></p>
                </div>
            </form>
        </>
    )
}


export const RegisterForm = () => {
    return (
        <>
            <form action="/process_registration" method="post">
                <h2>Registration Form</h2>

                <div className="inputbox">
                    <span>First Name</span>
                    <input type="text" id="first_name" name="first_name" required/>
                    <i></i>
                </div>

                <div className="inputbox">
                    <span>Last Name</span>
                    <input type="text" id="last_name" name="last_name" required/>
                    <i></i>
                </div>

                <div className="inputbox">
                    <span>Middle Name</span>
                    <input type="text" id="middle_name" name="middle_name" required/>
                    <i></i>
                </div>

                <div className="inputbox">
                    <span>Email</span>
                    <input type="email" id="email" name="email" required/>
                    <i></i>
                </div>

                <div className="inputbox">
                    <span>Password</span>
                    <input type="password" id="password" name="password" required/>
                    <i></i>
                </div>

                <div className="inputbox">
                    <span>Registration Number</span>
                    <input type="text" id="registration_number" name="registration_number" required/>
                    <i></i>
                </div>

                <input type="submit" value="Register"/>

                <div className="register-link">
                    <p>Already have an account? <a href="#">Log in</a></p>
                </div>
            </form>
        </>
    )
}

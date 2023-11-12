import { LoginForm } from "../components/LoginForm"
import { LoginImg } from "../components/LoginImg"
import '../styles/LoginStyles.css'

export const LoginPage = () => {
    return (
        <>
            <div className="box">
                <LoginImg/>
                <LoginForm/>
            </div>
        </>
    ) 
}

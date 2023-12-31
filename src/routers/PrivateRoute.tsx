import { Navigate } from "react-router-dom"

interface Props {
    isAuth: boolean;
    children: React.ReactNode
}

export const PrivateRoute = ({isAuth, children}:Props) => {
   

  return isAuth
    ? children 
    : <Navigate to="/auth/login"/>
}
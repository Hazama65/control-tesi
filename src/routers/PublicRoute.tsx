import { Navigate } from "react-router-dom"

interface Props {
    isAuth: boolean;
    children: React.ReactNode
}

export const PublicRoute = ({isAuth,children}: Props) => {
    
    return isAuth  
      ? <Navigate to="/dashboard"/>
      : children
}
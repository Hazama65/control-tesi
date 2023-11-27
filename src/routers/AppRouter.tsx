import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { ControlRouter } from './ControlRouter';
import { useAuthStore } from '../hooks/useAuth';
import { useSelector } from 'react-redux';
import { UserStateProps } from '../store/interfaces/interfaces';



export const AppRouter = () => {
    // const dispatch = useDispatch();

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const {checkAuth} = useAuthStore()
    const {status} = useSelector( (state: UserStateProps) => state.user );

    useEffect(() => {
        checkAuth()
        if(status ==='active'){
            setIsLoggedIn(true)
        }
        if(status ==='inactive'){
            setIsLoggedIn(false)
        }

    }, [status]);

    if(status === 'checking'){
        return (
            <h1>Espere...</h1>
        )
    }
    

    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/auth/*" element={
                    <PublicRoute isAuth={isLoggedIn}>
                        <AuthRouter/>

                    </PublicRoute>
                    }
                />
            
                <Route 
                
                    path="/*"
                    element={
                        <PrivateRoute isAuth={isLoggedIn}>
                            <ControlRouter />
                        </PrivateRoute>
                    }
                />  
        
            </Routes>

            
        </BrowserRouter>
        
    )
}
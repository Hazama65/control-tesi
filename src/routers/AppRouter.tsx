import { createBrowserRouter } from 'react-router-dom';
import { RegisterPage } from '../auth/pages/RegisterPage';
import { LoginPage } from '../auth/pages/LoginPage';
import { Root } from '../Root';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: 'Login',
                element: <LoginPage />
            },
            {
                path: 'Register',
                element: <RegisterPage />
            }
        ],
        errorElement: <h1>Error</h1>
    }
]);

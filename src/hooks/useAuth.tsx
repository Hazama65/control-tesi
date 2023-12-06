import { useDispatch } from "react-redux";
import { User, clearErrorMessage, onChecking, onLogin, onLogout } from "../store/user/userSlice";
import controlApi from "../config/controlApi";
import { RegisterProps } from "../auth/interfaces/auth.interface";

interface LoginProps {
    email: string;
    password: string;
}


interface UserResponse {
    user: User,
    token: string;
  }

export const useAuthStore = () => {

    const dispatch = useDispatch();

    const startLogin = async ( values: LoginProps) => {
        dispatch(onChecking())
        try{
          const {data} = await controlApi.post<UserResponse>('/auth/login', {email: values.email, password: values.password});
          localStorage.setItem('token', data.token);
    
          dispatch( onLogin(data.user) )
    
        }catch(error){
    
          dispatch( onLogout('Credenciales incorrectas') );
          console.log(error);
          dispatch( clearErrorMessage() );
        }
    
    }

    const checkAuth = async () => {

      try{
        const token = localStorage.getItem('token');
        if(!token) {
          return dispatch( onLogout('Cerrando Sesion') )
        }
        const {data} = await controlApi.get('/auth/renew');
        dispatch(onLogin(data.user));
        

      }catch(error){
          dispatch( onLogout('Usuario no autenticado') );
          console.log(error);
          dispatch( clearErrorMessage() );
      }
    }

    const startRegister = async (values: RegisterProps) => {
      dispatch(onChecking())
      try {

        const {first_name,middle_name,last_name,email,registration_number,password,career:id_degree} = values


        const {data} = await controlApi.post('/auth/register',{
          name_user: first_name,
          last_name: last_name,
          middle_name: middle_name,
          email: email,
          register_number: registration_number,
          password: password,
          id_degree: id_degree
        });
        localStorage.setItem('token', data.token);

        dispatch( onLogin( data.user) )

      } catch (error) {
        
        dispatch( onLogout ('Credenciales Incorrectas') );
        console.log(error);
        dispatch(clearErrorMessage() );
      }
    }

    return {
        startRegister,
        startLogin,
        checkAuth
    }

}
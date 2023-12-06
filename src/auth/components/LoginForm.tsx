import {Link} from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from './formik/MyTextInput';
import { useAuthStore } from '../../hooks/useAuth';



const initialValues ={
  email: '', 
  password: ''
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('El Email no es valido').required('El Email es Requerido'),
  password: Yup.string().required('Contraseña Requerida') 
});

interface LoginProps {
  email: string;
  password: string;
}


export const LoginForm = () => {

  const { startLogin } = useAuthStore();

  // const {user, status} = useSelector( (state: StateProps) => state.user )
  
  const onSubmit = async (values: LoginProps ) =>{
    
    startLogin(values);

  }

  return (
    <>
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
    >
      {
        ()=>(
          <Form >
            <h2>Login</h2>
          
              <MyTextInput 
                label={'Email'} 
                name={'email'} 
                id="email" 
                required
              />

              <MyTextInput 
                label={'Ingresa tu contraseña'} 
                name={'password'} 
                id="password" 
                required
              />

            {/* <br /> */}
            <input type="submit" value="Ingresar" />

            <p className="register-link">
              ¿No Tienes Cuenta? <Link to={'/auth/register'}>Registrate</Link>
            </p>


          </Form>
        )
      }

    </Formik>

    </>
  )
}

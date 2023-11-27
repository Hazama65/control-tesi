import {Link} from 'react-router-dom';
import { Formik,Field,FormikHelpers,ErrorMessage } from 'formik';
import * as Yup from 'yup';


const initialValues ={
  email: '', 
  password: ''
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('El Email no es valido').required('El Email es Requerido'),
  password: Yup.string().required('Contraseña Requerida') 
});

const onSubmit = (values: typeof initialValues,{setFieldError}:FormikHelpers<typeof initialValues>) =>{
  console.log('values', values),
  setFieldError('password','Contraseña incorrecta');
  // resetForm();
}
export const LoginForm = () => {
  return (
    <>
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
    >
      {({handleSubmit})=>(
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="inputbox">
            <span>Email</span>
            <Field name="email" type="text" id="email" required />
            <i></i>
          </div>
            <ErrorMessage name="email" component="div" className="error-message" />
          <div className="inputbox">
            <span>Contraseña</span>
            <Field type="password" id="password" name="password" required />
            <i></i>
          </div>
            <ErrorMessage name="password" component="div" className="error-message" />
          <br />
          <input type="submit" value="Ingresar" />

          <p className="register-link">
            ¿No Tienes Cuenta? <Link to={'/'}>Registrate</Link>
          </p>
        </form>
      )}

    </Formik>

    </>
  )
}

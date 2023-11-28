import {Link} from 'react-router-dom';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from './formik/MyTextInput';
import { MySelect } from './formik/MySelect';



const initialValues = {
    first_name:'',
    last_name: '',
    middle_name: '',
    email: '',
    password: '',
    registration_number: '',
    career: ''
}

const RegisterSchema = Yup.object().shape({
    first_name: Yup.string().required('Nombre Requerido'),
    last_name: Yup.string().required('Apellido Paterno Requerido'),
    middle_name: Yup.string().required('Apellido Materno Requerido'),
    email: Yup.string().email('El Email no es Valido').required('El Email es Requerido'),
    password: Yup.string().required('Contraseña Requerida'),
    registration_number: Yup.number().required('Matricula Requerida'),
    career:Yup.string().notOneOf(['Seleccione'],'Esta Opcion no es Permitida').required('Carrera Requerida')
})

export const RegisterForm = () => {


    const onSubmit = (values:any) => {
        console.log(values);
        // Aquí puedes realizar la lógica para enviar los datos al servidor, etc.
    };

    
    
    return (
        <>
        <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={onSubmit}
        >
            {
                ()=>(
                    <Form>
                        <h2>Registration Form</h2>

                        <MyTextInput
                            label={'Nombre'}
                            name={'first_name'}
                            id="first_name"
                            required
                        />

                        <MyTextInput
                            label={'Apellido Paterno'}
                            name={'last_name'}
                            id="last_name"
                            required
                        />

                        <MyTextInput
                            label={'Apellido Materno'}
                            name={'middle_name'}
                            id="middle_name"
                            required
                        />

                        <MyTextInput
                            label={'Email'}
                            name={'email'}
                            id="email"
                            required
                        />
                        
                        <MyTextInput
                            label={'Contraseña'}
                            name={'password'}
                            id="password"
                            required
                        />

                        <MySelect
                            label={'Carrera'}
                            name={'career'}
                        >
                            <option value="Seleccione">Seleccione</option>
                            <option value="Ingenieria en Sistemas Computacionales">Ingeniería en Sistemas Computacionales</option>
                            <option value="Ingenieria Ambiental">Ingeniería Ambiental</option>
                            <option value="Ingenieria Electronica">Ingeniería Electrónica</option>
                            <option value="Ingenieria Biomedica">Ingeniería Biomédica</option>
                            <option value="Ingenieria Informatica">Ingeniería Informática</option>
                            <option value="Licenciatura en Administración">Licenciatura en Administración</option>
                            <option value="Arquitectura">Arquitectura</option>
                        </MySelect>
                        

                        <input type="submit" value="Registrate" />

                        <div className="register-link">
                            <p>¿Ya tienes Cuenta? <Link to={'/auth/login'}>Ingresa</Link></p>
                        </div> 

                    </Form>
                )
            }

        </Formik>

        </>
    )
}

import {Link} from 'react-router-dom';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from './formik/MyTextInput';
import { MySelect } from './formik/MySelect';
import { useEffect, useState } from 'react';
import controlApi from '../../config/controlApi';
import { RegisterProps } from '../interfaces/auth.interface';
import { useAuthStore } from '../../hooks/useAuth';



const initialRegisterValues = {
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
    registration_number: Yup.string().min(9,'La matricula debe tener 9 caracteres').required('Matricula Requerida'),
    career:Yup.string().notOneOf(['Seleccione'],'Esta Opcion no es Permitida').required('Carrera Requerida')
})

interface DegreesProps {
    degree: string;
    id_degree: number;

}

const initialStateDegrees: DegreesProps = {
    degree: '',
    id_degree: 0
}

export const RegisterForm = () => {

    const [degrees, setDegrees] =  useState<DegreesProps[]>([initialStateDegrees])

    const {startRegister} = useAuthStore();

    const onSubmit = (values:RegisterProps) => {
        startRegister(values);
    };

    useEffect(() => {
        
        controlApi.get('/degrees')
            .then((response) => setDegrees(response.data))
            .catch(error => console.error(error));
    
        
    }, [])
    

    
    return (
        <>
        <Formik
        initialValues={initialRegisterValues}
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
                        <MyTextInput
                            label={'Matricula'}
                            name={'registration_number'}
                            id="registration_number"
                            required
                        />

                        <MySelect
                            label={'Carrera'}
                            name={'career'}
                        >
                            <option value="Seleccione">Seleccione</option>
                            {
                                (degrees) && degrees.map( degree => (

                                    <option key={degree.degree} value={degree.id_degree}>{degree.degree}</option>
                                ))
                            }
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

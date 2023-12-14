import '../styles/dashboard.css';
import { Formik, Form } from 'formik';
import { Dashboard } from '../components/Dashboard'
import * as Yup from 'yup';
import { MySelect } from '../../auth/components/formik/MySelect';
import { useEffect, useState } from 'react';
import controlApi from '../../config/controlApi';
import { TableAdmin } from '../components/TableAdmin';

const initialRegisterValues = {
    semestre: '',
    periodo: '',
}

const RegisterSchema = Yup.object().shape({
    semestre:Yup.string().notOneOf(['Seleccione'],'Esta Opcion no es Permitida'),
    periodo:Yup.string().notOneOf(['Seleccione'],'Esta Opcion no es Permitida').required('Periodo Requerido')
})


interface stateRegisterTypes {
    
    id_register_type: number;
    register_type: string;
}

interface usersProps {
    id_user: number;
    register_number: string;
}


interface ValuesForm {
    semestre: string;
    periodo: string;
}

export const DashboardAdmin = () => {
    const [registro, setTipoRegistro] = useState<stateRegisterTypes[]>();
    const [selectedRegisterType, setSelectedRegisterType] = useState<number | null>(null);
    const [dataUser, setDataUser] = useState<any>([]);
    const [inscrito, setInscribir] = useState<any>([]);


    const [user, setUser] = useState<usersProps[]>();
    const [registerUser, setRegisterUser] = useState(false);

    useEffect(() => {
        // Realizar la segunda petición HTTP solo si se ha seleccionado un tipo de registro
        if (selectedRegisterType !== null) {
            setUser([]);
            controlApi.get<usersProps[]>(`/admin/user?id=${selectedRegisterType}`)
                .then(({data}) =>{
                    setUser(data)
                });
        }
    }, [selectedRegisterType]);

    useEffect(() => {
      
        controlApi.get<stateRegisterTypes[]>('/admin/registertypes')
            .then(({data}) =>{
                setTipoRegistro(data)
            });


    }, [])


    const onSubmit = async (values: ValuesForm) => {
        setDataUser([])
        let data = {
            id_user: values.periodo
        }

        try{
            const resp = await controlApi.post('/admin/getallbyuser',data)
            const isRegister = await controlApi.post('/admin/isregister', data);
            setInscribir(isRegister.data)
            setRegisterUser(true);
            setDataUser(resp.data)
        }catch(err){
            console.log(err);
        }
    }

  return (
    <>
    <Dashboard>
                <>
                    <div className='cardBox'>
                        <div className='card'>
                            <div>
                                <div className='title'>Proceso de aceptación de documentos para inscripción</div>
                                <div className='cardName'>
                                    ADMINISTRADOR
                                </div>
                                <div className="cardName">
                                En esta página, como administrador, serás responsable de gestionar y procesar los documentos de inscripción y reinscripción. 
                                En la sección inferior, encontrarás una tabla donde los usuarios cargarán sus documentos. 
                                Si alguno de los documentos no cumple con los requisitos o no está correctamente elaborado, tendrás la tarea de revisarlos. 
                                En caso necesario, podrás devolverlos a los usuarios para que realicen la carga nuevamente. Para obtener detalles adicionales sobre cada documento solicitado, 
                                puedes consultar nuestra página principal. Si tienes alguna pregunta o inquietud, no dudes en comunicarte con el equipo de soporte..
                                </div>
                            </div>
                        </div>
                    </div>
                            <div className='container-form-inscription'>

                                <Formik
                                    initialValues={initialRegisterValues}
                                    validationSchema={RegisterSchema}
                                    onSubmit={onSubmit}
                                >
                                    {
                                        ()=>(
                                            <Form>
                                                <h2 style={{marginBottom: '20px'}}>Formulario de Reinscripción</h2>

                                                <div className="select-container">
                                                    <MySelect
                                                        label={'Tipo de registro'}
                                                        name="registro"
                                                        onChange={(event) => {
                                                            setSelectedRegisterType(Number(event.target.value));
                                                        }}
                                                    >
                                                        <option value="Seleccione">Seleccione</option>
                                                        {
                                                            (registro) && registro.map( values => (
                                                                <option key={values.id_register_type} value={values.id_register_type}>{values.register_type}</option>

                                                            ))
                                                        }
                                                    
                                                    </MySelect>

                                                    <MySelect
                                                            label={'Periodo'}
                                                            name="periodo"
                                                            
                                                        >
                                                    
                                                        <option value="Seleccione">Seleccione Matrícula</option>
                                                        {
                                                            (user) && user.map( values => (
                                                                <option key={values.id_user} value={values.id_user}>{values.register_number}</option>

                                                            ))
                                                        }
                                                    </MySelect>
                                                </div>
                                                
                                                    

                                                <input type="submit" className="custom-submit-button" value="Buscar Alumno" />

                                        
                                                </Form>
                                            )
                                        }

                                </Formik>
                            </div>
                        
                    
                    
                    {
                        (registerUser) && (
                            // <></>
                            <TableAdmin data={dataUser} inscrito={inscrito} />
                        )
                    }
                </>
        </Dashboard>

    
</>
  )
}

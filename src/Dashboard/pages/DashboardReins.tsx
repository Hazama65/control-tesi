import { Dashboard } from "../components/Dashboard"
import '../styles/dashboard.css';
import { TablesReins } from "../components/TableReins";
import { useEffect, useState } from "react";
import controlApi from "../../config/controlApi";
import * as Yup from 'yup';
import { Form, Formik } from "formik";
import { MySelect } from "../../auth/components/formik/MySelect";

const initialRegisterValues = {
    semestre: '',
    periodo: '',
}

const RegisterSchema = Yup.object().shape({
    semestre:Yup.string().notOneOf(['Seleccione'],'Esta Opcion no es Permitida').required('Semestre Requerido'),
    periodo:Yup.string().notOneOf(['Seleccione'],'Esta Opcion no es Permitida').required('Periodo Requerido')
})


interface stateSemesters {
    
    id_semester: number;
    semester_name: string;
}

interface statePeriods {
    
    id_period: number;
    period_name: string;
}


interface ValuesForm {
    semestre: string;
    periodo: string;
}


export const DashboardReins = () => {
    const [semester, setSemester] = useState<stateSemesters[]>();
    const [periods, setPeriod] = useState<statePeriods[]>();
    const [registerUser, setRegisterUser] = useState(false);


    useEffect(() => {
      
        controlApi.get<stateSemesters[]>('/semesters')
            .then(({data}) =>{
                setSemester(data)
            });

        controlApi.get<statePeriods[]>('/periods')
            .then(({data}) =>{
                setPeriod(data)
            });

    }, [])

    useEffect(() => {
        controlApi.get('/registerUsers/single?id=2')
            .then(() =>{
                setRegisterUser(true);
            })
            .catch(()=> {
                setRegisterUser(false)
            });
    },[])
    
    
    const onSubmit = async (values: ValuesForm) => {
        let data = {
            id_register_type: 2,
            id_semester: +values.semestre,
            id_period: +values.periodo
        }

        try{
            await controlApi.post('/registerUsers',data)
            setRegisterUser(true);

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
                                    <div className='title'>Reinscripción</div>
                                    <div className='cardName'>
                                        ¡Bienvenido!
                                    </div>
                                    <div className="cardName">
                                    En esta página podrás realizar tu proceso de inscripción. En la parte de abajo contarás con una tabla, 
                                    en la cual podrás subir tus documentos. Si alguno de tus documentos no se encuentra en orden o no está 
                                    realizado de la forma correcta, serán devueltos por el administrador para que vuelvas a realizar la carga. 
                                    Si tienes alguna duda, recuerda que puedes volver a visitar nuestra página principal para conocer todos 
                                    los detalles de cada uno de los documentos solicitados.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            (!registerUser) && (
                                <div className='container-form-inscription'>

                                    <Formik
                                        initialValues={initialRegisterValues}
                                        validationSchema={RegisterSchema}
                                        onSubmit={onSubmit}
                                    >
                                        {
                                            ()=>(
                                                <Form>
                                                    <h2 style={{marginBottom: '20px'}}>Formulario de Reinscripcion</h2>

                                                    <div className="select-container">
                                                        <MySelect
                                                            label={'Semestre'}
                                                            name="semestre"
                                                                
                                                        >
                                                            <option value="Seleccione">Seleccione</option>
                                                            {
                                                                (semester) && semester.map( values => (
                                                                    <option key={values.id_semester} value={values.id_semester}>{values.semester_name}</option>

                                                                ))
                                                            }
                                                        
                                                        </MySelect>

                                                        <MySelect
                                                                label={'Periodo'}
                                                                name="periodo"
                                                                
                                                            >
                                                        
                                                            <option value="Seleccione">Seleccione</option>
                                                            {
                                                                (periods) && periods.map( values => (
                                                                    <option key={values.id_period} value={values.id_period}>{values.period_name}</option>

                                                                ))
                                                            }
                                                        </MySelect>
                                                    </div>
                                                    
                                                        

                                                    <input type="submit" className="custom-submit-button" value="Comenzar inscripcion" />

                                            
                                                    </Form>
                                                )
                                            }

                                    </Formik>
                                </div>
                            )
                        }
                        
                        {
                            (registerUser) && (

                                <TablesReins/>
                            )
                        }
                    </>
            </Dashboard>

        
    </>
  )
}

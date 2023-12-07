import { IoHandLeftSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Dashboard } from '../components/Dashboard';
import ContainerInfo from '../components/ContainerInfo';
import '../styles/dashboard.css';

export const DashboardPage = () => {

    return (
        <>
            <Dashboard>
                <div>

                    <CardHeader />

                    <div className='process-span'>
                        <span>Procesos</span>
                    </div>

                    <ContentInscription />

                    <ContentReinscription />
                </div>
            </Dashboard>
        </>
    );
};


const CardHeader = () => {
    return (
        <div className='cardBox'>
            <div className='card'>
                <div>
                    <div className='title'>Descripción</div>
                    <div className='cardName'>
                        ¡Bienvenido a la plataforma educativa del Tecnológico de Estudios Superiores de Ixtapaluca (TESI)!
                    </div>
                    <div className="cardName">
                        Nuestra aplicación escolar está diseñada para hacer que tu experiencia académica sea más sencilla y eficiente. Entendemos que los trámites escolares pueden ser un proceso complicado, por lo que hemos creado esta herramienta para facilitar la inscripción y reinscripción, simplificando cada paso del camino.
                    </div>
                </div>
                <div className='iconBx'>
                    <IoHandLeftSharp />
                </div>
            </div>
        </div>
    )
}

const ContentInscription = () => {
    return (
        <ContainerInfo
            title='Inscripción'
            content={
                <>
                    <div className="Info">
                        <div className='InfoColumns'>
                            <div className="text">

                                <h1>Documentos Requeridos</h1>

                                <div className="text">
                                    <ul>
                                        <li>Relación de materias factibles a cursar.</li>
                                        <li>Formato original de Aceptación de Normatividad.</li>
                                        <li>Generar los formatos de pago por los conceptos enlistados con los datos correspondientes,
                                            en la página del Servicio al Contribuyente. <br />
                                            Línea de captura y comprobante de pago que debe cubrir:
                                            <ul>
                                                <li>Cuota semestral $ 3302.00 pesos</li>
                                                <li>Inscripción semestral $ 185.12 pesos.</li>
                                                <li>Seguro anual contra accidentes escolares $104.00</li>
                                            </ul>
                                        </li>
                                        <li>Original del certificado médico expedido por una institución del gobierno del sector salud. (IMSS, ISSSTE, ISSEMYM, ISEM, cruz Roja, DIF).</li>
                                        <li>Formato original de protesta institucional SGl-FO-IN-04. </li>
                                        <li>Formato original del estudio socioeconómico SGl-FO-IN-02. </li>
                                        <li>2 Copias de la Vigencia IMSS anotando matrícula y carrera.</li>
                                        <li>Copia del certificado de bachillerato u original de la constancia de estudios actualizada.</li>
                                        <li>Copia del comprobante de domicilio no mayor a 3 meses.</li>
                                        <li>Copia de la credencial de elector (INE), si es menor de edad debe presentar copia de la credencial del bachillerato por ambos lados, o la copia de recibo del INE donde indica que está en trámite dicho documento.</li>
                                        <li>Copia del CURP actualizado.</li>
                                        <li>Copia del acta de nacimiento certificada.</li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="Info">
                        <div className="InfoColumns">
                            <div className="text">
                                <h1>Enlaces</h1>

                                <h3>Documenctación solicitada</h3>
                                <Link to="https://tesi.org.mx/servicios_escolares.html" target="_blank">
                                    <button>
                                        Servicios Escolares
                                    </button>
                                </Link>
                                <h6>
                                    (Aqui puedes encontrar los documentos de:
                                    Relación de materias factibles,
                                    Formato de aceptación de normatividad,
                                    Formato original de protesta institucional SGl-FO-IN-04,
                                    Formato original del estudio socioeconómico SGl-FO-IN-02.)
                                </h6>

                                <h3>Pagos</h3>
                                <Link to="https://sfpya.edomexico.gob.mx/recaudacion/" target="_blank">
                                    <button>
                                        Portal de Servicios al Contribuyente
                                    </button>
                                </Link>
                                <h6>
                                    (Aqui puedes realizar los pagos correspondientes de:
                                    Cuota semestral,
                                    Inscripción semestral,
                                    Seguro anual contra accidentes escolares.)
                                </h6>
                            </div>
                        </div>
                    </div>
                </>
            }
        />
    )
}

const ContentReinscription = () => {
    return (
        <ContainerInfo
            title='Reinscripción'
            content={
                <>
                <div className="Info">
                    <div className="InfoColumns">
                        <div className="text">
                            <h1>Documentos Requeridos</h1>
                            <div className="text">
                                <ul>
                                    <li>Kardex.</li>
                                    <li>Boleta de Calificaciones</li>
                                    <ul>
                                        <li>La boleta debe de contener la leyende de: 'Recibo de Conformida', junto con nombre, fecha de reinscripción y firma del estudiante</li>
                                    </ul>
                                    <li>Relación de materias factibles a cursar.</li>
                                    <li>Generar los formatos de pago por los conceptos enlistados con los datos correspondientes,
                                        en la página del Servicio al Contribuyente. <br />
                                        Línea de captura y comprobante de pago que debe cubrir:
                                        <ul>
                                            <li>Cuota semestral $ 3302.00 pesos</li>
                                            <li>Inscripción semestral $ 185.12 pesos.</li>
                                            <li>Seguro anual contra accidentes escolares $104.00</li>
                                            <li>Pago de Recurses (En caso de ser necesario)</li>
                                        </ul>
                                    </li>
                                    <li>De ser el caso, sera requerido el descuento de Cuota semestral.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Info">
                    <div className="InfoColumns">
                        <div className="text">
                            <h1>Enlaces</h1>

                            <h3>Boleta/Kardex</h3>
                            <Link to="https://controlescolartesi.net/" target="_blank">
                                <button>
                                    Control Escolar Tesi
                                </button>
                            </Link>
                            <h6>
                                (Aqui puedes encontrar los documentos de:
                                Kardex y Boleta.)
                            </h6>

                            <h3>Documenctación solicitada</h3>
                            <Link to="https://tesi.org.mx/servicios_escolares.html" target="_blank">
                                <button>
                                    Servicios Escolares
                                </button>
                            </Link>
                            <h6>
                                (Aqui puedes encontrar los documentos de:
                                Relación de materias factibles,
                                Formato de descuento de Cuota Semestral.)
                            </h6>

                            <h3>Pagos</h3>
                            <Link to="https://sfpya.edomexico.gob.mx/recaudacion/" target="_blank">
                                <button>
                                    Portal de Servicios al Contribuyente
                                </button>
                            </Link>
                            <h6>
                                (Aqui puedes realizar los pagos correspondientes de:
                                Cuota semestral,
                                Inscripción semestral,
                                Seguro anual contra accidentes escolares,
                                Recurses.)
                            </h6>
                        </div>
                    </div>
                </div>
                </>
            }
        />
    )
}
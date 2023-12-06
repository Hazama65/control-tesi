import { Dashboard } from "../components/Dashboard"
import '../styles/dashboard.css';
import { TablesIns } from "../components/Tables";


export const DashboardReins = () => {
  return (
    <>
        <Dashboard >
                <>
                    <div className='cardBox'>
                        <div className='card'>
                            <div>
                                <div className='title'>Reinscripción</div>
                                <div className='cardName'>
                                    ¡Bienvenido!
                                </div>
                                <div className="cardName">
                                En esta página podrás realizar tu proceso de reinscripción. En la parte de abajo contarás con una tabla, 
                                en la cual podrás subir tus documentos. Si alguno de tus documentos no se encuentra en orden o no está 
                                realizado de la forma correcta, serán devueltos por el administrador para que vuelvas a realizar la carga. 
                                Si tienes alguna duda, recuerda que puedes volver a visitar nuestra página principal para conocer todos 
                                los detalles de cada uno de los documentos solicitados.
                                </div>
                            </div>
                        </div>
                    </div>
                    <TablesIns/>
                </>
        </Dashboard>

        
    </>
  )
}

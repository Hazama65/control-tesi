
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import { useRegister } from "../../hooks/useRegister";
import controlApi from "../../config/controlApi";


export const TablesReins = () => {
  
  const [fileData, setFileData] = useState<any>({});

  const { getDataReinscription, dataDocumentReinscription } = useRegister()
  
  useEffect(() => {
    
    getDataReinscription();
   
  }, []);
  
  
  const columns = [
    {
      name: 'Tipo de documento',
      selector: (row: any) => row.document_type,
      sortable: true
    },
    {
      name: 'Estatus',
      selector: (row: any) => row.document_status
    },
    {
      name: 'Subir Archivos',
      cell: (row: any) => {
        const showUploadButton = row.document_status !== 'Sin estatus';
        return (
        <div className="custom-file-input">
          <input
            type="file"
            id={`fileInput_${row.id_document_type}`}
            onChange={(e) => handleFileChange(row.id_document_type, e.target.files)}
            />
          {(!showUploadButton) ? (
            <>
            <label className="upload-btn" htmlFor={`fileInput_${row.id_document_type}`}>
              Seleccionar Archivo
            </label>
            <button style={{marginLeft: '10px'}} className="upload-btn" onClick={() => handleUpload(row.id_document_type)}>Upload</button>
            </>
          ):
          (<>--</>)
        }
        </div>
      )},
      sortable: false
    }
  ];

  const handleFileChange = (id: any, files: any) => {
    setFileData((prevData: any) => ({
      ...prevData,
      [id]: files
    }));
  };

  const handleUpload = (id: string) => {
    const files = fileData[id];
    // Realizar la lógica de carga de archivos aquí con el ID y los archivos correspondientes
    const formData = new FormData();
    formData.append('id_document_type', id);
    formData.append('file', files[0]);
    formData.append('id_register_type', '2');

    controlApi.post('/documentUser/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then( () => {
        getDataReinscription()
    } )


    // Puedes limpiar el estado después de cargar el archivo si es necesario
    setFileData((prevData: any) => ({
      ...prevData,
      [id]: null
    }));
  };


  return (
    <div className='container-tabla'>

      <div className='search-container'>
        <div className='relative'>
          <h2>Carga de documentos para Reinscripcion</h2>
        </div>
      </div>

      <div className='container-table-data'>
        <DataTable
          columns={columns}
          data={dataDocumentReinscription}
          pagination
        >

        </DataTable>
      </div>
  
    </div>
  )
}


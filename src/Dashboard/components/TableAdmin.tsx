
import DataTable from "react-data-table-component"
import controlApi from "../../config/controlApi";



export const TableAdmin = ({data,inscrito}: any) => {

  
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
      name: 'Alumno',
      selector: (row: any) => row.name_user
    },
    {
      name: 'Ver archivo',
      cell: (row: any) => {
        return (
        <div className="custom-file-input">
    
              <button style={{marginLeft: '10px'}} className="ver-btn" onClick={() => handleSearch( row.path_document)}>Ver Documento</button>

        </div>
      )},
      sortable: false
    },
    {
      name: 'Aprobar Archivo',
      cell: (row: any) => {
        const showUploadButton = row.document_status == 'pending';
        return (
        <div className="custom-file-input">
    
           {
            (showUploadButton)&& (

              <button style={{marginLeft: '10px'}} className="upload-btn" onClick={() => handleUpload(row.id_document)}>Confirmar</button>
            )
           }
           

        </div>
      )},
      sortable: false
    }
  ];


  const handleUpload = async (id: string) => {
    const data = {
      id_document: id,
    }
    await controlApi.put('/admin/update', data);

   
  };

  const handleSearch = async (path: string) => {

    const resp = await controlApi.get(`/admin/document?path=${path}`);
    const url = `${resp.config.baseURL}${resp.config.url}`
       
    // Abre una nueva ventana y pasa la URL de la imagen como parámetro
    openNewPage(url);
  }

  return (
    <div className='container-tabla'>

      <div className='search-container'>
        <div className='relative'>
          <h2>Aprobar documentos {(inscrito.length === 0) && <span style={{color: 'green'}}>INSCRITO</span>} </h2>
        </div>
      </div>

      <div className='container-table-data'>
        <DataTable
          columns={columns}
          data={data}
          pagination
        >

        </DataTable>
      </div>
  
    </div>
  )
}


const openNewPage = (fileUrl: string) => {
  const fileExtension = fileUrl.split('.').pop()?.toLowerCase();

  // Abre una nueva ventana en blanco
  const newWindow = window.open();

  // Escribe el contenido HTML en la nueva ventana
  newWindow!.document.write(`
    <html>
      <head>
        <title>Documento</title>
      </head>
      <body>
        ${
          fileExtension === 'pdf'
            ? `<embed src="${fileUrl}" type="application/pdf" width="100%" height="100%">`
            : `<img src="${fileUrl}" alt="Documento" style="max-width: 100%; max-height: 100%;">`
        }
      </body>
    </html>
  `);
};

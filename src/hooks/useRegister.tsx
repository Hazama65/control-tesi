import { useState } from "react";
import controlApi from "../config/controlApi";





export const useRegister = () => {

  const [dataDocument, setDataDocument] = useState([]);
  const [dataDocumentReinscription, setDataDocumentResincription] = useState([]);


  const getData = async () => {

        const data = await controlApi.get('/documentTypes/inscription');

        const dataRegister = await controlApi.get('/documentUser/documentsIns');

        const newData = data.data.map((documento:{[key: string]: any}) => {
            const matchingDocument = dataRegister.data.find((register: {[key: string]: any}) => register.id_document_type === documento.id_document_type);
            
            return {
                ...documento,
                document_status: matchingDocument ? matchingDocument.document_status : 'Sin estatus',
            };
        });
        
        setDataDocument(newData);
  }

  const getDataReinscription = async () => {

    const data = await controlApi.get('/documentTypes/reinscription');

    const dataRegister = await controlApi.get('/documentUser/documentsReins');

    const newData = data.data.map((documento:{[key: string]: any}) => {
        const matchingDocument = dataRegister.data.find((register: {[key: string]: any}) => register.id_document_type === documento.id_document_type);
        
        return {
            ...documento,
            document_status: matchingDocument ? matchingDocument.document_status : 'Sin estatus',
        };
    });
    
    setDataDocumentResincription(newData);
}


  return { getData, dataDocument, dataDocumentReinscription, getDataReinscription };
    
}

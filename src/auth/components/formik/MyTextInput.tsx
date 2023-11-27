import { ErrorMessage, useField } from "formik"


interface InputProps {
    label: string,
    name: string,
    type?: 'text'| 'email' | 'password',
    placeholder?: string;
    [key: string]: any,
}


export const MyTextInput = ({label, ...props}: InputProps) => {

    const [field] = useField( props );
  return (
    <> 
        <div className="inputbox">
            <span>{label}</span>
            <input {...field} {...props} />
            <i></i> 
           
        </div>
        <ErrorMessage name={props.name} component="div" className="error-message" />
    </>
  )
}

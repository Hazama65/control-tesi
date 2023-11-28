import { ErrorMessage, useField } from "formik";

interface Props{
    label :string;
    name :string;
    placeholder? :string;
    [x:string]:any;
}

export const MySelect = ({label,...props}:Props) => {

    const [field] =useField(props);


    return (
        <>
        <div className="select-option">
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field}{...props} required/>
            <i></i>
        </div>
            <ErrorMessage name={props.name} component="div" className="error-message"/>
        </>
    )
}

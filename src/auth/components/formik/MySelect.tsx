import { ErrorMessage, useField } from "formik";
import { ChangeEvent } from "react";

interface Props{
    label :string;
    name :string;
    placeholder? :string;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
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

import React from 'react';
import classes from './FormControls.module.css';
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";

type FromControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl:React.FC<FromControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error: '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea:React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    )
}

export const Input:React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}
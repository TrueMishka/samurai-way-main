import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "componets/common/FormsContorls/FormsControls";
import {required} from "utils/validators/validators";
import {connect} from "react-redux";
import {login} from "redux/auth-reducer";
import {AppStateType} from "redux/redux-store";
import {Redirect} from "react-router-dom";
import classes from './Login.module.scss';
import classesFormControls from '../../componets/common/FormsContorls/FormControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit, error} = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'}
                       component={'input'}/> remember me
            </div>
            {error &&
                <div className={classesFormControls.formSummaryError}>
                    {error}
                </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

type LoginFromDataType = MapStatePropsType & {
    login: (email: string, password: string, rememberMe: boolean) => void
}

const Login: React.FC<LoginFromDataType> = ({login, isAuth}) => {
    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className={classes.wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

type MapStatePropsType = { isAuth: boolean }
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)
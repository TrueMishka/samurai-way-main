import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props: any) => {
    const { handleSubmit } = props
      return (
          <form onSubmit={handleSubmit}>
              <div>
                  <Field  placeholder={'Login'} name={'login'} component={'input'}/>
              </div>
              <div>
                  <Field  placeholder={'Password'} name={'password'} component={'input'}/>
              </div>
              <div>
                  <Field  type={'checkbox'} name={'remember me'} component={'input'}/> remember me
              </div>
              <div>
                  <button>Login</button>
              </div>
          </form>
      )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)


export const Login = () => {

    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}
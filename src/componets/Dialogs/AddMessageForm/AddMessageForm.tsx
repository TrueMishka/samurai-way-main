import {maxLengthCreator, required} from "utils/validators/validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "componets/common/FormsContorls/FormsControls";

export type AddMessageFormType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newMessageBody'}
                       placeholder={'Enter your message'}
                       validate={[required, maxLength50]}
                />
            </div>
            <button>add</button>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)
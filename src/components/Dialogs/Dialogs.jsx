import React, { useState } from 'react';
import s from './Dialogs.module.css';
import { AiOutlineUserAdd, AiOutlineCheck } from 'react-icons/ai'
import {Navigate} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../common/FormsControls/FormsControls';
import { requiredField, maxLengthCreator } from '../Utils/Validators/validators';
import { Button } from '../common/FormsControls/FormsControls';


const Dialogs = (props) => {

    const addNewDialogForm = (values) => {
        props.addNewDialog(values.newDialogBody)
    }

    return (
        <div className={s.dialogs}>
            {props.dialogsEl}
            <div>
                <AddNewDialogFormRedux onSubmit={addNewDialogForm}/>
            </div>

        </div>
    );
};




const maxLength10 = maxLengthCreator(10);


const AddNewDialogForm = (props) => {
    return (
        <form className={s.newMessBox} onSubmit={props.handleSubmit}>
            <Field component={TextArea} name={'newDialogBody'} placeholder={'enter person name'} validate={[requiredField, maxLength10]}/>
            <div>
                <Field component={Button}>Add new dialog</Field>
            </div>
        </form>
    )
}


const AddNewDialogFormRedux = reduxForm({form: 'addNewDialogForm'}) (AddNewDialogForm)


export default Dialogs;
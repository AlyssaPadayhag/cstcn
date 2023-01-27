import styles from '../styles/Forms.module.scss';
import { useState, useCallback } from "react";
import FormInput from './FormInput';
import FormOutput from './FormOutput';
import FormNotes from './FormNotes';

const initialState = {
    account: "",
    name: "",
    email: "",
    system: "",
    view: "",
    year: "",
    return: "",
    state: "",
    form: "",
    clientId: "",
};

function FormsScreen() {

    const [info, setInfo] = useState(initialState);

    const handleFormSubmit = (data) => {
        setInfo(data);
        console.log(data);
    };

    const handleFormChange = useCallback(
        (value, name) => {
            setInfo({ ...info, [name]: value[name] });
        },
        [info]
    );

    return (
        <div className={styles.forms}>
            <FormInput handleFormSubmit={handleFormSubmit} handleFormChange={handleFormChange} />
            <FormOutput info={info} />
            <FormNotes />
        </div>
    );
}

export default FormsScreen;
import styles from '../styles/Forms.module.scss';
import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import FormInput from './FormInput';
import FormOutput from './FormOutput';

const initialState = {
    account: 0,
    name: "first name"
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
        </div>
    )
}

export default FormsScreen;
import styles from '../styles/Forms.module.scss';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

function FormInput({ handleFormSubmit, handleFormChange }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            console.log(value, name);
            handleFormChange(value, name);
        });
        return () => subscription.unsubscribe
    })

    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <label htmlFor='account'>Account Number: </label>
                <input id='account' {...register('account')} />
                <label htmlFor='name'>Name: </label>
                <input id='name' {...register('name')} />
            </form>
        </div>
    );
}

export default FormInput;
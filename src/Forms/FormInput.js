import styles from '../styles/Forms.module.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

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
            <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.input}>
                <div className={styles.group}>
                    <label htmlFor='account'>Account Number: </label>
                    <input id='account' {...register('account')} />
                </div>
                <div className={styles.group}>
                    <label htmlFor='name'>Name: </label>
                    <input id='name' {...register('name')} />
                </div>
                <div className={styles.group}>
                    <label htmlFor='email'>Verified Email? </label>
                    <input id='email' {...register('email')} />
                </div>
                <div className={styles.group}>
                    <label htmlFor='system'>System: </label>
                    <input id='system' {...register('system')} />
                </div>
                <div className={styles.group}>
                    <label htmlFor='view'>View: </label>
                    <input id='view' {...register('view')} />
                </div>
                <div className={styles.group}>
                    <label htmlFor='year'>Year: </label>
                    <input id='year' {...register('year')} />
                </div>
                <div className={styles.group}>
                    <label htmlFor='return-type'>Return Type: </label>
                    <input id='return-type' {...register('return')} />
                </div>
                <div className={styles.group}>
                    <label htmlFor='state'>State: </label>
                    <input id='state' {...register('state')} />
                </div>
                <div className={styles.group}>
                    <label htmlFor='form-type'>Form(s): </label>
                    <input id='form-type' {...register('form')} />
                </div>
                <div className={styles.group}>
                    <label htmlFor='client-id'>Client ID: </label>
                    <input id='client-id' {...register('clientId')} />
                </div>
            </form>
        </div>
    );
}

export default FormInput;
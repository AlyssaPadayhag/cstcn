import styles from '../styles/Forms.module.scss';


function FormOutput({ info }) {

    return (
        <div>
            <div className={styles.output}>
                <p onClick={() =>  navigator.clipboard.writeText(info.account)}>Account number: {info.account}</p>
                <p onClick={() =>  navigator.clipboard.writeText(info.name)}>Name: {info.name}</p>
                <p onClick={() =>  navigator.clipboard.writeText(info.email)}>Verified Email? {info.email}</p>
                <p onClick={() =>  navigator.clipboard.writeText(info.system)}>System: {info.system}</p>
                <p onClick={() =>  navigator.clipboard.writeText(info.view)}>View: {info.view}</p>
                <p onClick={() =>  navigator.clipboard.writeText(info.year)}>Year: {info.year}</p>
                <p onClick={() =>  navigator.clipboard.writeText(info.return)}>Return Type: {info.return}</p>
                <p onClick={() =>  navigator.clipboard.writeText(info.state)}>State: {info.state}</p>
                <p onClick={() =>  navigator.clipboard.writeText(info.form)}>Form(s): {info.form}</p>
                <p onClick={() =>  navigator.clipboard.writeText(info.clientId)}>Client ID: {info.clientId}</p>
            </div>
        </div>
    )
}

export default FormOutput;
function FormOutput({ info }) {
    return (
        <div>
            <h1>Form Output</h1> 
            <p>Account number: {info.account}</p>
            <p>Verified Email? {info.email}</p>
            <p>System: {info.system}</p>
            <p>View: {info.view}</p>
            <p>Year: {info.year}</p>
            <p>Return Type: {info.return}</p>
            <p>State: {info.state}</p>
            <p>Form(s): {info.form}</p>
            <p>Client ID: {info.clientId}</p>
        </div>
    )
}

export default FormOutput;
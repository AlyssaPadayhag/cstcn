function FormOutput({ info }) {
    return (
        <div>
            <p>Account number: {info.account}</p>
            <p>Name: {info.name}</p>
        </div>
    )
}

export default FormOutput;
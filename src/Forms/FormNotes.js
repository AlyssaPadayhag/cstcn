import React from 'react';
import styles from '../styles/Forms.module.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function FormNotes() {

    const [value, setValue] = React.useState('');
    const [copied, setCopied] = React.useState(false);
    const onChange = React.useCallback(({target: {value}}) => {
      setValue(value);
      setCopied(true);
    }, [])
    const onClick = React.useCallback(({target: {innerText}}) => {
      console.log(`Clicked on "${innerText}"!`);
    }, [])
    const onCopy = React.useCallback(() => {
      setCopied(true);
    }, [])

    return (
        <div>
            <div className={styles.notes}>
                <div>
            <CopyToClipboard onCopy={onCopy} text={value}>
                <button> Copy Notes </button>
            </CopyToClipboard>
                </div>
            <textarea onChange={onChange} rows={2} cols={10} value={value} />
        </div>
        
        <h3>Box 3</h3>
        </div>

    );
}

export default FormNotes;
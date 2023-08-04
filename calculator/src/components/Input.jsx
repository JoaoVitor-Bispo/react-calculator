import styles from './Input.module.css'

function Input({result}) {
    return (
        <div className={styles.divInput}>
            <input type="text"  className='input' value={result.join('')}/>
        </div>
    )
}

export default Input;
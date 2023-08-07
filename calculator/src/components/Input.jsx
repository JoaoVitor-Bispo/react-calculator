import styles from './Input.module.css'

function Input({result, theme}) {
    return (
        <div className={styles.divInput} id={styles[theme]}>
            <input type="text"  className='input' value={result.join('')}/>
        </div>
    )
}

export default Input;
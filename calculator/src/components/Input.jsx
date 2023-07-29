import styles from './Input.module.css'
import Calculator from './Calculator';

function Input({value}) {
    const array = []
    console.log(value)
    return (
        <div className={styles.divInput}>
            <input type="number" className='input'/>
            { 
                value ?? (
                    document.querySelector('.input').value = value.join('')
                )
            }
        </div>
    )
}

export default Input;
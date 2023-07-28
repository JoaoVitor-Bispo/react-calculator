import styles from './Input.module.css'
import Calculator from './Calculator';

function Input({value}) {
    console.log(value)
    return (
        <div className={styles.divInput}>
            <input type="number" value="0" className='input'/>
            {
                document.querySelector('.input').innerHTML += value
            }
        </div>
    )
}

export default Input;
import styles from './Input.module.css'
import ReceiveNum from './ReceiveNum'

function Input(param) {

    return (
        <div className={styles.inputContainer}>
            <input type="number"/>
        </div>
    )
}
export default Input

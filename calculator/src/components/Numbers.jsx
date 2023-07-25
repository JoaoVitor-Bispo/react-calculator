import styles from  './Numbers.module.css';
import ReceiveNum from './ReceiveNum.js'

function Numbers() {

    const setNum = (num) => {
        <ReceiveNum param={num}/>
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '/', '*', '.', '=']

    return (
        <div className={styles.numbSection}>
            {numbers.map((element, index) => (
                
                <div onClick={setNum(element)} key={index}>{element}</div>
            ))}
        </div>
    )
}
export default Numbers;
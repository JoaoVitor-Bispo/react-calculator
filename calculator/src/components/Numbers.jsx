import styles from './Number.module.css'
import Calculator from './Calculator';
import { useState } from 'react';

function Number({teste}) {
    const areaButtons = [1, 2, 3, 'x', 4, 5, 6, '+', 7, 8, 9, '-', 0, '.', '/', '*', '=', 'C']
    const [clicked, setClicked] = useState([])
    const array = []

    const setNum = (e) => {
        array.push(e.target.innerHTML)
        setClicked((array) => [...array, e.target.innerHTML])
    }

    return (
        <div>
            {
                clicked.length > 0 ? (
                        <Calculator expression={clicked} theme={teste}/>
                ) : (
                    <Calculator expression={'0'} theme={teste}/>
                )
        }
            <div className={styles['div'+teste]} id={styles.divNums}>
                {
                    areaButtons.map((element, index) => (
                        <div onClick={setNum} key={index} className={`${styles['num'+index]}`} id={`${'num'+index}`}>{element}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Number;
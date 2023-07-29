import styles from './Number.module.css'
import Calculator from './Calculator';
import { useState } from 'react';
import ReceiveNum from './ReceiveNum';
import Input from './Input';

function Number() {
    
    const areaButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '.', '=']
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
                    <Input value={clicked}/>
                ) : (
                    <Input value={'0'}/>
                )
        }
            <div className={styles.divNums}>
                {
                    areaButtons.map((element, index) => (
                        <div onClick={setNum} key={index}>{element}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Number;
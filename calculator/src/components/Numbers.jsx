import styles from './Number.module.css'
import Calculator from './Calculator';
import { useState } from 'react';
import ReceiveNum from './ReceiveNum';
import Input from './Input';

function Number() {
    
    const areaButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '.', '=']
    const [clicked, setClicked] = useState([])

    const setNum = (e) => {
        setClicked(e.target.innerHTML)
    }


    return (
        <div>
            {
                clicked ? (
                    <Input value={clicked}/>
                ) : (
                    setClicked(0)
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
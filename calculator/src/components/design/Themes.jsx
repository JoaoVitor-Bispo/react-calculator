import { useState } from "react"
import Number from "../Numbers"
import styles from './Themes.module.css'

function Themes(color) {
    const [Theme, setTheme] = useState('blue')
    const [order, setOrder] = useState(2)

    const themes = [
        {
            index: 1,
            design: 'blue',
            bg: '#3A4764'
        },
        {
            index: 2,
            design: 'white',
            bg: '#E6E6E6'
        },
        {
            index: 3,
            design: 'purple',
            bg: '#250a44'
        }
    ]
    const defColor = (e) => {
        setOrder(order + 1)
        if(order > 2) {
            setOrder(1)
        }

        themes.map((element, index) => {
            if(element.index == order) {
                setTheme(element.design)
                document.documentElement.style.backgroundColor = element.bg
            }
        })

    }
    return (
        <div className={styles.container} id={styles['div'+Theme]}>
            <div className={styles.div1}>
                <h1>Calc</h1>
                <div className={styles.themecontain}>
                    <label htmlFor={Theme}>THEME</label>
                    <input type="button" className={styles.input} name={Theme} id={styles[Theme]} onClick={defColor} value={order}/>
                </div>
            </div>
            <Number teste={Theme}/>
        </div>
    )
}
export default Themes
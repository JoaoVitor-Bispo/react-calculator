import { useState } from "react"
import Number from "../Numbers"
import styles from './Themes.module.css'

function Themes(color) {
    const [Theme, setTheme] = useState('blue')
    const [order, setOrder] = useState(1)
    

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
        console.log(e.target.value)
        themes.map((element, index) => {
            if(element.index == e.target.value) {
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
                    <div className={styles.input} id={styles[Theme]}>
                            <input type="radio" name="inputs" className={styles.radios} id={styles.radio1} value='1' onClick={defColor} checked/>
                            <label htmlFor="radio1"></label>

                            <input type="radio" name="inputs" className={styles.radios} id={styles.radio2} value='2' onClick={defColor}/>
                            <label htmlFor="radio2"></label>

                            <input type="radio" name="inputs" className={styles.radios} id={styles.radio3} value='3' onClick={defColor}/>
                        <label htmlFor="radio3"></label>
                    </div>
                </div>
            </div>
            <Number teste={Theme}/>
        </div>
    )
}
export default Themes
import { useState } from "react"
import Number from "../Numbers"
import styles from './Themes.module.css'

function Themes(color) {

    const [Theme, setTheme] = useState('blue')

    window.onload = e => document.documentElement.style.backgroundColor = '#3A4764'
    
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
        const selected = e.target;

        [...document.querySelectorAll('button')].map((element, index) => {
            if(selected == element) {
                selected.style.backgroundColor = 'red'

                if(selected.value == 3) {
                    selected.style.backgroundColor = '#00E0D1'
                }
                return false
            }
            element.style.backgroundColor = 'transparent'
        })

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
                <h1>calc</h1>
                <div className={styles.themecontain}>
                    <label htmlFor={Theme}>THEME</label>
                    <div>
                        <span>1</span><span>2</span><span>3</span>
                        <div className={styles.input} id={styles[Theme]}>
                                <button type="radio"className={styles.radio1} id="radio1" value='1' onClick={defColor}></button>
                                <button type="radio"className={styles.radio2} id="radio2" value='2' onClick={defColor}></button>
                                <button type="radio" name="inputs" className={styles.radio3} id="radio3" value='3' onClick={defColor}></button>
                        </div>
                    </div>
                </div>
            </div>
            <Number teste={Theme}/>
        </div>
    )
}
export default Themes
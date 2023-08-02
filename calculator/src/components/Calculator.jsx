import Input from "./Input";
import { useState } from "react";

function Calculator({expression}) {

    const [resolved, setResolved] = useState([])
    const array = []

    for(let c in expression) {
        array.push(expression[c])
        if(expression[c] == '=' || expression[c] == 'C' || expression[c] == 'x') {
            array.pop()
            switch(expression[c]) {
                case '=':
                    const calc = eval(array.join(''))
                    array.splice(0, array.length)
                    array.push(calc)
                    break

                    case 'x':
                        array.pop()
                        break

                case 'C':
                    array.splice(0, array.length)
                    break
            }
        }
    }
        console.log(array)
    return (
        <div>
            <Input value={array}/>
        </div>
    )
}
export default Calculator;
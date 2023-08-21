import Input from "./Input";

function Calculator({expression, theme}) {

    const array = []

    for(let c in expression) {
        array.push(expression[c])

        if(expression[c] === '=' || expression[c] === 'C' || expression[c] === 'x') {
            array.pop()
            
            switch(expression[c]) {
                case '=':
                    let calc = 0

                    try {
                        calc = eval(array.join(''))

                    }
                    catch {
                        calc = undefined
                    }
                    finally {
                        array.splice(0, array.length)
                        array.push(calc)
                    }
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
    return (
        <>
            <Input result={array} theme={theme}/>
        </>
    )
}
export default Calculator;
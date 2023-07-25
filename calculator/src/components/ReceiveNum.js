import { useState } from "react";
import Input from "./Input";

function ReceiveNum(param){
    const [clicked, setClicked] = useState(0)
    setClicked(param);
    <Input param={clicked}/> 
}
export default ReceiveNum;
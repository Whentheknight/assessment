import { numToWord } from "../utils/numberToWord";
import {useState} from 'react';
import '../css/Converter.css';

const Converter = () =>{
    const [error, setError] = useState("");
    const [converted, setConverted] = useState("");

    function translate(event){
        let num = event.target.value;

        try{
            setError("")
            setConverted(convert(num))
            
        } catch(error){
            setConverted("")
            setError(getErrorMsg(error))
        }
    } 

    return(
        <div className="card">
        <div className="converterDiv">
            <h1>Type in a number:</h1>
            <input className="input" defaultValue="0" min={0} onChange={translate} type="number"></input> 
            </div>

            <div className="messages">
                {error ? <span id="error">{error}</span> : null}
            {converted ? <span id="converted">{converted}</span> : null}
            
        </div></div>)
}

export default Converter;

//If number conversion can happen without an error
function convert(num) {
    let numInt = parseInt(num);

    return numToWord(numInt);
}

//If error was thrown when conversion happened
function getErrorMsg(e) {
    return e.toString().replace('Error: ', '');
}

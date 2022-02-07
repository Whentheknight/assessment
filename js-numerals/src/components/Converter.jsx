import { numToWord } from "../utils/numberToWord";

const Converter = () =>{

    function translate(){
        let error = document.getElementById("error");
        let converted = document.getElementById("converted");
        let num = document.querySelector('.input').value;
        

        try{
            let numInt = parseInt(num);

            error.textContent = "";
            converted.textContent = numToWord(numInt);
            
        } catch(e){
            converted.textContent = "";
            error.textContent = e.toString().replace('Error: ', '');
            error.style.color = "red";
        }
    } 

    return(
        <div className="converterDiv">
            <h1>Type in a number:</h1>
            <input className="input" defaultValue="0" min={0} onChange={translate} type="number"></input>
            <span id="error"></span>
            <span id="converted"></span>
        </div>)
}

export default Converter;
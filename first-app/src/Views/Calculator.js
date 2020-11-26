import React, { useState } from 'react';
function BoildVerdict(props) {
    if(props.temperature > 99) {
        return (
            <p>The water boils.</p>
        )
    } else{
        return (
            <p>The water doesn't boil.</p>
        )
    }
}


function Calculator() {
    const [temperature, setTemperature] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setTemperature(e.target.value);
      }
    
      let temp = temperature;
    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">Calculator</h1>
            <p>
                Celsius-Fahrenheit calculator
            </p>
            <fieldset>
                <legend>The temperature of the water is: </legend>
                <input
                style={{border: "1px solid black"}} 
                value={temp}
                onChange={(e) => handleChange(e)} />
            </fieldset>
            <BoildVerdict temperature={temp}></BoildVerdict>
        </div>
    );
}

export default Calculator;
import React, { useState } from 'react';



function Calculator() {
    const [state, setState] = useState({ 
        temperature: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        setState({temperature: e.target.value});
      }

      const temperature = state.temperature;
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
                value={temperature}
                onChange={() => handleChange()} />
            </fieldset>
        </div>
    );
}

export default Calculator;
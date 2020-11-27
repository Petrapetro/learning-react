import React, { useState } from 'react';

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    if (celsius < -273.15) return '.';
    return (celsius * 9) / 5 + 32;
}

function kelvinToCelsius(kelvin) {
    if (kelvin < 0) return '.';
  return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    if (kelvin < 0) return '.';
  return (kelvin - 273.15) * (9 / 5) + 32;
}

function celsiusToKelvin(celsius) {
    if (celsius < -273.15) return '.';
  return celsius + 273.15;;
} 

function fahrenheitToKelvin(fahrenheit) {
    if (fahrenheit < -459.68) return '.';
    return (fahrenheit + 459.67) * (5 / 9);;
}

function BoildVerdict(props) {
    let temp;
    if (props.scale === "f") {
        temp = toCelsius(props.temperature)
    } else if (props.scale === "k") {
        temp = kelvinToCelsius(props.temperature)
    } else if (props.scale === "c") {
        temp = props.temperature
    }
        if (temp > 99) {
            return (
                <p style={{ color: "red" }}>The water boils.</p>
            )
        } else if (temp > 0) {
            return (
                <p style={{ color: "green" }}>The water doesn't boil and doesn't freeze.</p>
            )
        } else {
            return (
                <p style={{ color: "blue" }}>The water freezes.</p>
            )
        }
    }

function TemperatureInput(props) {
    let temp = props.temperature;

    function handleChange(e) {
        props.onTemperatureChange(e);
    }

    return (
        <fieldset>
            <legend>{props.scaleNames}:</legend>
            <input
                style={{ border: "1px solid black" }}
                value={temp}
                onChange={(e) => handleChange(e)}
            />
        </fieldset>
    )
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    return Math.round(output * 1000) / 1000;
}

function Calculator() {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleChangeCels = (e) => {
        setTemperature(e.target.value);
        setScale('c');
      
    }

    const handleChangeFahr = (e) => {
        setTemperature(e.target.value);
        setScale('f');
       
    }

    const handleChangeKelv = (e) => {
        setTemperature(e.target.value);
        setScale('k');
    }
    
    const fahr =
        scale === 'c'
        ? tryConvert(temperature, toFahrenheit)
        : scale === 'k'
        ? tryConvert(temperature, kelvinToFahrenheit) : temperature;
    const cels =
        scale === 'k'
        ? tryConvert(temperature, kelvinToCelsius)
        : scale === 'f'
        ? tryConvert(temperature, toCelsius) : temperature;
    const kelv =
        scale === 'f'
        ? tryConvert(temperature, fahrenheitToKelvin)
        : scale === 'c'
        ? tryConvert(temperature, celsiusToKelvin) : temperature;

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">Calculator</h1>
            <p>Add the temperature of water in diverse scales and you can see its state.</p>

            <TemperatureInput 
            temperature={cels} 
            scaleNames={"celsius"} 
            onTemperatureChange={(e) => handleChangeCels(e)} />

            <TemperatureInput 
            temperature={fahr} 
            scaleNames={"fahrenheit"} 
            onTemperatureChange={(e) => handleChangeFahr(e)} />

            <TemperatureInput 
            temperature={kelv} 
            scaleNames={"kelvin"} 
            onTemperatureChange={(e) => handleChangeKelv(e)} />

            <br />
            <BoildVerdict temperature={temperature} scale={scale}></BoildVerdict>
        </div>
    );
}

export default Calculator;
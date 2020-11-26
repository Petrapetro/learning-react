import React, { useState } from 'react';

function BoildVerdict(props) {
    if (props.temperature > 99) {
        return (
            <p style={{ color: "red" }}>The water boils.</p>
        )
    } else if (props.temperature > 0) {
        return (
            <p style={{ color: "green" }}>The water doesn't boil and doesn't freeze.</p>
        )
    } else {
        return (
            <p style={{ color: "blue" }}>The water freezes.</p>
        )
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function TemperatureInput(props) {
    /*const [temperature, setTemperature] = useState({
        temperature: props.temp
    });*/

    let temp = props.temperature;

    function handleChange(e) {
        props.onTemperatureChange(e);
    }

    return (
        <fieldset>
            <legend>The temperature of the water is in {props.scaleNames}:</legend>
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
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator() {
    const [temperature, setTemperature] = useState(1);
    const [scale, setScale] = useState('c');

    const handleChangeCels = (e) => {
        setTemperature(e.target.value);
        setScale('c');
        e.preventDefault();
    }

    const handleChangeFahr = (e) => {
        setTemperature(e.target.value);
        setScale('f');
        e.preventDefault();
    }

    const cels = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahr = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">Calculator</h1>
            <p>
                Celsius-Fahrenheit calculator
            </p>
            <TemperatureInput temperature={cels} scaleNames={"celsius"} onTemperatureChange={(e) => handleChangeCels(e)} />
            <TemperatureInput temperature={fahr} scaleNames={"fahrenheit"} onTemperatureChange={(e) => handleChangeFahr(e)} />
            <br />
            <BoildVerdict temperature={temperature}></BoildVerdict>
        </div>
    );
}

export default Calculator;
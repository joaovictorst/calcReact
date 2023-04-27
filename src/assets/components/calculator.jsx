import React from "react";
import "./calculator.css";
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { useState } from 'react';

export default function Calculator() {
    const [number, setNumber] = useState(0);

    function inputNum(e){
        const value = e.target.value
        if(number === 0){
            setNumber(value)
        }else{
            setNumber(number + value)
        };
    };

    function clear(){
        setNumber(0)
    };

    function invert(){
       setNumber(number * (-1))
    }

    function percentage(){
        setNumber(number/100)
    }

    function comma(){
        setNumber(number + '.')
    }

    function multiply(){
        setNumber(number + '*')
    }

    function subtract(){
        setNumber(number + '-')
    }
    
    function sum(){
        setNumber(number + '+')
    }

    function equal(){
        let string = number.toString()
        let result = eval(string)
        setNumber(result)

    }

    return(
        <div>
            <Box m='5'>{number}</Box>
            <Container maxWidth='xs'>
                <div className="wrapper">
                    <button onClick={clear}>AC</button>
                    <button onClick={invert}>+/-</button>
                    <button onClick={percentage}>%</button>
                    <button className="orange">÷</button>

                    <button onClick={inputNum} value={7}>7</button>
                    <button onClick={inputNum} value={8}>8</button>
                    <button onClick={inputNum} value={9}>9</button>
                    <button className="orange" onClick={multiply}>x</button>

                    <button onClick={inputNum} value={4}>4</button>
                    <button onClick={inputNum} value={5}>5</button>
                    <button onClick={inputNum} value={6}>6</button>
                    <button className="orange" onClick={subtract}>-</button>
                    
                    <button onClick={inputNum} value={1}>1</button>
                    <button onClick={inputNum} value={2}>2</button>
                    <button onClick={inputNum} value={3}>3</button>
                    <button className="orange" onClick={sum}>+</button>

                    <button className="zero" onClick={inputNum} value={0}>0</button>
                    <button onClick={comma}>.</button>
                    <button className="orange" onClick={equal}>=</button>
                </div>
            </Container>
        </div>
    )
}



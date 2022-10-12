import React from 'react'
import { useState } from 'react';
import './Accordion.css'
export default function Accordion(props) {
    const [displayValue, setdisplayValue] = useState('none');
    const changeDisplay =()=>{
        var d = displayValue === 'none' ? 'block' : 'none'
        setdisplayValue(d);
    }
    return (
        <div>
            <button className='Accordion_title' onClick={changeDisplay}>
                <div>{props.title}</div>
                <div className= {displayValue == 'block' ? 'rotate' : 'none'}>{'>'}</div>
            </button>
            <div className='Accordion_description' style={{display : displayValue}}>
                {props.description}
            </div>
        </div>
    )
}

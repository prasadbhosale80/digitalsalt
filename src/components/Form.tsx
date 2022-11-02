import React, { useState } from 'react'
import './styles/Form.css';
import Button from './UI/Button';

const Form = (props: any) => {
    const [inputValue, setInputValue] = useState<any>("");
    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    }
    const handleClick = () => {
        props.onClick(inputValue);
        setInputValue("")
    }
    return (
        <div className='form-container' >
            <input placeholder={props.placeholder} className='input' type={'text'} onChange={handleChange} value={inputValue} />
            <Button onClick={handleClick} >{props.buttonName}</Button>
        </div>
    )
}

export default Form
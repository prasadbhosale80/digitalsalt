import React from 'react'
import '../styles/Form.css'

const Button = (props: any) => {
    const handleClick=()=>{
        props.onClick()
    }
    return (
        <div onClick={handleClick} className='button' >{props.children}</div>
    )
}

export default Button
import React, { useState } from 'react'
import Form from './Form'
import Toast from './UI/Toast';

const ComponentTwo = () => {
    const [toasts, setToasts] = useState<any>([]);

    const handleClick = (value: string) => {
        if (!!value) {
            const addTost = [...toasts];
            addTost.unshift({ id: Math.random(), msg: value });
            setToasts(addTost);
        }
    }

    return (
        <div>
            <Form onClick={handleClick} buttonName={"Submit"} placeholder={'Enter Seconds'} />
            <Toast toastlist={toasts} setList={setToasts} />
        </div>
    )
}

export default ComponentTwo
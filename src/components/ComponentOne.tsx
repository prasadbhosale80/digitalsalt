import React, { useState } from 'react'
import Button from './UI/Button';
import Toast from './UI/Toast'
import './styles/Component.css'

const ComponentOne = () => {
    const [toasts, setToasts] = useState<any>([]);
    const [index, setIndex] = useState(0)
    const allToasts = [
        { id: 1, msg: "hello world toast 1" },
        { id: 2, msg: "hello world toast 2" },
        { id: 3, msg: "hello world toast 3" },
        { id: 4, msg: "hello world toast 4" },
        { id: 5, msg: "hello world toast 5" },
        { id: 6, msg: "hello world toast 6" },
    ]
    const handleClick = () => {
        if (index < allToasts.length) {
            const addTost = [...toasts];
            addTost.unshift(allToasts[index]);
            setIndex(index + 1)
            setToasts(addTost);
        } else {
            alert("No Tosts Available To Show")
        }

    }

    return (
        <div>
            <div className="center-btn">
                <Button onClick={handleClick} > Show Toasts </Button>
            </div>

            <Toast toastlist={toasts} setList={setToasts} />
        </div>
    )
}

export default ComponentOne
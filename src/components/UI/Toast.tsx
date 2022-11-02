import React, { useCallback, useEffect, useState } from 'react'
import '../styles/Toast.css'

const Toast = (props: any) => {
    const [isMouseIn, setIsMouseIn] = useState(false);
    const [duration, setDuration] = useState(7)
    const deleteToast = useCallback((id: any) => {
        const toastListItem = props.toastlist.filter((e: any) => e.id !== id);
        props.setList(toastListItem);
    }, [props.toastlist, props.setList]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (props.toastlist.length && !isMouseIn) {
                deleteToast(props.toastlist[0].id);
            }
        }, duration * 1000);

        return () => {
            clearInterval(interval);
        }
    }, [props.toastlist, deleteToast, isMouseIn, duration]);

    const mouseEnter = () => {
        setIsMouseIn(true)
    }
    const mouseLeave = () => {
        setIsMouseIn(false)
    }


    const TostBody = (toast: any, i: number) => {
        return <div
            key={i}
            className={`container`}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            <div>
                <p className={'msg'}>{toast.msg}</p>
            </div>
            <div className='cross' onClick={() => deleteToast(toast.id)}>X</div>

        </div>
    }


    return (

        <div className='main-container' >
            {
                props.toastlist.map((toast: any, i: number) => i + 1 < 4 ? TostBody(toast, i) : <div className="empty-box">
                    {i + 1}
                </div>)
            }
        </div>
    )
}

export default Toast
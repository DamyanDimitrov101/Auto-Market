import { useState, useEffect } from 'react';
import './Notification.css';

function Notification({ type, state, message , setStateNotification}) {

    useEffect(() => {

        // setTimeout(() => {
        //     setStateNotification('closed');
        // }, 4000);
        
    }, [state, setStateNotification]);


    const closeNotification = () => {
        setStateNotification('closed');
    }

    return (
        <div className="noti-container">
            <div className="noti-wrapper">
                <div className={`${type} ${state} notification`}>
                    <p>{message}</p>
                    <button className="close-btn" onClick={() => closeNotification()}>✖</button>
                </div>
            </div>
        </div >

    );
}

export default Notification;


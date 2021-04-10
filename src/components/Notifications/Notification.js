import { useState, useEffect, useContext } from 'react';

import notificationContext from "../../contexts/notificationContext";

import './Notification.css';

function Notification({ state, message }) {
    let [notification, dispatch] = useContext(notificationContext);

    useEffect(() => {
        
        setTimeout(() => {
            dispatch({type:'RESET'});
        }, 6000);

    }, [state,dispatch]);


    const closeNotification = () => {
        dispatch({type: 'RESET'})
    }

    return (
        <div className="noti-container">
            <div className="noti-wrapper">
                <div className={`${notification.type} ${notification.state} notification`}>
                    <p>{message}</p>
                    <button className="close-btn" onClick={() => closeNotification()}>✖</button>
                </div>
            </div>
        </div >

    );
}

export default Notification;


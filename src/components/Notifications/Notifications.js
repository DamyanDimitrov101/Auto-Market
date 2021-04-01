import { useState } from 'react';
import './Notifications.css';

function Notifications({type, message}) {
    const [notification, setNotification] = useState({type, message, state: 'opened'});

    const closeNotification = (setNotification) =>{
        setNotification({...notification, state:'closed'});
    }

    return (
        <div className="noti-container">
            <div className="noti-wrapper">
                <div className={`${type} ${notification.state} notification`}>
                    <p>{message}</p>
                    <button className="close-btn" onClick={() => closeNotification(setNotification)}>✖</button>
                </div>
            </div>
        </div >

);
}

export default Notifications;


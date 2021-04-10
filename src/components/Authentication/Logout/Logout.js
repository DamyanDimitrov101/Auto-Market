import firebase from "firebase";
import { useEffect, useContext } from 'react';
import { useHistory } from "react-router";

import userContext from "../../../contexts/userContext";
import notificationContext from "../../../contexts/notificationContext";

import './Logout.css';

function Logout() {
    let [user, setUser] = useContext(userContext);    
    let [notification, dispatch] = useContext(notificationContext);
    const history = useHistory();

    useEffect(() => {
        firebase.auth().signOut().then(() => {
              // Sign-out successful.
                setUser({uid: 101, name:'Guest', url:'', phone:''});
                history.push('/Login');
                dispatch({type:'SUCCESS', payload: `Bye!`});

            }).catch((error) => {
              // An error happened.
                console.log(error);
            });
        
    },[])


    return (
        <>
            <h2>Buy! Buy!</h2>
        </>
);
}

export default Logout;
import React, { useEffect, useState , useContext } from "react";
import { getMine, sortByPriceDescendingForMyProfile, sortByPriceAscendingForMyProfile } from "../../services/Cars-Services";


import CarsList from "../Cars/CarsList";
import ProfileInfo from "./ProfileInfo";
import Notification  from "../Notifications/Notification";
import userContext from "../../contexts/userContext";

import './MyProfile.css';
import { Link } from "react-router-dom";

function MyProfile() {

    let [user, setUser] = useContext(userContext);    
    let [cars, setCars] = useState([]);

    let [stateNotification, setStateNotification] = useState('closed');
    let [messageNotification, setMessageNotification] = useState('');
    let [typeNotification, setTypeNotification] = useState('danger');


    let [greenAsc, setGreenAsc] = useState(true);
    let [greenDesc, setGreenDesc] = useState(true);

    useEffect(() => {
        getMine(user.uid)
            .then(data => {
                console.log(data);
                return setCars(data);
            });
    }, [user.uid]);

    function sortByPriceAsc() {
        setGreenAsc(!greenAsc);

        sortByPriceAscendingForMyProfile(96)
            .then(res => {
                setCars(res);
            });
    }

    function sortByPriceDesc() {
        setGreenDesc(!greenDesc);

        sortByPriceDescendingForMyProfile(96)
            .then(res => {
                setCars(res);
            });

    }

    const showSuccesNotification = () =>{
        setStateNotification('opened');
        setMessageNotification('Success! You added new car.');
        setTypeNotification('success');
    }


    return (
        <>
            {user.uid!==101?
            // <Notification type={typeNotification} state={stateNotification} message={messageNotification} />*/}
            <main className="Main-MyProfile"> 
                <div className="MyProfile">
                    <ProfileInfo profilData={user} />
                    <CarsList cars={cars}
                        greenAsc={greenAsc}
                        greenDesc={greenDesc}
                        showSort={false}
                        sortByPriceDesc={sortByPriceDesc}
                        sortByPriceAsc={sortByPriceAsc}
                        className="Cars-CarsList" />
                </div>
            </main>
            :
            <div className="logInFirst">
                    <h1 className="logInFirst-title">Please <Link to="./Login" className="logInFirst-title-logIn">log in</Link> first <span>or</span> <Link to="./Register" className="logInFirst-title-register">create</Link> your account</h1>
            </div>    
        }
        </>
    );
}


export default MyProfile;



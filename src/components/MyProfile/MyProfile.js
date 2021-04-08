import { useEffect, useState } from "react";
import { getMine, sortByPriceDescendingForMyProfile, sortByPriceAscendingForMyProfile } from "../../services/Cars-Services";
import { getUser } from "../../services/User-Services";


import CarsList from "../Cars/CarsList";
import ProfileInfo from "./ProfileInfo";
import Notification  from "../Notifications/Notification";

import './MyProfile.css';

function MyProfile() {
    let [user, setUser] = useState({});
    let [cars, setCars] = useState([]);

    let [stateNotification, setStateNotification] = useState('closed');
    let [messageNotification, setMessageNotification] = useState('');
    let [typeNotification, setTypeNotification] = useState('danger');


    let [greenAsc, setGreenAsc] = useState(true);
    let [greenDesc, setGreenDesc] = useState(true);

    useEffect(() => {
        

        getMine(96)
            .then(data => {
                return setCars(data);
            });
    }, []);

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
            {/* <Notification type={typeNotification} state={stateNotification} message={messageNotification} />*/}
            <main className="Main-MyProfile"> 
                <div className="MyProfile">
                    <ProfileInfo profilData={user} />
                    <CarsList cars={cars}
                        greenAsc={greenAsc}
                        greenDesc={greenDesc}
                        sortByPriceDesc={sortByPriceDesc}
                        sortByPriceAsc={sortByPriceAsc}
                        className="Cars-CarsList" />
                </div>
            </main>
        </>
    );
}


export default MyProfile;



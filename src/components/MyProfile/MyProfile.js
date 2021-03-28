import { useEffect, useState } from "react";
import { getMine } from "../../services/Cars-Services";
import { getUser } from "../../services/User-Services";

import CarsList from "../Cars/CarsList";
import ProfileInfo from "./ProfileInfo";

import './MyProfile.css';

function MyProfile() {
    let [user, setUser] = useState({});
    let [cars, setCars] = useState([]);

    useEffect(() => {
        

        getMine(96)
            .then(data => {
                return setCars(data);
            });
    }, []);

    return (
        <main className="Main-MyProfile">
            <div className="MyProfile">
                <ProfileInfo />
                <CarsList cars={cars} className="Cars-CarsList" />
            </div>
        </main>
    );
}

export default MyProfile;

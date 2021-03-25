import { useEffect, useState } from "react";
import { getMine } from "../../services/Cars-Services";
import { getUser } from "../../services/User-Services";

import CarsList from "../Cars/CarsList";
import ProfileInfo from "./ProfileInfo";

import './MyOffers.css';

function MyOffers() {
    let [user, setUser] = useState({});
    let [cars, setCars] = useState([]);

    useEffect(() => {
        getUser()
            .then(data=> console.log(data));

        getMine(96)
            .then(data => {
                return setCars(data);
            });
    }, []);

    return (
        <main className="Main-MyOffers">
            <div className="MyOffers">
                <ProfileInfo />
                <CarsList cars={cars} className="Cars-CarsList" />
            </div>
        </main>
    );
}

export default MyOffers;

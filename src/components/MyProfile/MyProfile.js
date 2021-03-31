import { useEffect, useState } from "react";
import { getMine, sortByPriceDescendingForMyProfile, sortByPriceAscendingForMyProfile } from "../../services/Cars-Services";
import { getUser } from "../../services/User-Services";


import CarsList from "../Cars/CarsList";
import ProfileInfo from "./ProfileInfo";

import './MyProfile.css';

function MyProfile() {
    let [user, setUser] = useState({});
    let [cars, setCars] = useState([]);

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
            .then(res=>{
                setCars(res);
            });
    }
    
    function sortByPriceDesc () {
        setGreenDesc(!greenDesc);
    
        sortByPriceDescendingForMyProfile(96)
            .then(res=>{
                setCars(res);
            });
        
    }
   

    return (
        <main className="Main-MyProfile">
            <div className="MyProfile">
                <ProfileInfo />
                <CarsList cars={cars} 
                 greenAsc={greenAsc} 
                 greenDesc={greenDesc} 
                 sortByPriceDesc={sortByPriceDesc} 
                 sortByPriceAsc={sortByPriceAsc} 
                className="Cars-CarsList" />
            </div>
        </main>
    );
}


export default MyProfile;



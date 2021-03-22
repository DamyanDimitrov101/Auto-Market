import { useEffect, useState } from "react";
import { getMine } from "../../../services/Cars-Services";
import { getUser } from "../../../services/User-Services";


import './CreateNewCar.css';

function CreateNewCar() {
    let [user, setUser] = useState({});
    let [cars, setCars] = useState([]);

    useEffect(() => {
        getUser()
            .then(data=> console.log(data));

        getMine(96)
            .then(data => {
                console.log(data);
                return setCars(data);
            });
    }, []);

    return (
        <main className="Main-CreateNewCar">
            <div className="CreateNewCar">
                
            </div>
        </main>
    );
}

export default CreateNewCar;

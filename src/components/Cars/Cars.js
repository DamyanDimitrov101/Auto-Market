import { useState, useEffect } from "react";
import { getAll } from '../../services/Cars-Services';
import './Cars.css';

import SearchMenu from './SearchMenu';
import CarsList from './CarsList';

function Cars() {
    let [cars, setCars] = useState([]);

    useEffect(() => {
        getAll()
            .then(res => {
                return setCars(res.slice(1));
            });

    }, []);

    return (
        <main className="Main-Cars">
            <div className="Cars">
                <SearchMenu className="Cars-SearchMenu" />

                <CarsList cars={cars} className="Cars-CarsList" />
            </div>
        </main>
    );
}

export default Cars;

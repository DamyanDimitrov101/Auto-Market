import React, { Suspense, useState, useEffect } from "react";
import { getAll } from '../../services/Cars-Services';
import './Cars.css';

import SearchMenu from './SearchMenu';

function Cars() {
    const CarListLazyComponent = React.lazy(() => import('./CarsList'));
    let [cars, setCars] = useState([]);

    useEffect(() => {
        getAll()
            .then(data => {
                return setCars((data[0] != null ? data : data.slice(1)));
            });

    }, []);

    return (
        <main className="Main-Cars">
            <div className="Cars">
                <SearchMenu className="Cars-SearchMenu" />

                <Suspense fallback={<div className="Cars-CarsList-suspense-fallback">Loading ...</div>}>
                <CarListLazyComponent cars={cars} className="Cars-CarsList" />
                </Suspense>
            </div>
        </main>
    );
}

export default Cars;

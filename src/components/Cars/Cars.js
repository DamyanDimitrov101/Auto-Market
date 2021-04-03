import React, { Suspense, useState, useEffect } from "react";

import './Cars.css';

import { getFilteredCars } from '../../services/SearchMenu-Services.js';
import SearchMenu from './SearchMenu';
import { getAll, sortByPriceAscending, sortByPriceDescending } from '../../services/Cars-Services';
import { useFetch } from "../../customHooks/useFetch-Hook.js";

import api from '../../services/api';


function Cars() {
    const CarListLazyComponent = React.lazy(() => import('./CarsList'));
    let [model, setModel] = useState("");
    let [greenAsc, setGreenAsc] = useState(false);
    let [greenDesc, setGreenDesc] = useState(false);

    let [cars, setCars, isCarsLoading] = useFetch('https://auto-market-a25e4-default-rtdb.firebaseio.com/Cars.json', []);


    function MenuSearchSubmit(e) {
        e.preventDefault();
        let makeFind = e.target.make.value;
        let priceBellowFind = e.target.priceBellow.value;
        let priceAboveFind = e.target.priceAbove.value;
        let firstRegistrationFind = e.target.firstRegistration.value;
        let transmissionFind = e.target.transmission.value;
        let fuelFind = e.target.fuel.value;
        let colorFind = e.target.color.value;

        getFilteredCars(makeFind,
            model,
            priceBellowFind,
            priceAboveFind,
            firstRegistrationFind,
            transmissionFind,
            fuelFind,
            colorFind)
            .then(res => {
                    setCars(res);
            });
    }

    function sortByPriceAsc(e) {
        setGreenAsc(true);
        setGreenDesc(false);

        sortByPriceAscending()
            .then(res => {
                  setCars(res);
            });

    }

    function sortByPriceDesc(e) {
        setGreenAsc(false);
        setGreenDesc(true);

        sortByPriceDescending()
            .then(res => {
                       setCars(res);
            });

    }


    return (
        <main className="Main-Cars">
            <div className="Cars">

                <SearchMenu className="Cars-SearchMenu" onMenuSearchSubmit={MenuSearchSubmit} setModel={setModel} />

                <Suspense
                    fallback={<div className="Cars-CarsList-suspense-fallback"><h1>Loading ...</h1></div>}
                >

                    {isCarsLoading?
                        <div className="Cars-Loading spinner">
                              <div className = "head"></div>
                        </div>
                        :

                        <CarListLazyComponent
                            cars={cars}
                            //              setCars={setCars} 
                            greenAsc={greenAsc}
                            greenDesc={greenDesc}
                            sortByPriceDesc={sortByPriceDesc}
                            sortByPriceAsc={sortByPriceAsc}
                            className="Cars-CarsList"
                        />
                    }
                </Suspense>
            </div>
        </main>
    );
}

export default Cars;

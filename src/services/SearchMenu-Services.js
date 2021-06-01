import api from "./api";
import { request } from "./requestService";
//import firebase from "firebase";

export const getMakes = () => {
    // let db = firebase.database();
    // let cars = db.ref().child('Cars');
    // let query = cars
    //                 .orderByChild('make')
    //                 .equalTo('Bmw');


    // query.on('value' , snap => {
    //     snap.forEach(function(childSnapshot) {console.log(childSnapshot.val());})
    // });

    return request(api.cars)
        .then(data => {            
            let res = Object.values(data)
                .map(d => d.make);

            return [... new Set(res)];
        })
        .catch(err => {return new Error('Makes not set!')});
}

export const getModels = (make) => {
    return fetch(api.cars)
        .then(res => res.json())
        .then(data => {
            return Object.values(data)
                .filter(d => d.make === make)
                .map(d => d.model);
        })
        .catch(err => {return new Error('Models not set!')});
}

export const getColors = () => {
    return fetch(api.cars)
        .then(res => res.json())
        .then(data => {
            let res = Object.values(data)
                .map(d => d.color);

            return [... new Set(res)];

        })
        .catch(err => {return new Error('Colors not set!')});
}

export const getFilteredCars = async (
    makeFind,
    modelFind,
    priceBellow = 100000000,
    priceAbove = 0,
    firstRegistration = 1900,
    transmission = "automatic",
    fuel,
    color = "black"
) => {
    let res = await request(api.cars, 'GET');

    firstRegistration = firstRegistration === "" ? 1000 : firstRegistration;

    if (modelFind == "") {
        modelFind = "All";
    }
    return Object.keys(res)
        .map(key => ({ key, ...res[key] }))
        .filter(x => makeFind !== "All" ? x.make === makeFind : x)
        .filter(x => modelFind !== "All" ? x.model === modelFind : x)
        .filter(x => priceAbove !== "" ? x.price >= priceAbove : x)
        .filter(x => priceBellow !== "" ? x.price <= priceBellow : x)
        .filter(x => firstRegistration !== "" ? x.year >= firstRegistration : x)
        .filter(x => transmission !== "All" ? x.transmission === transmission : x)
        .filter(x => fuel !== "All" ? x.fuel.toLowerCase() === fuel.toLowerCase() : x)
        .filter(x => color !== "All" ? x.color.toLowerCase() === color.toLowerCase() : x)

    // && x.transmission === transmission
    // && x.fuel.toLowerCase() === fuel.toLowerCase()
    // && x.color.toLowerCase() === color.toLowerCase());        
}
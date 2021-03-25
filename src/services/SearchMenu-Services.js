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
                         .map(d=> d.make);

            return [... new Set(res)];
        })
        .catch(err => console.log(err));
}

export const getModels = (make) => {
    return fetch(api.cars)
        .then(res => res.json())
        .then(data => {
            return Object.values(data)
                         .filter(d=> d.make===make)
                         .map(d=> d.model);
        })
        .catch(err => console.log(err));
}
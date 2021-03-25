import api from "./api";
import { request } from "./requestService";


export const getMakes = () => {
    return fetch(api.cars)
        .then(res => res.json())
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
import api from './api';

export const getUser = () =>{
    return fetch(api.cars)
             .then(res=>res.json())
             .catch(err=> console.log(err));
}
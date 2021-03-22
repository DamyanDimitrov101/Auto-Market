import api from './api';

export const getAll = () =>{
   return fetch(api.cars)
            .then(res=>res.json())
            .catch(err=> console.log(err));
}

export const getMine = (userId) =>{
   return fetch(api.cars)
            .then(res=>res.json())
            .then(data=> { return data.slice(1).filter(car=> car.ownerId===userId)})
            .catch(err=> console.log(err));
}
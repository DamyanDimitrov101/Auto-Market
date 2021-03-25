import api from './api';
import { request } from "./requestService";

export const getAll = () => {
   return fetch(api.cars)
      .then(res => res.json())
      .then(data => Object.values(data))
      .catch(err => console.log(err));
}

export const getMine = (userId) => {
   return fetch(api.cars)
      .then(res => res.json())
      .then(data => {
         data = Object.values(data);
         return (data[0] != null ? data : data
            .slice(1))
            .filter(car => car.ownerId === userId)
      })
      .catch(err => console.log(err));
}

export const createNewCar = async (
   {
      picture,
      make,
      model,
      year,
      transmission,
      fuel,
      id,
      color,
      comment
   },
   ownerId) => {

   let res = await request(`${api.cars}`, 'POST', { picture, make, model, year, transmission, fuel, color, comment, ownerId, id });

   let name = res.name;

   res = await setNewCarId(name);
   return res;
}

async function setNewCarId (name) {   
   let res = await request(`${api.car+name+'.json'}`, 'PATCH', {id:name, returnSecureToken: true});

   return res;
}


export const getOne = (id) => {
   return fetch(api.car+id+'.json')
      .then(res => res.json())
      .then(data => {
         return data;
      })
      .catch(err => console.log(err));
}

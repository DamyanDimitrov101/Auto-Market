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
      price,
      transmission,
      fuel,
      id,
      color,
      comment
   },
   ownerId) => {

   let res = await request(`${api.cars}`, 'POST', { picture, make, price, model, year, transmission, fuel, color, comment, ownerId, id });

   let name = res.name;

   res = await setNewCarId(name);
   return res;
}

async function setNewCarId(name) {
   let res = await request(`${api.car + name + '.json'}`, 'PATCH', { id: name, returnSecureToken: true });

   return res;
}


export const getOne = (id) => {
   return fetch(api.car + id + '.json')
      .then(res => res.json())
      .then(data => {
         return data;
      })
      .catch(err => console.log(err));
}


export const sortByPriceAscending = () => {
   return fetch(api.cars)
      .then(res => res.json())
      .then(data => Object.values(data))
      .then(res => res.sort(function (a, b) {
         return a.price - b.price;
      }))
      .catch(err => console.log(err));
}

export const sortByPriceDescending = () => {
   return fetch(api.cars)
      .then(res => res.json())
      .then(data => Object.values(data))
      .then(res => res.sort(function (a, b) {
         return b.price - a.price;
      }))
      .catch(err => console.log(err));
}

export const sortByPriceAscendingForMyProfile = (userId) => {
   return fetch(api.cars)
      .then(res => res.json())
      .then(data => Object
         .values(data))
      .then(res => {
         return res.filter(car => car.ownerId === userId);
      })
      .then(res => res.sort(function (a, b) {
         return a.price - b.price;
      }))

      .catch(err => console.log(err));
}

export const sortByPriceDescendingForMyProfile = (userId) => {
   return fetch(api.cars)
      .then(res => res.json())
      .then(data => Object
         .values(data))
      .then(res => res.filter(car => car.ownerId === userId).sort(function (a, b) {
         return b.price - a.price;
      })

      )
      .catch(err => console.log(err));
}


export const deleteCar = async (id) => {

   let res = await request(`${api.car+`${id}.json`}`, 'DELETE', {})
      .catch(err=> console.log(err));

   return res;
}

export const editCar = async (id,car, carUpdated) => {
   console.log(id);
   let res = await request(`${api.car+`${id}.json`}`, 'PATCH', {...car,...carUpdated})
      .catch(err=> console.log(err));

   return res;
}

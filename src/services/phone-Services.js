import api from './api';
import { request } from "./requestService";

export const createNewPhone = async (   
      uid,
      phone,
      name
   ) => {

   let res = await request(`${api.phones}`, 'POST', { uid, phone, name});

   return res;
}

export const getPhone = async (uid) => {
   console.log(uid);      
      let res = await request(`${api.phone+uid+'.json'}`, 'Get');
      

   return res;
}


import api from './api';
import { request } from "./requestService";

export const createNewPhone = async (   
      uid,
      phone
   ) => {

   let res = await request(`${api.phones}`, 'POST', { uid, phone});

   return res;
}


import api from './api';

import { storage } from "../utils/firebase";


export function getUser() {
    return fetch(api.cars)
        .then(res => res.json())
        .catch(err => console.log(err));
}

export async function getUrl(uid) {
    return await storage.ref(`users/${uid}/profilePic.jpg`).getDownloadURL();
}

export function getOwnerPhone(uid) {
    return fetch(api.phone+`${uid}.json`)
        .then(res => { 
            
            return res.json()
        })
        .then(res=>{
            return res.phone;
        })
        .catch(err => console.log(err));
}


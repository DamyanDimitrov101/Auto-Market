const baseURL = 'https://auto-market-a25e4-default-rtdb.firebaseio.com/';

//https://auto-market-a25e4-default-rtdb.firebaseio.com/Cars.json
const exp = {
    cars: `${baseURL}Cars.json`,
    car: `${baseURL}Cars/`,
    questions: `${baseURL}Questions.json`,
    question: `${baseURL}Questions/`,
    phones: `${baseURL}Phones.json`,
    phone: `${baseURL}Phones/`,
};

export default exp;
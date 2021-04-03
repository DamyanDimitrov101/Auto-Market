import api from './api';
import { request } from "./requestService";

// export const getAll = () => {
//    return fetch(api.cars)
//       .then(res => res.json())
//       .then(data => Object.values(data))
//       .catch(err => console.log(err));
// }


export const createNewQuestion = async (   
      nameQuestion,
      email,
      question,
   ) => {

   let res = await request(`${api.questions}`, 'POST', { nameQuestion, email, question });

   let questionId = res.name;
   res = await setNewQuestionId(questionId);
   return res;
}

async function setNewQuestionId(questionId) {
   let res = await request(`${api.question + questionId + '.json'}`, 'PATCH', { id: questionId, returnSecureToken: true });

   return res;
}



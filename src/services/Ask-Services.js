import api from './api';
import { request } from "./requestService";

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



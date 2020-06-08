import {SAVE_QUESTION_ANS} from './questions'
export const RECEIVE_USERS='GET USERS'


export const receiveUsers=(users)=>
{
    return{
        type:RECEIVE_USERS,
        users
    }
} 
export function saveQuestionAnsINUSER(userID,option,questionID)
{
    return{
    type:SAVE_QUESTION_ANS,
    userID,
    option,
    questionID
    }
}
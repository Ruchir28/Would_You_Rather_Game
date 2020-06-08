import {_saveQuestionAnswer,_saveQuestion} from '../Utils/Data'
import {saveQuestionAnsINUSER} from './users'
export const RECEIVE_QUESTIONS='GET QUESTIONS'
export const SAVE_QUESTION_ANS='SAVE_QUESTION_ANS';
export const ADD_QUESTION='ADD_QUESTION';
export const receiveQuestion=(questions)=>
{
    return{
        type:RECEIVE_QUESTIONS,
        questions
    }
} 
export const saveQuestionAns=(userID,answer,questionID)=>
{
    return {
        type:SAVE_QUESTION_ANS,
        userID,
        answer,
        questionID
    }


}

export const HandlesaveQuestionAns=(userID,questionID,answer)=>
{
    return (dispatch)=>{
        dispatch(saveQuestionAns(userID,answer,questionID));
        //dispatch(saveQuestionAnsINUSER(userID,option,questionID))
        _saveQuestionAnswer({authedUser:userID,qid:questionID,answer}).catch((err)=>console.warn('ERROR IN SAVING ANSWER'));

    }
    
}
export const addQuestion=(question)=>
{
    return{
        type:ADD_QUESTION,
        question
    }
}
export const HandleAddQuestion=(optionOneText,optionTwoText,author)=>
{
    return (dispatch)=>{
    _saveQuestion({optionOneText,optionTwoText,author}).then(question=>{
        dispatch(addQuestion(question));
    });
}


}

import {_getQuestions,_getUsers} from '../Utils/Data';
import {receiveUsers} from './users'
import {receiveQuestion} from './questions'

export function handleInitialData()
{
    return (dispatch)=>{
    Promise.all([_getQuestions(),_getUsers()]).then(([questions,users])=>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestion(questions))
           // dispatch(setAuthedUser(id))
        })
    }
}
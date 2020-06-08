import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions';
import { SAVE_QUESTION_ANS } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION_ANS:
            return {
                ...state,
                [action.questionID]: {
                    ...state[action.questionID],
                    [action.answer]: {
                        ...state[action.questionID][action.answer],
                        votes: state[action.questionID][action.answer].votes.concat([action.userID])
                    }
                }

            }//FIXME:DONE
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        default:
            return state
    }
}
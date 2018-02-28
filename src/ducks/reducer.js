let initialState = {
    question: '',
    answerA: '',
    answerB: '',
    questionResult: '',
    percentResult: '',
    commentsResult: '',
    comment: '',
    likes: 0,
    
}

const READ_QUESTION = "READ_QUESTION"
const READ_ANSWER_A = "READ_ANSWER_A"
const READ_ANSWER_B = "READ_ANSWER_B"
const READ_QUESTION_RESULT = "READ_QUESTION_RESULT"
const READ_PERCENT_RESULT = "READ_PERCENT_RESULT"
const READ_COMMENTS_RESULT = "READ_COMMENTS_RESULT"
const TYPING_COMMENT = "TYPING_COMMENT"
const DELETE_COMMENT = "DELETE_COMMENT"


function reducer(state = initialState, action) {
    switch(action.type) {
        case READ_QUESTION:
            return Object.assign({}, state, {question: action.payload})

        case READ_ANSWER_A:
            return Object.assign({}, state, {answerA: action.payload})
        
        case READ_ANSWER_B:
            return Object.assign({}, state, {answerB: action.payload})

        case READ_QUESTION_RESULT:
            return Object.assign({}, state, {questionResult: action.payload})

        case READ_PERCENT_RESULT:
            return Object.assign({}, state, {percentResult: action.payload})

        case READ_COMMENTS_RESULT:
            return Object.assign({}, state, {commentsResult: action.payload})

        case TYPING_COMMENT:
            return Object.assign({}, state, {comment: action.payload})

        case DELETE_COMMENT:
            return Object.assign({}, state, {comment: action.payload})

    default: return state
    }
}


export function readQuestion(q) {
    return {
        type: READ_QUESTION,
        payload: q
    }
}

export function readAnswerA(ansA) {
    return {
    type: READ_ANSWER_A,
    payload: ansA
    }
}

export function readAnswerB(ansB) {
    return {
    type: READ_ANSWER_B,
    payload: ansB
    }
}

//----------------------------------------------------------------

export function readQuestionResult(q){
    return {
        type: READ_QUESTION_RESULT,
        payload: q
    }
}

export function readPercentResult(p) {
    return {
    type: READ_PERCENT_RESULT,
    payload: p
    }
}

export function readCommentsResult(c) {
    return {
        type: READ_COMMENTS_RESULT,
        payload: c
    }
}

export function typingComment(c) {
    return {
        type: TYPING_COMMENT,
        payload: c
    }
}

export default reducer
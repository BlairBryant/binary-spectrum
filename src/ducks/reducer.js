let initialState = {
    username: '',
    password: '',
    likes: 0,
    comment: ''
}

const TYPING_USERNAME = "TYPING_USERNAME"
const TYPING_PASSWORD = "TYPING_PASSWORD"

function reducer(state = initialState, action) {
    switch(action.type) {
        case TYPING_USERNAME:
            return Object.assign({}, state, {username: action.payload})
        
        case TYPING_PASSWORD:
            return Object.assign({}, state, {password: action.payload})

    default: return state
    }
}

export function typingUsername(username) {
    return {
        type: TYPING_USERNAME,
        payload: username
    }
}

export function typingPassword(password) {
    return {
        type: TYPING_PASSWORD,
        payload: password
    }
}




export default reducer
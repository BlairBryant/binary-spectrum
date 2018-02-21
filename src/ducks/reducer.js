let initialState = {
    username: '',
    password: '',
    likes: 0,
    comment: ''
}

const HOLD_PLACE = "HOLD_PLACE"

function reducer(state = initialState, action) {
    switch(action.type) {
    //     case HOLD_PLACE:
    //         return Object.assign({}, state, action.payload)

    default: return state
    }
}

// export function placeholder(p) {
//     return {
//         type: HOLD_PLACE,
//         payload: p
//     }
// }


export default reducer
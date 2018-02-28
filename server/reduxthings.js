import {createStore, applyMiddleware, combineReducers} from 'redux'
import reduxPromiseMiddleware from 'react-promise-middleware'

const reducer = combineReducers({people: peopleReducer})

export default createStore(
    reducer,
    applyMiddleware(reduxPromiseMiddleware)
)
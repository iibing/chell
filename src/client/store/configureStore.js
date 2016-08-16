if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod')
} else {
    module.exports = require('./configureStore.dev')
}

/*
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)

let configureStore = (initialState) => {
    return createStoreWithMiddleware(rootReducer, initialState)
}

export default configureStore

*/
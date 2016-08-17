import {createStore, applyMiddleware, compose} from 'redux'
import {persistState} from 'redux-devtools'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

const enhancer = compose(DevTools.instrument(), persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/)))

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)

let configureStore = (initialState) => {
    const store = createStoreWithMiddleware(rootReducer, initialState, enhancer)

    if (module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default))
        return store
    }
}

export default configureStore
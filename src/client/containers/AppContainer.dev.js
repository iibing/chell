import React from 'react'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import configureStore from '../store'
import AppRouter from './AppRouter.js'
import DevTools from './DevTools'

if (module.hot) {
    module.hot.accept()
}

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

class AppContainer extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <AppRouter history={history}/>
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

export default AppContainer
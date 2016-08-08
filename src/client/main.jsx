import React from 'react'
import {render} from 'react-dom'
import MainBody from './components/MainBody'
import TaskPannel from './components/TaskPannel'
import ChatPannel from './components/Chat'
import {Router, Route, browserHistory,IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'



import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

if (module.hot) {
    module.hot.accept()
}

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)


render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={MainBody}>
                <IndexRoute />
                <Route path="/tasks" component={TaskPannel}/>
                <Route path="/team" component={ChatPannel}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)

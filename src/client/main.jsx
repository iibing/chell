import React from 'react'
import {render} from 'react-dom'
import MainBody from './components/MainBody'
import TaskPanelContainer from './containers/TaskPanelContainer'
import ChatPanel from './components/ChatPanel'
import CalendarPanel from './components/CalendarPanel'
import SettingsPanel from './components/SettingsPanel'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

//import DevTools from './containers/DevTools'

if (module.hot) {
    module.hot.accept()
}

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
    <div>
        <Router history={history}>
            <Route path="/" component={MainBody}>
                <IndexRoute/>
                <Route path="/tasks" component={TaskPanelContainer}/>
                <Route path="/team" component={ChatPanel}/>
                <Route path='/calendar' component={CalendarPanel}/>
                <Route path='/settings' component={SettingsPanel}/>
            </Route>
        </Router>
    
    </div>
</Provider>, document.getElementById('root'))

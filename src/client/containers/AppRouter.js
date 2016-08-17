import React, {PropTypes} from 'react'

import MainBody from '../components/MainBody'
import TaskPanelContainer from './TaskPanelContainer'
import ChatPanel from '../components/ChatPanel'
import CalendarPanel from '../components/CalendarPanel'
import SettingsPanel from '../components/SettingsPanel'
import {Router, Route, IndexRoute} from 'react-router'

const propTypes = {
    history: PropTypes.object.isRequired
}

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" component={MainBody}>
                    <IndexRoute/>
                    <Route path="/tasks" component={TaskPanelContainer}/>
                    <Route path="/team" component={ChatPanel}/>
                    <Route path='/calendar' component={CalendarPanel}/>
                    <Route path='/settings' component={SettingsPanel}/>
                </Route>
            </Router>
        )
    }
}

AppRouter.propTypes = propTypes

export default AppRouter
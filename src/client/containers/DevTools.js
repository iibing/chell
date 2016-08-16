import React from 'react'
import {createDevTools} from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

// A Wonderful dev tool for redux
// https://github.com/gaearon/redux-devtools
export default createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
        <LogMonitor/>
    </DockMonitor>
)
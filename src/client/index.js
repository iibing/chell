import React from 'react'
import {render} from 'react-dom'
import AppContainer from './containers'

if (module.hot) {
    module.hot.accept()
}

render(<AppContainer />, document.getElementById('root'))

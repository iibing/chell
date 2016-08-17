import {isDevToolEnabled} from '../../../config/client.config'

if (isDevToolEnabled) {
    module.exports = require('./AppContainer.dev')
} else {
    module.exports = require('./AppContainer')
}

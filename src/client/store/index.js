import {isDevToolEnabled} from '../../../config/client.config'

if (isDevToolEnabled) {
    module.exports = require('./configureStore.dev')
} else {
    module.exports = require('./configureStore.prod')
}

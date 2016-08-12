const mongoose = require('mongoose')
const config = require('../../../config')

const Logger = require('../utils/logger')
const logger = new Logger(__filename)

const path = require('path')
const filename = path.basename(__filename)

mongoose.connect(config.database.url, {
    server: {
        poolSize: 20
    }
}, (err) => {
    if (err) {
        logger.error(`${filename} unable to connect to db, error ${err.message}`)
        process.exit(1)
    }
})

exports.Task = require('./task')
exports.Project = require('./project')
exports.User = require('./user')

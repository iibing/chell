'use strict'
const config = require('../../config')

const express = require('express')
let app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const Logger = require('./utils/logger').Logger
const logger = new Logger(__filename)

const routers = require('./routers')
let router = null

const {__HMR__, __DEV__} = config.stage

if (__HMR__) {
    let webpack = require('webpack')
    const webpackConfig = require('../../config/webpack.config.js')
    const compiler = webpack(webpackConfig)
    let webpackDevMiddleware = require('webpack-dev-middleware')
    let webpackHotMiddleware = require('webpack-hot-middleware')
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }))
    app.use(webpackHotMiddleware(compiler))

    // html-webpack-plugin will write html in memory instead of disk when hmr is enabled.
    const readFileFromMemory = (filename, callback) => {
        compiler.outputFileSystem.readFile(filename, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }
    router = routers(readFileFromMemory)

} else {
    const compression = require('compression')
    app.use(compression()) // Compressed using gzip
    app.use(config.path.publicPath, express.static(config.path.assets, {maxAge: config.cache.maxAge}))

    // Add log4js as a middleware in express, development only.
    // Better not add it into HMR dev server as lots of HMR requests will be in the log
    if (__DEV__) {
        const log4js = logger.getLog4js()
        app.use(log4js.connectLogger(logger.getLogger))
    }

    router = routers()
}

if (router) {
    app.use('/', router)
}

// 404 error and server error middleware, put these 2 middlewares into the bottom
//const {pageNotFoundErrorHandler, serverErrorHandler} = require('./routers/error')
//app.use(pageNotFoundErrorHandler)
//app.use(serverErrorHandler)

const {port} = config.server
app.listen(port, error => {
    if (error) {
        logger.error(error)
    } else {
        logger.info(`Server starts. Env: >${config.env}< | Port: ${port}`)
    }
})

module.exports = app
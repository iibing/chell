const log4js = require('../../../config/log4js.config')
const filelogger = log4js.getLogger('log-file')
const path = require('path')

/* 
    A wrapper of logger in log4js. this will print the file name before every log message
*/

class Logger {
    constructor(fileName){
        this.fileName = path.basename(fileName)
    }
    trace(...messages) {
        filelogger.trace(this.fileName,...messages)
    }
    debug(...messages) {
        filelogger.debug(this.fileName,...messages)
    }
    info(...messages) {
        filelogger.info(this.fileName,...messages)
    }
    log(...messages) {
        filelogger.log(this.fileName,...messages)
    }
    warn(...messages) {
        filelogger.warn(this.fileName,...messages)
    }
    error(...messages) {
        filelogger.error(this.fileName,...messages)
    }
    fatal(...messages) {
        filelogger.fatal(this.fileName,...messages)
    }
    getLogger() {
        return filelogger
    }
    getLog4js() {
        return log4js
    }
}

exports.Logger = Logger

const Logger = require('../utils/logger').Logger
const logger = new Logger(__filename)

//const Task = require('../model').Task

const createNewTask =(tasks) => {
    tasks.save((err) => {
        if(err) {
            logger.error(err)
            throw err
        }
    })
}
/*
const findTasks = (projectKey) => {
    return Task.find({project:projectKey})
}
*/

exports.createNewTask = createNewTask
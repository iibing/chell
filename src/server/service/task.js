const Logger = require('../utils/logger').Logger
const logger = new Logger(__filename)

const Task = require('../model').Task

const createNewTask = (task, callback) => {
    let taskEntity = new Task(task)
    taskEntity.save((err,taskEntity) => {
        if (err) {
            logger.error(err)
            callback(err)
        } else {
            callback(null,taskEntity)
        }
    })
}

const findTasksByProjectKey = (projectKey, callback) => {
    Task.find({
        project: projectKey
    }, callback)
}

exports.createNewTask = createNewTask
exports.findTasksByProjectKey = findTasksByProjectKey
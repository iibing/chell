const jsonContentType = {
    'Content-Type': require('../utils/mime').types.json
}

const findTasksByProjectKey = require('../service/task').findTasksByProjectKey

const Logger = require('../utils/logger').Logger
const logger = new Logger(__filename)

const restRouter = (router) => {

    router.get('/api/tasks/:projectId', (req, res) => {
        const projectId = req.params.projectId
        findTasksByProjectKey(projectId, (err, tasks) => {
            if (err) {
                logger.error(err)
                return
            }
            if (!tasks) {
                res.write(`No task is found in ${projectId}`)
                res.end()
            } else {
                res.writeHead(200, jsonContentType)
                res.write(JSON.stringify(tasks))
                res.end()
            }
        })
    })
    
    router.post('/api/tasks/',(req,res) => {
        console.log(req.body.task)
        res.writeHead(200, jsonContentType)
        res.write(JSON.stringify(req.body.task))
        res.end()
    })

}

module.exports = restRouter
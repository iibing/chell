const path = require('path')

const restRouter = (router) => {
    
    router.get('/api/tasks', (req,res) => {
           
    })
    
    router.get('/api/tasks/:id', (req, res) => {
        console.log(req.params.id)    
    })
}

module.exports = restRouter
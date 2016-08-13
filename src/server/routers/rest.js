const restRouter = (router) => {
    
    router.get('/api/tasks', (req,res) => {
           
    })
    
    router.get('/api/tasks/:id', (req, res) => {
        console.log(req.params.id)    
    })
    
    router.get('/api/task/retrieve', (req, res) => {
        //console.log(req.params.id)    
    })
    
    router.get('/api/task/create', (req, res) => { 
    })
    
    router.get('/api/task/update', (req, res) => {    
    })
    
    router.get('/api/task/delete', (req, res) => {   
    })
    
}

module.exports = restRouter
const path = require('path')
const config = require('../../../config')
const pagesPath = config.path.pages
const htmlContentType = { 'Content-Type': require('../utils/mime').types.html }

const sendPage = (loadPageFromMemory, pagePath, res) => {
    if (loadPageFromMemory) {
        loadPageFromMemory(pagePath, (err, data) => {
            if (err) {
                res.writeHead(500)
                res.write('Oops! Shit happens.')
                res.end()
                throw err
            } else {
                res.writeHead(200, htmlContentType)
                res.write(data)
                res.end()
            }
        })
    } else {
        res.sendFile(pagePath)
    }
}

const homePage = path.join(pagesPath, '/home.html')

const pagesRouter = (router, loadPageFromMemory) => {
    
    router.get('/', (req, res) => {
        sendPage(loadPageFromMemory, homePage, res)
    }),
    
    router.get('/tasks',(req,res) => {
        sendPage(loadPageFromMemory, homePage, res)
    }),
    router.get('/projects',(req,res) => {
        sendPage(loadPageFromMemory, homePage, res)
    }),
    router.get('/settings',(req,res) => {
        sendPage(loadPageFromMemory, homePage, res)
    }),
    router.get('/calendar',(req,res) => {
        sendPage(loadPageFromMemory, homePage, res)
    })
    router.get('/team',(req,res) => {
        sendPage(loadPageFromMemory, homePage, res)
    })    
}

module.exports = pagesRouter
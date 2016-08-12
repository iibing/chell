const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    key: String, 
    name: String, 
    owner: String,
    createdDate: Date,
    createdBy: String
})

ProjectSchema.index({
    key: 1
}, {unique: true})

module.exports = mongoose.model('Project', ProjectSchema)
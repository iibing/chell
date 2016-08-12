const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    key: String,
    project: String,
    summary: String,
    description: String,
    priority: Number,
    score: Number,
    type: String,
    dueDate: Date,
    assignee: String,
    createdBy: String,
    createdDate: Date,
    status: String
})
TaskSchema.index({
    key: 1
}, {unique: true})

module.exports = mongoose.model('Task', TaskSchema)
let mongoose = require('mongoose')
let Sequence = require('./sequence')

let TaskSchema = new mongoose.Schema({
    key: {
        type: String
    },
    project: {
        type: String,
        required: [true, 'Project name is missing']
    },
    summary: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    priority: {
        type: Number,
        min: 1,
        max: 3,
        required: true
    },
    score: {
        type: Number,
        min: 0
    },
    type: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date
    },
    assignee: String,
    createdBy: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Open', 'WIP', 'Done']
    }
})

TaskSchema.index({
    key: 1
}, {unique: true})

// Get the sequence before saving doc
// http://stackoverflow.com/questions/28357965/mongoose-auto-increment
// Don't use Arraw function in the callback of pre, otherwise 'this' will be undefined
// https://github.com/Automattic/mongoose/issues/3333
TaskSchema.pre('save', function(next) {
    // Update
    if(this.key) {
        next()
    }
    let self = this
    Sequence.findByIdAndUpdate({
        _id: 'CHELL'
    }, {
        $inc: {
            seq: 1
        }
    }, (err, sequence) => {
        if (err) {
            console.err(`error when saving task ${self}`)
            return next(err)
        }
        self.key = self.project + '-' + sequence.seq
        next()
    })
})

TaskSchema.post('save', function(doc) {
    console.log(`${doc.key} is saved`)
})

module.exports = mongoose.model('Task', TaskSchema)
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
TaskSchema.pre('save', (next) => {
    console.log('pre-save---------------')
    console.log(this)
    let self = this
    Sequence.findByIdAndUpdate({
        _id: 'CHELL'
    }, {
        $inc: {
            seq: 1
        }
    }, (err, sequence) => {
        if (err) {
            return next(err)
        }
        console.log(sequence.seq)
        self.key = self.project + '-' + sequence.seq
    })
})

module.exports = mongoose.model('Task', TaskSchema)
let mongoose = require('mongoose')

let SequenceSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    seq: {type: Number, default: 1}
})

let sequence = mongoose.model('Sequence',SequenceSchema)

exports.sequence = sequence
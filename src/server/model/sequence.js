let mongoose = require('mongoose')

let SequenceSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    seq: {type: Number, default: 1}
})

module.exports = mongoose.model('Sequence',SequenceSchema)
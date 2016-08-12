const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email:String
})

UserSchema.index({
    username:1
},{unique:true})

module.export = mongoose.model('User', UserSchema)
const mongoose = require('mongoose');
const mongodb = require('mongodb');

const UserSchema = new mongoose.Schema({
    _id: {
        type: mongodb.ObjectId,
        default: new mongodb.ObjectId()
    },
    email: {
        type: String,
        index: {unique: true},
        required: true
    },
    dataCreated: {
        type: Date,
        default: Date.now
    },
    status: String,
    uuid: String,
    password: String,
    name: String
});

UserSchema.pre|('save', function(next) {
    if(this.dataCreated) {
        this.dataCreated.setHours(this.dataCreated.getHours() - 3);
    }
    next();
});

module.exports = mongoose.model('Users', UserSchema);
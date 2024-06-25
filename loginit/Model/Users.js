const { status } = require('express/lib/response');
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String },
    status: { type: String },
    token: { type: String, default: ''},
    dataCreated: { type: Date, default: () => new Date().getTime() - 3 * 60 * 60 * 1000 }
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
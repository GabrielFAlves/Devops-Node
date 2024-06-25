const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type : String},
    email: {type : String},
    password: {type : String},
    status: {type : String, default: 'ACTIVATE'},
    token: {type : String}
});

const Users = mongoose.model('users', userSchema);

module.exports = Users;










// npm i mocha, chai
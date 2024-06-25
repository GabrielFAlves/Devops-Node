const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase', {useNewUrlParser: true});

mongoose.connection.once('once', () => {
    console.log('Mongoose connection has been made');
});

module.exports = mongoose;
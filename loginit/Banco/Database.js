const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/dbbanco';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Pattern singleton
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao banco de dados:'));
db.once('open', () => console.log('Conexão ao banco de dados realizada com sucesso!'));

module.exports = db;
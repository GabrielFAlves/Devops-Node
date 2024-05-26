const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbaula2', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Conectado ao banco de dados');
}).catch((err) => {
    console.log('Erro ao conectar ao banco de dados');
});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const UserSchema = require('./Entity/UsersSchema');
const UsersBCriptyService = require('./Service/UsersBCriptyService');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Abrindo a conexão com o banco de dados
require('./DB/DataBase');

app.post('/api/user', async (req, res) => {
    try {
        
        const user = new UserSchema({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            status: 'ativo',
            uuid: uuidv4()
        });
        
        const objeto = new UsersBCriptyService(user.password);
        user.password = objeto.gerarCriptografia();

        await UserSchema.create(user)
        .then((resp) => {
            res.status(200).json(resp);
        }) 
        .catch((err) => {
            throw Error(err);
        });
    
    } catch (error) {
        res.status(500).send({ message: 'Erro ao salvar usuário' });
    }
});

app.get('/api/teste', async (req, res) => {
    return res.status(200).json({"mensagem":"ola germento"});
});

app.listen(4001, () => { 
    console.log('Servidor rodando na porta 4001');
});
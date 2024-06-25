const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const PORT = 3015;
const chaveSecreta = 'segredo';
const Users = require('./Model/Users');

require('./Database/Banco');

const app = express();

app.use(bodyParser.json());

app.post('/api/users/save', async (req, res) => {
    try {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;

        const hashPassword = await bcrypt.hash(password, 8);

        let users = new Users({
            name,
            email,
            password: hashPassword,
            status: 'ACTIVATE',
            token: ''
        });

        let respUser = await users.save();

        res.status(200).send({message:"Users Created", respUser});
    } catch (error) {
        res.status(500).send({message:"Users Created Error"});
    }
});

app.post('/api/users/login', async (req, res) => {
    try{
        email = req.body.email;
        password = req.body.password;

        const users = await Users.findOne({'email': email});

        if(!users){
            throw new Error('error', 'Error no FindOne');
        }

        const isLogin = await bcrypt.compare(password, users.password);

        if(!isLogin){
            throw new Error('error', 'Error no Compare');
        }

        const tokenGenerated = jwt.sign(
            { 
                userId: users._id,
                email: users.email
            },
            chaveSecreta,
                { expiresIn: '1h' }
        );

        users.status = 'LOGGED';
        users.token = tokenGenerated;
        await users.save();

        res.status(200).send({message:"Users Login"});
    }catch(error){
        res.status(500).send({message:"Users Login Error"});
    }
});

app.post('/api/users/logout', async (req, res)=>{
    try{
       const myToken= req.body.token;
       const payload=  jwt.verify(myToken, chaveSecreta);
       const users = await Users.findById(payload.userId);
       if (!users){
         throw new Error('Error de autenticacao de Token');
       }
        users.status='LOGOUT';
        users.token='';
        await users.save();
        res.status(200).send({'message':'User Logout'});
       }catch(err){
        res.status(500).send({'message': err.message} );
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
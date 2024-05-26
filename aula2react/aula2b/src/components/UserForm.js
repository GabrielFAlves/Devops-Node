import React, { useState } from 'react';
import UserService from '../service/UsersService';


const UserForm = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[messages, setMessages] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {name, email, password};
        const resp = await UserService.createUser(user);
        setMessages("Usuario criado com sucesso!");
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className='uk-container uk-margin-medium-top'>
            <h2>Cadastro de Usuários</h2>
            {messages && <p>{messages}</p>}
            <form onSubmit={handleSubmit}>
                <label>Nome:</label><br />
                <input className='uk-input' type='text' required value={name} onChange={(e) => setName(e.target.value)} /><br />
                <label>Email:</label><br />
                <input className='uk-input' type='email' required value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label>Senha:</label><br />
                <input className='uk-input' type='password' required value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <button className='uk-button uk-button-primary uk-margin-small-top' type='submit'>Cadastrar</button>
            </form>
        </div>
    );

}

export default UserForm;
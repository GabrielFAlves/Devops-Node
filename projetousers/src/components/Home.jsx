import React from 'react';
import Users from '../mock/Users';

const Home = () => {
  return (
    <div className='mt-5 container'>
        <h2 className='text-center m-5'>Lista de Usuários</h2>
        <table className='table table-bordered table-hover'>
            <thead className='table-dark'>
                <tr className='text-center'>
                    <th>Foto</th>
                    <th>Nome</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {Users.map((u) => (
                    <tr key={u.id}>
                        <td>
                            <img src={u.imagem} alt={u.nome} className='img-thumbnail shadow' style={{ width: '100px' }} />
                        </td>
                        <td>{u.nome}</td>
                        <td>{u.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default Home;
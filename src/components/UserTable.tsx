import React from 'react';
import { User } from '../models/User';

interface UserTableProps {
  users: User[];
}

export const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Nome</th>
          <th>Cargo</th>
          <th>Data de Admissão</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>
              <img src={user.image} alt={user.name} width="50" />
            </td>
            <td>{user.name}</td>
            <td>{user.job}</td>
            <td>{new Date(user.admission_date).toLocaleDateString()}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
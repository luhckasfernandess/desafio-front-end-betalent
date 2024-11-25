import React from 'react';
import { useUsers } from './controllers/UserController';
import { UserTable } from './components/UserTable';

const App: React.FC = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Usuários</h1>
      <UserTable users={users} />
    </div>
  );
};

export default App;
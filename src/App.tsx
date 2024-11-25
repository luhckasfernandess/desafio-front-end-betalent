import React from 'react';
import { useEmployees } from './controllers/EmployeeController';
import { EmployeeTable } from './components/EmployeeTable';

const App: React.FC = () => {
  const { employees, loading, error, searchTerm, setSearchTerm } = useEmployees();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Funcionários</h1>
      <input
        type="text"
        placeholder="Pesquisar por nome, cargo ou telefone"
        value={searchTerm}
        onChange={({target}) => setSearchTerm(target.value)}
      />
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default App;

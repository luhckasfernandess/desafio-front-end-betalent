import React from 'react';
import { useEmployees } from './controllers/EmployeeController';
import { EmployeeCards } from './components/EmployeeCards';
import { EmployeeTable } from './components/EmployeeTable';
import { SearchInput } from './components/SearchInput';

const App: React.FC = () => {
  const { employees, loading, error, searchTerm, setSearchTerm } = useEmployees();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Funcionários</h1>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <EmployeeCards employees={employees} />
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default App;

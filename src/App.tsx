import React from 'react';
import { useEmployees } from './controllers';
import { EmployeeCards, EmployeeTable, SearchInput, HeaderTable } from './components';

const App: React.FC = () => {
  const { employees, loading, error, searchTerm, setSearchTerm } = useEmployees();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <HeaderTable />
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <EmployeeCards employees={employees} />
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default App;

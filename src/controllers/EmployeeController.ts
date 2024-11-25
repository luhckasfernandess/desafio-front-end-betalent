import { useState, useEffect } from 'react';
import { fetchEmployees } from '../services/api';
import { Employee } from '../models/Employee';

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
        setFilteredEmployees(data);
      } catch (error) {
        setError(`Erro ao carregar os dados. ${error}`);
      } finally {
        setLoading(false);
      }
    };

    getEmployees();
  }, []);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        employee.job.toLowerCase().includes(lowerCaseSearchTerm) ||
        employee.phone.includes(lowerCaseSearchTerm)
    );
    setFilteredEmployees(filtered);
  }, [searchTerm, employees]);

  return {
    employees: filteredEmployees,
    loading,
    error,
    searchTerm,
    setSearchTerm,
  };
};
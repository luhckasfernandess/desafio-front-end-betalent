import { useState, useEffect } from 'react';
import { fetchEmployees } from '../services/api';
import { Employee } from '../models/Employee';

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
      } catch (error) {
        setError(`Erro ao carregar os dados. ${error}`);
      } finally {
        setLoading(false);
      }
    };

    getEmployees();
  }, []);

  return { employees, loading, error };
};

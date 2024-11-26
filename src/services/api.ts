import axios from 'axios';
import { Employee } from '../models/Employee';
import { EmployeeApi } from '../models/EmployeeApi';
import { toCamelCase } from '../utils/dataTransform';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchEmployees = async (): Promise<Employee[]> => {
  const response = await api.get<EmployeeApi[]>('/employees');
  const employees = response.data.map(toCamelCase);
  return employees;
};

export default api;